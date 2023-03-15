import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Trending() {

    const router = useRouter()
    const [videos, setVideos] = useState([]);

    const fetchVideos = async () => {
        const apiURL = "http://localhost:3001/api/trendingVideos"
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            if (response.data.status == 0) {
                setVideos(response.data.videos);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 17l6 -6l4 4l8 -8"></path>
                        <path d="M14 7l7 0l0 7"></path>
                      </svg>
                        <h2 className="font-extrabold text-4xl">trending</h2>
                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-2 text-base leading-7 text-gray-600">
                                <p className="text-m">User profiles with the most number of followers and their email verified.</p>
                                <ul className="space-y-1">
                                    {videos.map((video) => (
                                        <Link key={video.video_id} href="/profile">
                                            <li className="flex items-center py-2">
                                                <div class="flex items-center space-x-4 w-full bg-white p-2 bg-slate-50 hover:drop-shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-8">
                                                    <div class="font-medium">
                                                        <div>{video.title}</div>
                                                        <div class="text-sm text-gray-500 dark:text-gray-400"><code className="text-sm font-bold text-gray-900">{video.username}</code></div>
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
