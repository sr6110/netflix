import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src='https://assets.nflxext.com/ffe/siteui/vlv3/9134db96-10d6-4a64-a619-a21da22f8999/a449fabb-05e4-4c8a-b062-b0bec7d03085/IN-en-20240115-trifectadaily-perspective_alpha_website_medium.jpg' alt='netflix background' />
            </div>
            <form className='absolute w-3/12 p-5 bg-black my-36 mx-auto left-0 right-0 text-white bg-opacity-80'>
                <h1 className='text-3xl font-bold '>Sign In</h1>
                <input type='text' placeholder='Email address' className='p-4 my-4 w-full bg-gray-700' />
                <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' />
                <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Sign In</button>
            </form>
        </div>
    )
}

export default Login