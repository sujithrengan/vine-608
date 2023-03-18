import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function Home() {
  const router = useRouter()

  const handleFeelingLucky = async event => {
    event.preventDefault();
    const apiURL = "http://localhost:3001/api/feelingLucky"
    try {
      const response = await axios.get(apiURL);
      console.log(response.data);
      if (response.data.status == 0) {
        router.push('/video?id=' + response.data.video_id)
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <Head>
        <title>vine608</title>
        <meta name="description" content="Vine Clone for CSCE 608 Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div class="mx-auto max-w-md">
            <h2 class="font-extrabold text-4xl">vine-608</h2>
            <div class="divide-y divide-gray-300/50">
              <div class="space-y-6 py-2 text-base leading-7 text-gray-600">
                <p>A vine clone implementation for CSCE 608 Database Systems course project. </p>
                <ul class="space-y-1">
                  <Link href="/login">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path> <path d="M20 12h-13l3 -3m0 6l-3 -3"></path> </svg>
                      <p class="ml-4">
                        login into your <code class="text-sm font-bold text-gray-900">vine-608</code> account
                      </p>
                    </li>
                  </Link>
                  <Link href="/register">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-key" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16.555 3.843l3.602 3.602a2.877 2.877 0 0 1 0 4.069l-2.643 2.643a2.877 2.877 0 0 1 -4.069 0l-.301 -.301l-6.558 6.558a2 2 0 0 1 -1.239 .578l-.175 .008h-1.172a1 1 0 0 1 -.993 -.883l-.007 -.117v-1.172a2 2 0 0 1 .467 -1.284l.119 -.13l.414 -.414h2v-2h2v-2l2.144 -2.144l-.301 -.301a2.877 2.877 0 0 1 0 -4.069l2.643 -2.643a2.877 2.877 0 0 1 4.069 0z"></path>
                        <path d="M15 9h.01"></path>
                      </svg>
                      <p class="ml-4">
                        <code class="text-sm font-bold text-gray-900">register</code> for an account
                      </p>
                    </li>
                  </Link>
                  <Link href="/trending">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M3 17l6 -6l4 4l8 -8"></path>
                        <path d="M14 7l7 0l0 7"></path>
                      </svg>
                      <p class="ml-4">
                        <code class="text-sm font-bold text-gray-900">trending</code> videos of the week
                      </p>
                    </li>
                  </Link>
                  <Link href="/celebrities">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-sparkles" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z"></path>
                      </svg><p class="ml-4">
                        <code class="text-sm font-bold text-gray-900">popular</code> users
                      </p>
                    </li>
                  </Link>
                  <Link href="/video" onClick={handleFeelingLucky}>
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-among-us" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10.646 12.774c-1.939 .396 -4.467 .317 -6.234 -.601c-2.454 -1.263 -1.537 -4.66 1.423 -4.982c2.254 -.224 3.814 -.354 5.65 .214c.835 .256 1.93 .569 1.355 3.281c-.191 1.067 -1.07 1.904 -2.194 2.088z"></path>
                        <path d="M5.84 7.132c.083 -.564 .214 -1.12 .392 -1.661c.456 -.936 1.095 -2.068 3.985 -2.456a22.464 22.464 0 0 1 2.867 .08c1.776 .14 2.643 1.234 3.287 3.368c.339 1.157 .46 2.342 .629 3.537v11l-12.704 -.019c-.552 -2.386 -.262 -5.894 .204 -8.481"></path>
                        <path d="M17 10c.991 .163 2.105 .383 3.069 .67c.255 .13 .52 .275 .534 .505c.264 3.434 .57 7.448 .278 9.825h-3.881"></path>
                      </svg><p class="ml-4"> i'm feeling <code class="text-sm font-bold text-gray-900">lucky</code>
                      </p>
                    </li>
                  </Link>
                  <Link href="/topics">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-icons" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6.5 6.5m-3.5 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0 -7 0"></path>
                        <path d="M2.5 21h8l-4 -7z"></path>
                        <path d="M14 3l7 7"></path>
                        <path d="M14 10l7 -7"></path>
                        <path d="M14 14h7v7h-7z"></path>
                      </svg><p class="ml-4"> browse <code class="text-sm font-bold text-gray-900">topics</code>
                      </p>
                    </li>
                  </Link>
                </ul>
              </div>
              <div class="pt-8 text-base font-semibold leading-7">
                <p class="text-gray-900">Made with Next.js, Tailwind and 🖤</p>
                <p>
                  <a href="mailto:sujithrengan@tamu.edu" class="text-sky-500 hover:text-sky-600">Email me &rarr;</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
