
import axiosInstance from "./axios"


const signup = (data) => {

    return axiosInstance.post('/signup', data)
}


const login = (data) => {
    return axiosInstance.post('/login', data)
}

const AuthServices = { signup, login }

export default AuthServices