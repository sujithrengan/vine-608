import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Topics() {

    const router = useRouter()
    const [topics, setTopics] = useState([]);

    const fetchTopics = async () => {
        const apiURL = "http://localhost:3001/api/getPopularTopics"
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            if (response.data.status == 0) {
                setTopics(response.data.topics);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchTopics();
    }, []);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"></path>
                        <path d="M2.5 21h8l-4 -7z"></path>
                        <path d="M14 3l7 7"></path>
                        <path d="M14 10l7 -7"></path>
                        <path d="M14 14h7v7h-7z"></path>
                      </svg>
                        <h2 className="font-extrabold text-4xl">topics</h2>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-2 text-base leading-7 text-gray-600">
                                <p className="text-m">Discover the most popular topics and conversations in real-time.</p>
                                <ul className="space-y-1">
                                    {topics.map((topic) => (
                                        <Link key={topic.topic_id} href={"/topic?name=" + topic.name}>
                                            <button type="button" class="inline-flex m-1 items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-slate-500 rounded-lg hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                                {topic.name}
                                                <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold bg-slate-200 text-black rounded-full">
                                                  {topic.num_videos}
                                                </span>
                                            </button>

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
