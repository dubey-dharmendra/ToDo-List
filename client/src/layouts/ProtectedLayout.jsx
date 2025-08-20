
import { Outlet, Navigate } from 'react-router-dom'

import { useAuth } from '../context/AuthContext'

const ProtectedLayout = () => {

    const { isAuthenticated } = useAuth

    if (isAuthenticated) {
        <Outlet />
    } else {

    }


}

export default ProtectedLayout 