import axios from "axios"


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const signup = (data) => {

    return axiosInstance.post('/signup', data)
}


const login = (data) => {
    return axiosInstance.post('/login', data)
}

const AuthServices = { signup, login }

export default AuthServices