import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router'

const Register = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        dob: '',
        country: '',
        password: '',
        confirmPassword: ''
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
                console.log('mismatch', formData['password'], formData['confirmPassword']);
            }

            else {
                setStatus({ ...status, error: false, message: '' });
                console.log('right');
            }
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        var bcrypt = require('bcryptjs');
        const pwd_hash = "b'" + bcrypt.hashSync(formData.password, '$2b$12$spvL8Vjm3rIgqj7f5GvIEu') + "'";
        const apiURL = "http://localhost:3001/api/register"
        try {
            const response = await axios.post(apiURL, { 'firstName': formData.firstName, 'lastName': formData.lastName, 'username': formData.username, 'email': formData.email, 'dob': formData.dob, 'country': formData.country, 'pwd_hash': pwd_hash });
            console.log(response.data);
            if (response.data.status == 0) {
                router.push('/home')
            } else {
                setStatus({...status, error:true, message: response.data.message});
            }
        } catch (error) {
            console.log(error)
            setStatus({...status, error:true, message: "Error encountered. Please try again later."});
        }
    }

    return (
        <div className="bg-gray-100 py-8">
            <div className="max-w-md mx-auto bg-white rounded-md shadow-md overflow-hidden">
                <div className="py-4 px-6">
                    <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
                    {status.message && <p className="text-center mt-2 text-sm text-red-600">{status.message}</p>}
                </div>
                <form onSubmit={handleSubmit} className="px-6 pb-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-1">First Name</label>
                            <input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-1">Last Name</label>
                            <input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="username" className="block text-gray-700 font-semibold mb-1">Username</label>
                        <input type="text" name="username" id="username" required value={formData.username} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="dob" className="block text-gray-700 font-semibold mb-1">Date of Birth</label>
                            <input type="date" name="dob" id="dob" required value={formData.dob} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="country" className="block text-gray-700 font-semibold mb-1">Country</label>
                            <input type="text" name="country" id="country" required value={formData.country} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">Email</label>
                        <input type="text" name="email" id="email" required value={formData.email} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block text-gray-700 font-semibold mb-1">Password</label>
                        <input type="password" name="password" id="password" required value={formData.password} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-1">Confirm Password</label>
                        <input type="password" name="confirmPassword" id="confirmPassword" required value={formData.confirmPassword} onChange={handleInputChange} className="border border-gray-400 p-2 w-full rounded-md" />
                    </div>
                    <div className="mt-4">
                        <button type="submit" className="bg-slate-500 hover:bg-slate-600 text-white px-4 py-2 rounded-md w-full">Register</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Register;
