import Button from '@mui/material/Button';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify';
import AuthServices from '../services/authServices';


const Login = () => {

    const [isLogin, setIsLogin] = useState(true)


    const handleForm = async (e) => {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        let res
        try {
            if (isLogin) {
                res = await AuthServices.login(data)
                toast.success('Login Sucessfully')
            } else {

                res = await AuthServices.signup(data)
                toast.success('Signup Sucessfully')
            }
            form.reset();
        } catch (err) {
            if (err.status >= 400)
                toast.error(err?.response?.data?.error)
        }

    }


    return (
        <div className='flex p-5 h-screen'>
            <img src="https://images.pexels.com/photos/32523950/pexels-photo-32523950.jpeg" alt="Login_image" className='w-[50%] h-full' />

            <div className='w-[50%] h-full mx-5 flex flex-col justify-center' >

                {isLogin ?

                    <form onSubmit={handleForm} className='text-xl'>

                        <p className='text-center text-2xl font-bold'>Login</p>

                        <div className='my-4'>
                            Email
                            <input type="email" placeholder='Enter Your Email...' name='email'
                                className='mt-1 w-full border-2 py-1 px-2 rounded-md' />
                        </div>

                        <div>
                            Password
                            <input type="password" placeholder='password' name='password'
                                className='mt-1 w-full border-2 px-2 py-1 rounded-md' />
                        </div>

                        <Button sx={{ mt: 5, mb: 2, width: '100%' }} variant="contained" type='submit'>Login</Button>

                    </form> :

                    <form onSubmit={handleForm} className='text-xl'>

                        <p className='text-center text-2xl font-bold'>SignUp</p>


                        <div>
                            name
                            <input type="text" placeholder='enter your name' name='name'
                                className='my-1 w-full border-2 px-2 py-1 rounded-md' />
                        </div>

                        <div className='my-4'>
                            Email
                            <input type="email" placeholder='Enter Your Email...' name='email'
                                className='my-1 w-full border-2 py-1 px-2 rounded-md' />
                        </div>

                        <div className='my-4'>
                            Password
                            <input type="password" placeholder='password' name='password'
                                className='my-1 w-full border-2 px-2 py-1 rounded-md' />
                        </div>


                        <Button sx={{ mt: 5, mb: 2, width: '100%' }} variant="contained" type='submit'>SignUp</Button>

                    </form>

                }

                <p className='text-md font-semibold'>Don't have account? <NavLink to='/' className='text-blue-800' onClick={() => setIsLogin(!isLogin)}>  {isLogin ? 'SignUp' : 'Login'} </NavLink></p>

            </div>


        </div >
    )
}

export default Login