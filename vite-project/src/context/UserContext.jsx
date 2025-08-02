import { createContext, useContext, useState } from "react";

// Create the context
export const UserContext = createContext();

// ✅ Custom hook for easy access
export const useUserContext = () => useContext(UserContext);

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Guest",
    email: "quest@gmail.com",
    password: "guest123",
    isLoggedIn: false,
  });

  // Login
  const login = (userData) => {
    setUser(userData);
  };

  // Logout
  const logout = () => {
    setUser(null);
  };

  // Update user
  const updateUser = (updatedData) => {
    setUser((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <UserContext.Provider value={{ user: user, login, logout, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
