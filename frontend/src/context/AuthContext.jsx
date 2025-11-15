import { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [role, setRole] = useState(localStorage.getItem("role") || null);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  // LOGIN FUNCTION (TOKEN + ROLE + USER OBJECT)
  const login = (token, role, userData) => {
    setToken(token);
    setRole(role);
    setUser(userData);

    localStorage.setItem("token", token);
    localStorage.setItem("role", role);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // LOGOUT FUNCTION
  const logout = () => {
    setToken(null);
    setRole(null);
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ token, role, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
