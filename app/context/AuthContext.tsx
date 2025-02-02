import { ReactNode, createContext, useContext, useEffect, useState } from 'react'

import storageService from '../services/storageService'

interface AuthContextType {
  isAuthToken: boolean
  isLoading: boolean
  validateToken: () => Promise<void> // Функция для повторной проверки токена
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthToken, setAuthToken] = useState(false)
  const [isLoading, setLoading] = useState(true)

  const validateToken = async () => {
    setLoading(true)
    const token = storageService.get('token')

    if (!token) {
      setLoading(false)
      setAuthToken(false)
      return
    }

    try {
      const response = await fetch('https://server-prizma-supabase.vercel.app/api/auth/validate', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (response.ok) {
        const data = await response.json()
        console.log('Token is valid:', data.user)
        setAuthToken(true)
      } else {
        storageService.clear('token')
        setAuthToken(false)
      }
    } catch (error) {
      console.error('Token validation error:', error)
      storageService.clear('token')
      setAuthToken(false)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    validateToken()
  }, [])

  return (
    <AuthContext.Provider value={{ isAuthToken, isLoading, validateToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
