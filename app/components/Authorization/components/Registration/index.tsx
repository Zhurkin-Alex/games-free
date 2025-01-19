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
      toast.error('Invalid email format')
      return false
    }
    if (password.length < 8) {
      toast.error('Password must be at least 8 characters')
      return false
    }
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      toast.success('Registration successful!')
      closeModal()
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
