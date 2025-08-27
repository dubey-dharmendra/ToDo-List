import { useContext, createContext, useEffect, useState } from 'react'


const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const savedUser = localStorage.getItem('user')
        setUser(savedUser ? JSON.parse(savedUser) : null)
        setLoading(false)
    }, [])




    const login = (userData) => {
        setUser(userData)
        localStorage.setItem('user', JSON.stringify(userData))

    }



    const isAuthenticated = !!user
    return (
        <AuthContext.Provider value={{ user, login, isAuthenticated, loading }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)