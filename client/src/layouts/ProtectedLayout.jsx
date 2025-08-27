
import { Outlet, Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'
import Header from '../Components/Header'

const ProtectedLayout = () => {

    const { isAuthenticated, loading } = useAuth()

    if (loading) return <div>Loading...</div>

    return isAuthenticated ? (
        <>
            <Header />
            <Outlet />
        </>
    ) :
        (< Navigate to="/" />)


}

export default ProtectedLayout 