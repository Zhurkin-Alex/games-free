import React, { Dispatch, ReactNode, createContext, useContext, useReducer } from 'react'

interface AppState {
  overLayClickCloseBurger: boolean
  isUserAuth: boolean
}

export enum ACTION_TYPE {
  setOverlayClickCloseBurger = 'setOverlayClickCloseBurger',
  setIsUserAuth = 'setIsUserAuth',
}

type Action =
  | { type: ACTION_TYPE.setOverlayClickCloseBurger; payload: boolean }
  | { type: ACTION_TYPE.setIsUserAuth; payload: boolean }

const initialState: AppState = {
  overLayClickCloseBurger: false,
  isUserAuth: false,
}

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> } | undefined>(
  undefined,
)

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ACTION_TYPE.setOverlayClickCloseBurger:
      return { ...state, overLayClickCloseBurger: action.payload }
    case ACTION_TYPE.setIsUserAuth:
      return { ...state, isUserAuth: action.payload }
    default:
      return state
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
