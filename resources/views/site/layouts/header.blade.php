<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>@yield("title")</title>
      <!-- Fonts -->
      <link rel="preconnect" href="https://fonts.bunny.net">
      <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
      <!-- Styles -->
      @vite('resources/css/app.css')
      @vite('resources/js/app.js')
   </head>
   <body class="bg-white dark:bg-gray-900">
    <section id="navigation-bar">
    <header>
    <nav class="z-50 w-full bg-white/90 dark:bg-gray-900/80 backdrop-blur navbar shadow-lg shadow-gray-800/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none" id="navigation_bar">
        <div class="xl:container-fluid m-auto px-6 md:px-12 lg:px-6">
            <div class="flex flex-wrap items-center justify-between gap-6 md:py-3 md:gap-0 lg:py-2">
                <div class="w-full items-center flex justify-between lg:w-auto">
                    <a class="relative z-10" href="{{route('/')}}" aria-label="logo">
                        <img src="https://splicepackages.com/public/presentation/blogo.svg" class="h-14" />
                    </a>
                    <label for="hbr" class="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden"  data-drawer-target="drawer-navigation" data-drawer-show="drawer-navigation" aria-controls="drawer-navigation">
                        <!-- <div aria-hidden="true" class="m-auto h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div>
                        <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-5 rounded bg-gray-900 dark:bg-gray-300 transition duration-300"></div> -->
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4"/>
                        </svg>

                    </label>
                </div>
                <div class="navmenu hidden w-full flex-wrap justify-end items-center space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:flex lg:space-y-0 lg:p-0 lg:m-0 lg:bg-transparent lg:w-auto lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                    <div class="text-gray-600 dark:text-gray-300 lg:pr-4">
                        <ul class="space-y-6 tracking-wide font-medium text-base lg:text-sm lg:flex lg:space-y-0">
                            <li>
                                <a href="{{route('/')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>About Us</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('services')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Pricing</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('business-solution')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Business solutions</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('blogs')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Blog</span>
                                </a>
                            </li>
                            <li>
                                <a href="{{route('contact-us')}}" class="block md:px-4 transition hover:text-primary dark:hover:text-primaryLight">
                                    <span>Contact Us</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                        <a href="{{route('register')}}" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-sm font-semibold text-primary dark:text-white">Sign Up</span>                    
                        </a>
                        <a href="{{route('login')}}" class="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                            <span class="relative text-sm font-semibold text-white dark:text-white ">Login</span>                    
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>

    </section>