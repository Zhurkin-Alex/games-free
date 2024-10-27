import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

interface AppState {
  overLayClickCloseBurger: boolean
}

export enum ACTION_TYPE {
  setOverlayClickCloseBurger = 'setOverlayClickCloseBurger',
}

type Action = 
  | { type: ACTION_TYPE.setOverlayClickCloseBurger; payload: boolean }

const initialState: AppState = {
  overLayClickCloseBurger: false,
};

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> } | undefined>(undefined);

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ACTION_TYPE.setOverlayClickCloseBurger:
      return { ...state, overLayClickCloseBurger: action.payload };
    default:
      return state;
  }
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
