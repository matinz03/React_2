import { createContext, useContext, useReducer } from "react";
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
const AuthContext = createContext();
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        Error: false,
        ErrorMessage: "",
      };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    case "auth/failed":
      return {
        ...state,
        Error: true,
        ErrorMessage: "Email or Password is incorrect",
      };

    default:
      throw new Error("Unknown action");
  }
}
const initialState = {
  user: null,
  isAuthenticated: false,
  Error: false,
  ErrorMessage: "",
};
function AuthProvider({ children }) {
  const [{ user, isAuthenticated, Error, ErrorMessage }, dispatch] = useReducer(
    reducer,
    initialState
  );
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    } else {
      dispatch({ type: "auth/failed" });
    }
  }
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, Error, ErrorMessage }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) throw new Error("Context used out of order");
  return context;
}
export { AuthProvider, useAuth };
