@extends("site.layouts.layout")
@section("title","splice Packages LLC")
@section("content")
<section id="hero-slider"></section>
<section id="splice-packages-hero-section">
   <!-- Slider -->
   <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden  md:h-[550px]  lg:h-[750px]">
         <!-- Item 1 -->
         <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://splicepackages.com/public/presentation/images/slider/package-forwarding-services-for-online-shopping.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
            <!-- Light overlay -->
            <div class="relative p-4 text-white z-10 flex items-center h-full left-16">
               <div>
                  <h1 class="font-bold text-3xl">
                     <span>FAST AND RELIABLE</span><br/>
                     <span class="text-sp-orange">PACKAGE FORWARDING SERVICES</span>
                  </h1>
                  <br/>
                  <p>
                     If You Can Bring It, <span class="text-sp-orange">We Can Ship It.</span><br/>
                     Experience the hassle free and fast package forwarding services<br/>
                     from US Online stores to your doorstep anywhere anytime.<br/>
                     Start sending your shipments now or schedule for later.<br/>
                  </p>
                  <br/>
                  <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
                  </a>
               </div>
            </div>
         </div>
         <!-- Item 2 -->
         <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://splicepackages.com/public/presentation/images/slider/package-forwarding-services.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
            <!-- Light overlay -->
            <div class="relative p-4 text-white z-10 flex items-center h-full left-16">
    <div>
        <h2 class="text-3xl font-bold">
            <span>EXPERIENCE EASY</span><br/>
            <span class="text-sp-orange">FREIGHT FORWARDING SERVICES</span>
        </h2>
        <br/>
        <p>
            Tell Us What You Love And We’ll Shop For You<br/>
            Shop and Ship process is easy now with Splice Packages.<br/>
            If your online payment method is not acceptable,<br/>
            We can place an order on your behalf from any online store in the USA.
        </p>
        <br/>
        <div class="flex space-x-4">
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
        </div>
        <br/>
    </div>
</div>

         </div>
         <!-- Item 3 -->
         <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://splicepackages.com/public/presentation/images/slider/parcel-forwarding-service.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
            <!-- Light overlay -->
            <div class="relative p-4 text-white z-10 flex items-center h-full left-16">
               <div>
                  <h2 class="text-3xl font-bold"><span>MAIL AND PACKAGE
                     </span><br/><span>FORWARDING COMPANY</span>
                  </h2>
                  </br>
                  <p>Shop From USA And Ship Worldwide</br>
                     Shipping your favorite purchased items all the way from USA</br>
                     to your doorstep.</br>
                     No matter what your package always comes first. Shop now your favorite</br>
                     products from USA online stores and receive your packages at</br>
                     your home address anywhere in the world.</br>
                  </p>
                  </br>
                  <div class="flex space-x-4">
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
        </div>
               </div>
            </div>
         </div>
         <!-- Item 4 -->
         <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://splicepackages.com/public/presentation/images/slider/parcel-forwarding-service.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
            <!-- Light overlay -->
            <div class="relative p-4 text-white z-10 flex items-center h-full left-16">
               <div>
                  <h2 class="text-3xl font-bold"><span>MAIL AND PACKAGE
                     </span><br/><span>FORWARDING COMPANY</span>
                  </h2>
                  </br>
                  <p>Shop From USA And Ship Worldwide</br>
                     Shipping your favorite purchased items all the way from USA</br>
                     to your doorstep.</br>
                     No matter what your package always comes first. Shop now your favorite</br>
                     products from USA online stores and receive your packages at</br>
                     your home address anywhere in the world.</br>
                  </p>
                  </br>
                  <div class="flex space-x-4">
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
        </div>
               </div>
            </div>
         </div>
         <!-- Item 5 -->
         <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="https://splicepackages.com/public/presentation/images/slider/parcel-forwarding-service.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
            <div class="absolute top-0 left-0 w-full h-full bg-black opacity-25"></div>
            <!-- Light overlay -->
            <div class="relative p-4 text-white z-10 flex items-center h-full left-16">
               <div>
                  <h2 class="text-3xl font-bold"><span>MAIL AND PACKAGE
                     </span><br/><span>FORWARDING COMPANY</span>
                  </h2>
                  </br>
                  <p>Shop From USA And Ship Worldwide</br>
                     Shipping your favorite purchased items all the way from USA</br>
                     to your doorstep.</br>
                     No matter what your package always comes first. Shop now your favorite</br>
                     products from USA online stores and receive your packages at</br>
                     your home address anywhere in the world.</br>
                  </p>
                  </br>
                  <div class="flex space-x-4">
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
            <a href="{{route('login')}}" class="relative w-24 flex h-9 items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sp-orange dark:before:bg-sp-orange before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                <span class="relative text-sm font-semibold text-white dark:text-white">Login</span>
            </a>
        </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Slider indicators -->
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
         <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
         <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
      </div>
      <!-- Slider controls -->
      <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
         </span>
      </button>
      <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
         <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
         </span>
      </button>
   </div>
   <!-- End Slider -->
</section>
<section id="why-splice-packages">
<!-- component -->
<div class="px-3 md:lg:xl:px-40   border-t border-b py-10 bg-opacity-10" style="background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dot-grid.png') ;">
   <main>
      <div class="container m-auto">
         <div class="overflow-hidden bg-white shadow-xl dark:bg-gray-800 sm:rounded-lg">
            <div>
               <div class="p-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:px-20">
                  <span class="text-gray-600 text-lg font-semibold  dark:text-white ">Main Features</span>
                  <div class="font-bold md:text-4xl dark:text-gray-200 text-sp-orange"> WHY SPLICE PACKAGES? </div>
                  <div class="-mt-2">
                     <span class="inline-block w-40 h-1 bg-sp-orange rounded-full"></span>
                     <span class="inline-block w-3 h-1 mx-1 bg-sp-orange rounded-full"></span>
                     <span class="inline-block w-1 h-1 bg-sp-orange rounded-full"></span>
                  </div>
                  <div class="mt-6 text-gray-500 dark:text-gray-400 text-justify"> Splice Packages offers a solution to your every shopping and shipping need from the USA including, Repacking, Consolidation,
                     And Detail Images of Packages. Moreover, check your electronic items before shipping to your doorstep. 
                  </div>
               </div>
               <div class="grid grid-cols-1 bg-gray-300 bg-opacity-25 dark:bg-gray-800 md:grid-cols-2">
                  <div class="p-6 sp-border-b sp-border-r">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/2.gif" alt="shopping" width="50">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">Online Shopping USA</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                        </div>
                        <a href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore more</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="p-6 sp-border-b">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/3.gif" alt="shopping" width="60">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">Online Shopping USA</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                        </div>
                        <a href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore more</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="p-6 sp-border-b sp-border-r">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/4.gif" alt="shopping" width="50">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">Online Shopping USA</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                        </div>
                        <a href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore more</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="p-6 sp-border-b">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/5.gif" alt="shopping" width="50">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">Online Shopping USA</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                        </div>
                        <a href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore more</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="p-6 sp-border-r">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/6.gif" alt="shopping" width="50">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">Online Shopping USA</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                           Shop from US online stores. Get your favorite items you always wanted to buy from the USA while sitting at home.
                        </div>
                        <a href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore more</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
                  <div class="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                     <div class="flex items-center">
                        <img src="https://splicepackages.com/public/presentation/1.gif" alt="shopping" width="50">
                        <div
                           class="ml-4 text-lg font-semibold leading-7 text-gray-600 dark:text-gray-200">
                           <a href="#">US Warehouse Address</a>
                        </div>
                     </div>
                     <div class="ml-12">
                        <div class="mt-2 text-sm text-gray-500 dark:text-gray-400 text-justify"> 
                           Use our Warehouse address to ship your items against the dedicated suite number for fast processing.
                           Use our Warehouse address to ship your items against the dedicated suite number for fast processing.
                        </div>
                        <a
                           href="#">
                           <div
                              class="flex items-center mt-3 text-sm font-semibold text-sp-orange dark:text-indigo-400 hover:underline">
                              <div>Explore More</div>
                              <div class="ml-1 text-sp-orange">
                                 <svg viewBox="0 0 20 20"
                                    fill="currentColor" class="w-4 h-4">
                                    <path fill-rule="evenodd"
                                       d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                       clip-rule="evenodd"></path>
                                 </svg>
                              </div>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </main>
</div>
</section>
<section id="priceing" class="bg-cover bg-center bg-no-repeat overflow-x-auto"
   style="background-image: url(https://splicepackages.com/public/presentation/images/Pricing-Tab-Backgroundopt.jpg);">
   <!-- component -->
   <div class="container m-auto px-6 py-20 md:px-12 lg:px-20">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
         <h2 class="text-2xl text-white font-bold md:text-4xl">OUR PRICING</h2>
         <p class="text-white">Our services and competitive pricing information for users around the globe</p>
      </div>
      <div class="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12 ">
         <div class="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12 ">
            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl"></div>
            <div class="relative p-6 space-y-6 lg:p-8 ">
               <h3 class="text-3xl text-gray-700 font-semibold text-center">OUR PRICING</h3>
               <div class="flex items-center justify-center mt-8">
                  <button id="premium_service" class="px-4 py-2 rounded-tl-lg rounded-bl-lg bg-sp-orange text-white"  title="Choose Monthly billing">
                  Premium Service
                  </button>
                  <button id="free_service" class="text-gray-800 px-4 py-2 rounded-tr-lg rounded-br-lg bg-gray-200"  title="Choose Annual billing">
                  Free Service
                  </button>
               </div>
               <div>
                  <div class="relative flex justify-around">
                     <div class="flex items-end">
                        <span class="text-8xl text-gray-800 font-bold leading-0" id="service_price">80</span>
                        <div class="pb-2">
                           <span class="block text-2xl text-gray-700 font-bold">$</span>
                           <span class="block text-xl text-sp-orange font-bold">/Month</span>
                        </div>
                     </div>
                  </div>
               </div>
               <ul role="list" class="w-max space-y-4 py-6 m-auto text-gray-600">
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>First premium advantage</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Second advantage weekly</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Third advantage donate to project</span>
                  </li>
               </ul>
               <p class="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                  <span>Call us at</span>
                  <a href="tel:+24300" class="flex space-x-2 items-center text-sp-orange">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-6" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                     </svg>
                     <span class="font-semibold number-font">+1 (904) 656-1066</span>
                  </a>
                  <span>or</span>
               </p>
               <button type="submit" title="Submit" class="block w-full py-3 px-6 text-center rounded-xl transition bg-sp-blue hover:bg-sp-orange active:bg-purple-800 focus:bg-indigo-600">
               <span class="text-white font-semibold">
               Send us an email
               </span>
               </button>
            </div>
         </div>
         <div class="relative group md:w-6/12 lg:w-7/12 ">
            <div aria-hidden="true" class="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg dark:bg-gray-700 "></div>
            <div class="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
               <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-white" id="premium_list">
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Storage 90 Days</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Detail Images for Packages Unlimited</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Consolidation</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Test Run</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>$3 or 3.00% Assisted Purchase</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Extra Pictures</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Extra Packing</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Shipment Return</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>$10 Prepaid Labels</span>
                  </li>
               </ul>
               <ul role="list" class="space-y-4 py-6 text-gray-600 dark:text-white hidden" id="free_list">
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Free Storage 45 Days</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Detail Images for Packages (2)</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>$5 For 50 Items/Shipment Consolidation</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>$2/Item Test Run</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Assisted Purchase $5 or 5.00%</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Extra Picture $2 per Item</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Extra Packing $3 per Shipment</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Shipment Return $3 per Shipment</span>
                  </li>
                  <li class="space-x-2">
                     <span class="text-sp-orange font-semibold">&check;</span>
                     <span>Prepaid Labels $20 per Label</span>
                  </li>
               </ul>
               <p class="text-gray-700">Team can be any size, and you can add or switch members as needed. Companies using our platform include:</p>
               <div class="mt-6 flex justify-between gap-3">
                  <img class="w-16 lg:w-24" src="https://splicepackages.com/public/presentation/Group%205.png" loading="lazy" alt="airbnb">
                  <img class="w-16 lg:w-24" src="https://splicepackages.com/public/presentation/Group%201.png" loading="lazy" alt="bissell">
                  <img class="w-16 lg:w-24" src="https://splicepackages.com/public/presentation/usps%20logo.png" loading="lazy" alt="ge">
                  <img class="w-20 lg:w-24" src="https://splicepackages.com/public/presentation/Group%202.png" loading="lazy" alt="microsoft">
                  <img class="w-20 lg:w-28" src="https://splicepackages.com/public/presentation/Group%203.png" loading="lazy" alt="microsoft">
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
<!-- component -->
<div class="py-16 bg-gray-50 overflow-hidden">
   <div class="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
   <div class="p-6 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 sm:px-20">
                  <span class="text-gray-600 text-lg font-semibold  dark:text-white ">Easy Steps</span>
                  <div class="font-bold md:text-4xl dark:text-gray-200 text-sp-orange"> HOW TO SHOP & SHIP FROM USA </div>
                  <div class="-mt-2">
                     <span class="inline-block w-40 h-1 bg-sp-orange rounded-full"></span>
                     <span class="inline-block w-3 h-1 mx-1 bg-sp-orange rounded-full"></span>
                     <span class="inline-block w-1 h-1 bg-sp-orange rounded-full"></span>
                  </div>
                  <div class="mt-6 text-gray-500 dark:text-gray-400 text-justify"> Shop and Ship is a service that allows online shoppers around the globe to make purchases from US online stores,
and have their purchases shipped to their doorstep anywhere in the world. 
                  </div>
               </div>
      <div class="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
         <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative p-8 space-y-8">
               <img src="https://splicepackages.com/public/presentation/images/index/1-Sign-Up.png" class="w-24" width="512" height="512" alt="burger illustration">
               <div class="space-y-2">
                  <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 mt-20">Step 01</h5>
                  <p class="text-sm text-gray-600">Set Up a Free Account on Splice Packages.</p>
               </div>
               <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
               <span class="text-sm">Read more</span>
               <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
               </a>
            </div>
         </div>
         <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative p-8 space-y-8">
               <img src="https://splicepackages.com/public/presentation/images/index/2-online%20shoping.png" class="w-24" width="512" height="512" alt="burger illustration">
               <div class="space-y-2">
                  <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 mt-20">Step 02</h5>
                  <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
               </div>
               <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
               <span class="text-sm">Read more</span>
               <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
               </a>
            </div>
         </div>
         <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative p-8 space-y-8">
               <img src="https://splicepackages.com/public/presentation/images/index/3-consolidation.png" class="w-14" width="512" height="512" alt="burger illustration">
               <div class="space-y-2">
                  <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 mt-20">Step 03</h5>
                  <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
               </div>
               <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
               <span class="text-sm">Read more</span>
               <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
               </a>
            </div>
         </div>
         <div class="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
            <div class="relative p-8 space-y-8">
               <img src="https://splicepackages.com/public/presentation/images/index/4-Package-Delivery.png" class="w-20" width="512" height="512" alt="burger illustration">
               <div class="space-y-2">
                  <h5 class="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600 mt-16">Step 04</h5>
                  <p class="text-sm text-gray-600">Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.</p>
               </div>
               <a href="#" class="flex justify-between items-center group-hover:text-yellow-600">
               <span class="text-sm">Read more</span>
               <span class="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">&RightArrow;</span>
               </a>
            </div>
         </div>
      </div>
   </div>
</div>
<!-- component -->
<div class="py-16 white">
   <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <h2 class=" text-center text-2xl text-gray-900 font-bold md:text-4xl uppercase">What's our customers say</h2>
      <p class="text-center mb-12">See what our customers have to say about our services and their experience with Splice Packages.</p>
      <div class="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
         <div class="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
            <div class="h-full flex flex-col justify-center space-y-4">
               <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
               <p class="text-gray-600 md:text-xl"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
               <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
               </div>
            </div>
         </div>
         <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
               <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
               <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
               </div>
            </div>
         </div>
         <div class="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
            <img class="w-20 h-20 mx-auto rounded-full" src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp" alt="user avatar" height="220" width="220" loading="lazy">
            <div class="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
               <p class="text-gray-600"> <span class="font-serif">"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat repellat perspiciatis excepturi est. Non ipsum iusto aliquam consequatur repellat provident, omnis ut, sapiente voluptates veritatis cum deleniti repudiandae ad doloribus. <span class="font-serif">"</span></p>
               <div>
                  <h6 class="text-lg font-semibold leading-none">Jane Doe</h6>
                  <span class="text-xs text-gray-500">Product Designer</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<section id="over-view" class="bg-cover bg-center bg-no-repeat overflow-x-auto"
   style="background-image: url(https://splicepackages.com/public/presentation/images/Pricing-Tab-Backgroundopt.jpg);">
   <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
         <h2 class="text-2xl text-white font-bold md:text-4xl mt-12">OVER VIEW</h2>
         <p class="text-white">Splice Packages providing shop and ship services to online shoppers around the globe<br/>
to come up with smooth and reliable shipping experience from the USA.</p>
      </div>
   <div class="max-w-xl m-auto py-10">
      <video class="h-full w-full rounded-lg" controls>
         <source
            src="https://docs.material-tailwind.com/demo.mp4"
            type="video/mp4"
            />
         Your browser does not support the video tag.
      </video>
   </div>
</section>
<section class="text-gray-700 body-font">
   <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
         <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Mail & Package Forwarding
            <br class="hidden lg:inline-block">Company
         </h1>
         <p class="text-sp-orange">A SIMPLE AND EASY WAY TO SHIP PACKAGES FROM USA</p>
         <p class="mb-8 leading-relaxed text-justify">We at Splice Packages are focused on delivering the best mail and parcel forwarding service from USA. Our objective is to provide the best parcel forwarding services for international shoppers, no matter which country they belong to. We believe in continuous improvement in all of our processes, be it our mobile and web applications, our shipment tracking, receiving packages, storage and consolidation. We are constantly looking for ways to bring the best shipping services possible.</p>
         <p class="mb-8 leading-relaxed text-justify">Shipping packages effectively from USA to anywhere in the world. Splice Packages provides the best customer support to make your shop and ship process seamless as water.</p>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
         <img class="object-cover object-center rounded" alt="hero" src="https://splicepackages.com/public/presentation/splice-packages-about-us.gif">
      </div>
   </div>
</section>
<section id="brands">
   <!-- Clients -->
   <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <!-- Title -->
      <div class="sm:w-1/2  mx-auto text-center mb-6 md:mb-12">
         

<h2 class=" text-center text-2xl text-gray-900 font-bold md:text-4xl uppercase">SOME FAMOUS US BRANDS</h2>
      <p class="text-center mb-12">See what our customers have to say about our services and their experience with Splice Packages.</p>
      </div>
      <!-- End Title -->
      <!-- Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/Amazon.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/apple.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/Lacoste.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/target.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/Nike.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/walmart.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/ebay.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/levis.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/Gap.svg" />
         </div>
         <div class="p-2 md:p-3 bg-gray-100 rounded-lg dark:bg-neutral-800">
            <img class="w-2/3 h-auto md:w-1/2 lg:w-1/3 mx-auto"  src="https://splicepackages.com/public/presentation/images/index/Pics/tommy.svg" />
         </div>
      </div>
   </div>
   <!-- End Grid -->
   </div>
   <!-- End Clients -->
</section>

@endsection("content")