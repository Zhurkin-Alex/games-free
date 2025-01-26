import storageService from '@/app/services/storageService'
import { useState } from 'react'
import { toast } from 'sonner'

import {
  StyledEyeIcon,
  StyledForm,
  StyledInput,
  StyledPasswordContainer,
  StyledSubmitButton,
  StyledTitle,
} from './style'

interface IRegistration {
  closeModal: () => void
  changeAuth: (auth: 'login' | 'register') => void
}

const Registration = ({ closeModal, changeAuth }: IRegistration) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const isActiveButton = Boolean(name.trim() && email.trim() && password.length >= 8)

  const validateForm = () => {
    if (!name.trim()) {
      toast.error('Name is required')
      return false
    }
    if (!email.trim()) {
      toast.error('Email is required')
      return false
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Invalid email format, add @ and .')
      return false
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return false
    }
    if (!/[a-zA-Z]/.test(password)) {
      toast.error('Password must contain at least one letter')
      return false
    }
    if (!/[0-9]/.test(password)) {
      toast.error('Password must contain at least one number')
      return false
    }
    return true
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch('https://server-prizma-supabase.vercel.app/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const data = await response.json()

      // Сохраняем токен в localStorage
      storageService.set('token', data.token)

      toast.success('Registration successful!')
      closeModal()
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message || 'Something went wrong!')
      } else {
        toast.error('An unexpected error occurred!')
      }
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      noValidate
    >
      <StyledTitle>
        <h2>Registration</h2>
        <h3 onClick={() => changeAuth('login')}>Login</h3>
      </StyledTitle>
      <StyledInput
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
      />
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <StyledPasswordContainer>
        <StyledInput
          type={showPassword ? 'text' : 'password'}
          placeholder="Password (min 8 characters)"
          value={password}
          autoComplete="off"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
        <StyledEyeIcon onClick={togglePasswordVisibility}>
          {showPassword ? '🙈' : '👁️'}
        </StyledEyeIcon>
      </StyledPasswordContainer>
      <StyledSubmitButton
        type="submit"
        disabled={!isActiveButton}
        isActiveButton={isActiveButton}
      >
        Register
      </StyledSubmitButton>
    </StyledForm>
  )
}

export default Registration
