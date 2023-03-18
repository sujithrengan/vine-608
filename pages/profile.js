import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Profile() {

    const router = useRouter()
    const [user, setUser] = useState({});
    const { id } = router.query

    const fetchUser = async () => {

        const apiURL = process.env.NEXT_PUBLIC_API_URL + "/api/getUser?id=" + id
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            if (response.data.status == 0) {
                setUser(response.data.user);
            } else {
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    };

    
    useEffect(() => {
        if (!id) {
            return;
        }
        fetchUser();
    }, [id]);

    return (
        <>
            <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-leaf" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M5 21c.5 -4.5 2.5 -8 7 -10"></path>
                        <path d="M9 18c6.218 0 10.5 -3.288 11 -12v-2h-4.014c-9 0 -11.986 4 -12 9c0 1 0 3 2 5h3z"></path>
                    </svg>
                    {user && <div class="mx-auto max-w-md">
                        <h2 class="font-extrabold text-4xl">{user.first_name}'s profile</h2>
                        <div class="divide-y divide-gray-300/50">
                            <div class="space-y-3 py-2 text-base leading-7 text-gray-600">
                                <p>This is the public profile of a user you glance at their recent videos and other stats. </p>
                                <div class="bg-white rounded-lg mt-2" id="stats">
                                    <div class="flex flex-row gap-4 text-gray-900 content-start">
                                        <div class="flex flex-col">
                                            <dt class="text-2xl font-extrabold">{user.num_followers}</dt>
                                            <dd class="font-light text-gray-500 ">followers</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="text-2xl font-extrabold">{user.num_following}</dt>
                                            <dd class="font-light text-gray-500 ">following</dd>
                                        </div>
                                        <div class="flex flex-col">
                                            <dt class="text-2xl font-extrabold">{user.num_videos}</dt>
                                            <dd class="font-light text-gray-500 ">videos</dd>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-8 text-base font-semibold leading-7">
                                <p class="text-gray-600">Recent Videos</p>
                                <ul className="space-y-1">
                                    {user.videos && user.videos.map((video) => (
                                        <Link key={video.video_id} href={"/video?id=" + video.video_id}>
                                            <li className="flex items-center py-2">
                                                <div class="flex items-center space-x-4 w-full bg-white p-2 bg-slate-50 hover:drop-shadow-md ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-8">
                                                    <div class="font-medium">
                                                        <div>{video.title}</div>
                                                        <div class="text-sm text-gray-500 dark:text-gray-400">{video.uploaded_on.replace('00:00:00 GMT','')}</div>
                                                    </div>
                                                </div>

                                            </li>
                                        </Link>))}
                                </ul>

                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}
