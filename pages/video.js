import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Video() {

    const router = useRouter()
    const { id } = router.query

    const [video, setVideo] = useState({});

    const fetchVideo = async () => {
        const apiURL = process.env.NEXT_PUBLIC_API_URL + "/api/getVideo?id=" + id
        try {
            const response = await axios.get(apiURL);
            console.log(response.data);
            if (response.data.status == 0) {
                setVideo(response.data.video);
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
        fetchVideo();
    }, [id]);

    return (
        <>
            <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
                <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                    <div className="mx-auto max-w-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-video" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z"></path>
                            <path d="M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path>
                        </svg>
                        <h2 className="font-extrabold text-4xl mb-1">{video.title}</h2>
                        <ul>
                            {video && video.topics && video.topics.map((tag) => (<a href={"/topic?name="+tag}><span class="bg-gray-100 cursor-pointer text-gray-800 text-xs font-medium mr-2 px-2.5 py-0.5 
                            rounded dark:bg-gray-700 dark:text-gray-300">{tag}</span></a>))}
                        </ul>

                        <div className="divide-y divide-gray-300/50">
                            <div className="space-y-6 py-2  text-base leading-7 text-gray-600">
                                <p className="text-m">{video.description}</p>

                                <video class="w-full h-auto max-w-full border border-gray-200 rounded-lg dark:border-gray-700" autoplay controls>
                                    <source src="https://archive.org/download/popeye-collection/Popeye%20The%20Sailor%20-%20A%20Clean%20Shaven%20Man.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                <div class="bg-white rounded-lg mt-2" id="stats">
                                    <div class="grid grid-cols-3 text-gray-900 items-center justify-center">
                                        <div class="flex flex-col items-center justify-center">
                                            <dt class="text-2xl font-extrabold">{video.likes}</dt>
                                            <dd class="font-light text-gray-500 ">likes</dd>
                                        </div>
                                        <div class="flex flex-col items-center justify-center">
                                            <dt class="text-2xl font-extrabold">{video && video.num_comments}</dt>
                                            <dd class="font-light text-gray-500 ">comments</dd>
                                        </div>
                                        <div class="flex flex-col items-center justify-center">
                                            <dt class="text-2xl font-extrabold">{video.views}</dt>
                                            <dd class="font-light text-gray-500 ">views</dd>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="pt-2 text-base font-semibold leading-7">
                                <p class="text-gray-600">Recent comments</p>
                                <ul role="list" class="divide-y divide-gray-200">
                                    {video && video.comments && video.comments.map((comment) => (<li key = {comment.comment} class="py-3 sm:py-4">
                                        <div class="flex items-center space-x-4">
                                            <div class="flex-1 min-w-0">
                                                <p class="text-sm font-medium text-gray-900 truncate">
                                                    {comment.user}
                                                </p>
                                                <p class="text-sm text-gray-500">
                                                    {comment.comment}
                                                </p>
                                            </div>
                                        </div>
                                    </li>))}
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
