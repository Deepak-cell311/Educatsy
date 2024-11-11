import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export default function Authprovider({ children }) {
     const navigate = useNavigate();

     const [authUser, setAuthUser] = useState(() => {
          const storedUser = localStorage.getItem("Users");
          return storedUser ? JSON.parse(storedUser) : null;
     });


     const logout = () => {
          setAuthUser(null);
          localStorage.removeItem('Users')
          navigate('/login');
     };
     
     useEffect(() => {
          console.log("AuthProvider - authUser:", authUser);
      }, [authUser]);
      

     return (
          <AuthContext.Provider value={{ authUser, setAuthUser, logout }}>
               {children}
          </AuthContext.Provider>
     );
}

export const useAuth = () => useContext(AuthContext);
