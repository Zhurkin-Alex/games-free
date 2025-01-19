import Link from 'next/link'
import { useState } from 'react'

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
