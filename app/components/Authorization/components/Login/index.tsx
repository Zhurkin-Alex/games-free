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
  closeModal: () => void
  changeAuth: (auth: 'login' | 'register') => void
}

const Login = ({ closeModal, changeAuth }: ILogin) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validateForm()) {
      console.log('Login with email and password:', email, password)
      toast.success('Login successful!')
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
