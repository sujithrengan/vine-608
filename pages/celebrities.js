import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Celebrities() {

    const router = useRouter()
    const [profiles, setProfiles] = useState([]);

    const fetchProfiles = async () => {
        const apiURL = "http://localhost:3001/api/celebrities"
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            if (response.data.status == 0) {
                setProfiles(response.data.profiles);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProfiles();
    }, []);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sparkles" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
                        </svg>
                        <h2 className="font-extrabold text-4xl">celebrities</h2>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-2 text-base leading-7 text-gray-600">
                                <p className="text-m">User profiles with the most number of followers and their email verified.</p>
                                <ul className="space-y-1">
                                    {profiles.map((profile) => (
                                        <Link key={profile.user_id} href="/profile">
                                            <li className="flex items-center py-2">
                                                <div class="flex items-center space-x-4 w-full bg-white p-2 bg-slate-50 hover:drop-shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-8">
                                                    <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                                                        <span class="font-bold text-gray-600 dark:text-gray-300">{profile.first_name[0]}{profile.last_name[0]}</span>
                                                    </div>
                                                    <div class="font-medium">
                                                        <div>{profile.first_name} {profile.last_name}</div>
                                                        <div class="text-sm text-gray-500 dark:text-gray-400"><code className="text-sm font-bold text-gray-900">{profile.username}</code></div>
                                                    </div>
                                                </div>

                                            </li>
                                        </Link>))}
                                </ul>
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
}
