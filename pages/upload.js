import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Upload = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        
    })
    const [status, setStatus] = useState({
        error: false,
        submitted: false,
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (e.target.name == 'confirmPassword') {
            if (formData['password'] != e.target.value) {
                setStatus({ ...status, error: true, message: 'Passwords do not match' });
            }

            else {
                setStatus({ ...status, error: false, message: '' });
            }
        }
    }

    const handleSubmit = async event => {
        event.preventDefault();
        var bcrypt = require('bcryptjs');
        const pwd_hash = "b'" + bcrypt.hashSync(password, '$2b$12$spvL8Vjm3rIgqj7f5GvIEu') + "'";
        const apiURL = "http://localhost:3001/api/login"
        try {
            const response = await axios.post(apiURL, { 'email': email, 'pwd_hash': pwd_hash });
            console.log(response.data);
            if (response.data.status == 0) {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('user_id', response.data.user_id);
                }
                router.push('/home')
            } else {
                setStatus({ ...status, error: true, message: response.data.message });
            }
        } catch (error) {
            console.log(error)
        }
    };

    useState(() => {
        if (typeof window !== 'undefined') {
            const user_id = localStorage.getItem('user_id')
            if (user_id == null) {
                router.push('/login')
            }
        }

    }, []);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-upload" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1"></path>
                            <path d="M9 15l3 -3l3 3"></path>
                            <path d="M12 12l0 9"></path>
                        </svg><h2 className="font-extrabold text-4xl">upload</h2>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-2 text-base leading-7 text-gray-600">
                                <p className="text-m">Upload a video. Remember to keep the title short for better reachability.</p>
                                {status.message && <div id="alert-2" class="flex p-4 mb-4 text-red-800 rounded-lg bg-red-50 " role="alert">
                                    <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Info</span>
                                    <div class="ml-3 text-sm font-medium">{status.message}</div></div>}
                                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                                    <form className="space-y-4" onSubmit={handleSubmit}>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                title
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="title" name="title" type="text" required
                                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="title"
                                                    value={formData.title}
                                                    onChange={handleInputChange}
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
                            <div className="pt-8 text-base font-semibold leading-7">
                                <p className="text-gray-900">Made with Next.js, Tailwind and 🖤</p>
                                <p>
                                    <a href="mailto:sujithrengan@tamu.edu" className="text-sky-500 hover:text-sky-600">Email me &rarr;</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Upload;
