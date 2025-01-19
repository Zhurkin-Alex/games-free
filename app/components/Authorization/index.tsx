import storageService from '@/app/services/storageService'
import { useEffect, useState } from 'react'

import Login from './components/Login'
import Registration from './components/Registration'
import {
  StyledButtonAuth,
  StyledButtonLogin,
  StyledModal,
  StyledModalButtons,
  StyledModalContent,
} from './style'

interface IAuthorization {
  closeModal: () => void
}

const Authorization = ({ closeModal }: IAuthorization) => {
  const [isLogin, setIsLogin] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true) // Состояние загрузки для проверки токена

  useEffect(() => {
    const validateToken = async () => {
      const token = storageService.get('token')

      if (!token) {
        setLoading(false) // Если токена нет, завершаем проверку
        return
      }

      try {
        const response = await fetch('http://localhost:4100/api/auth/validate', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        if (response.ok) {
          const data = await response.json()
          console.log('Token is valid:', data.user)
          setAuth(true)
          closeModal()
        } else {
          // Если токен недействителен, удаляем его
          storageService.clear('token')
        }
      } catch (error) {
        console.error('Token validation error:', error)
        storageService.clear('token')
      } finally {
        setLoading(false)
      }
    }

    validateToken()
  }, [closeModal])

  const loginHandler = () => {
    setIsLogin(true)
  }

  const registerHandler = () => {
    setIsRegister(true)
  }

  const changeAuth = (auth: 'login' | 'register') => {
    if (auth === 'login') {
      setIsLogin(true)
      setIsRegister(false)
    } else if (auth === 'register') {
      setIsLogin(false)
      setIsRegister(true)
    }
  }

  // Если токен проверяется, показываем индикатор загрузки
  if (loading) {
    return (
      <StyledModal>
        <StyledModalContent>
          <p>Loading...</p>
        </StyledModalContent>
      </StyledModal>
    )
  }

  // Если пользователь авторизован, ничего не показываем
  if (auth) {
    return null
  }

  return (
    <StyledModal>
      <StyledModalContent>
        {isLogin && (
          <Login
            changeAuth={changeAuth}
            closeModal={closeModal}
          />
        )}
        {isRegister && (
          <Registration
            changeAuth={changeAuth}
            closeModal={closeModal}
          />
        )}
        {!isLogin && !isRegister && (
          <>
            <h2>Sign up and win prizes!</h2>
            <p>Join us to receive bonuses, participate in promotions, and win valuable prizes.</p>
            <StyledModalButtons>
              <StyledButtonLogin onClick={loginHandler}>Login</StyledButtonLogin>
              <StyledButtonAuth onClick={registerHandler}>Registration</StyledButtonAuth>
            </StyledModalButtons>
          </>
        )}
      </StyledModalContent>
    </StyledModal>
  )
}

export default Authorization
