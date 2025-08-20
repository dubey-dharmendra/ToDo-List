import { useContext, createContext, useEffect, useState, Children } from 'react'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const savedUser = localStorage.getItem('user')
    setUser(savedUser ? setUser(JSON.parse(savedUser)) : null)

    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))
    }



    const isAuthenticated = !!user

    return (
        <AuthContext.Provider value={(user, login)}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = useContext(AuthContext)