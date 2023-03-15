import Head from 'next/head'
import Link from 'next/link'

/*
Note: Template used from https://play.tailwindcss.com/
*/


export default function UserHome() {
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
              <div class="space-y-6 py-8 text-base leading-7 text-gray-600">
                <p>A vine clone implementation for CSCE 608 Database Systems course project. </p>
                <ul class="space-y-1">
                  <Link href="/login">
                    <li class="flex items-center hover:bg-slate-50 p-3">
                      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-login" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path> <path d="M20 12h-13l3 -3m0 6l-3 -3"></path> </svg>
                      <p class="ml-4">
                        Login into your <code class="text-sm font-bold text-gray-900">vine-608</code> account
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
