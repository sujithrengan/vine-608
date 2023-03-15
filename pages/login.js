import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmailChange = event => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = event => {
        setPassword(event.target.value);
    };

    const handleSubmit = async event => {
        event.preventDefault();
        var bcrypt = require('bcryptjs');
        const pwd_hash = "b'" + bcrypt.hashSync(password, '$2b$12$spvL8Vjm3rIgqj7f5GvIEu') + "'";
        const apiURL = "http://localhost:3001/api/login"
        try {
            const response = await axios.post(apiURL, { 'email': email, 'pwd_hash': pwd_hash });
            console.log(response.data);
            if(response.data.status == 0){
                router.push('/home')
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.log(error)
            setErrorMessage(error.response.data.message);
        }
    };

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto w-96">

                    <div className="divide-y divide-gray-300/50">
                        <div className="space-y-6 py-1 text-base leading-7 text-gray-600">
                            {errorMessage && <p className="text-center text-sm text-red-600">{errorMessage}</p>}
                            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="email" name="email" type="text" autoComplete="email" required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Email"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                            Password
                                        </label>
                                        <div className="mt-1">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                autoComplete="current-password"
                                                required
                                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Password"
                                                value={password}
                                                onChange={handlePasswordChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="text-sm">
                                            New user?{' '}
                                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                Register here
                                            </a>
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-600 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
