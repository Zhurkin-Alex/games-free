import { createContext, useContext, useReducer, ReactNode, Dispatch } from "react";

interface AppState {
  someState: string;
  overLayClickCloseBurger: boolean
}

type Action = 
  | { type: "SET_STATE"; payload: string }
  | { type: "RESET_STATE" }
  | { type: "OVERLAY_CLICK_ClOSE_BURGER"; payload: boolean }

const initialState: AppState = {
  someState: "initial value",
  overLayClickCloseBurger: false,
};

const AppContext = createContext<{ state: AppState; dispatch: Dispatch<Action> } | undefined>(undefined);

const reducer = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case "SET_STATE":
      return { ...state, someState: action.payload };
    case "OVERLAY_CLICK_ClOSE_BURGER":
      return { ...state, overLayClickCloseBurger: action.payload };
    case "RESET_STATE":
      return initialState;
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
