import { ReactNode, createContext, useContext, useState } from 'react'

import storageService from '../services/storageService'

interface AuthContextType {
  isAuthToken: boolean
  isLoading: boolean
  validateToken: () => Promise<void>
}

const AuthTokenContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthToken, setAuthToken] = useState(false)
  const [isLoading, setLoading] = useState(false)

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
          'Content-Type': 'application/json',
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

  return (
    <AuthTokenContext.Provider value={{ isAuthToken, isLoading, validateToken }}>
      {children}
    </AuthTokenContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthTokenContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
