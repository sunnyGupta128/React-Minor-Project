import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from '../components'
import {Link, useNavigate} from 'react-router-dom'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form'

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register, handleSubmit} = useForm();
    const [error, setError] = useState("");

    const login=async(data)=>{
        setError("");
        try {
            const session = await authService.login(data);
            if(session){
                const userData=await authService.getCurrentUser();
                if(userData){
                    dispatch(authLogin(userData))
                    navigate('/')
                }
            }

        } catch (error) {
            setError(error.message);
        }
    }
  return (
    <div
    className='mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10'
    >
        <div className='mb-2 flex justify-center'>
            <span className='inline-block w-full max-w-[100px]'>
                <Logo  width='100%'/>
            </span>
        </div>
        <h2
        className='text-center text-2xl font-bold text-black'
        >Sign in to your Account</h2>
        <p
        className='mt-2 text-center text-base text-black/600'
        >
            Don&apos;t have an account?&nbsp;
            <Link to='/Signup'
            className='font-medium text-primary transition-all duration-200 hover:underline'
            >Sign Up</Link>
        </p>
        {error && <p className='text-red-600 text-center mt-8' >{error}</p>}
        <form onSubmit={handleSubmit(login)}>
            <div>
                <Input
                label='Email: '
                placeholder='Enter your email'
                type='email'
                {...register('email', {
                    required: true,
                    validate: {
                        matchPattern: (value) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(value)|| 'Invalid email address'
                    }
                })}
                />
                <Input
                label='Password: '
                placeholder='Enter your password'
                type='password'
                {...register('password', {
                    required: true,
                    minLength: 6
                })}
                />
                <Button
                type='submit'
                className='w-full'
                >Sign in</Button>
            </div>
        </form>
    </div>
  )
}

export default Login