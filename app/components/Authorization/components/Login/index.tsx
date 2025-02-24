import { ACTION_TYPE, useAppContext } from '@/app/context/AppContext'
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

interface ILogin {
  setIsAuth: (type: boolean) => void
  changeAuth: (auth: 'login' | 'register') => void
}

const Login = ({ setIsAuth, changeAuth }: ILogin) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const { dispatch } = useAppContext()

  const isActiveButton = Boolean(email.trim() && password.length >= 8)

  const validateForm = () => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch('https://server-prizma-supabase.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message)
      }

      const data = await response.json()
      storageService.set('token', data.token)
      dispatch({ type: ACTION_TYPE.setIsUserAuth, payload: true })
      toast.success('Login successful!')

      setIsAuth(true)
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
        <h2>Login</h2>
        <h3 onClick={() => changeAuth('register')}>Registration</h3>
      </StyledTitle>
      <StyledInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        required
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
        disabled={!isActiveButton}
        isActiveButton={isActiveButton}
        type="submit"
      >
        Login
      </StyledSubmitButton>
    </StyledForm>
  )
}

export default Login
