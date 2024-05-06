@extends("site.layouts.layout")
@section("title","splice Packages LLC")
@section("content")

<section id="page-hero-section" class="w-full h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" style="background-color: #333c54; background-image: url(https://splicepackages.com/public/presentation/banners/Business-Solutions-cover.jpg);">
    <h3 class="text-white text-4xl font-bold mt-14">Business Solution</h3>
    <span class="text-white">Home - Business Solution</span>
</section>
<section id="login">
      
      <!-- component -->


<div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
    <div class="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style="max-width:1000px">
        <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 bg-sp-blue py-10 px-10">
                <img src="https://splicepackages.com/public/presentation/images/Kuri.svg" />
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
                <div class="text-center mb-10">
                    <h1 class="font-bold text-3xl text-gray-900">LOGIN</h1>
                    <p>Enter your information to login</p>
                </div>
                <form method="post" action="{{ route('login') }}">
                @csrf
                <div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <label for="email" class="text-xs font-semibold px-1">Email</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-email-outline text-gray-400 text-lg"></i></div>
                                <input type="email" name="email" id="email" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="johnsmith@example.com">
                            </div>
                            @error('email')
                            <span class="text-red-500 text-xs">{{ $message }}</span>
                            @enderror
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-12">
                            <label for="password" class="text-xs font-semibold px-1">Password</label>
                            <div class="flex">
                                <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i class="mdi mdi-lock-outline text-gray-400 text-lg"></i></div>
                                <input type="password" name="password" id="password" class="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************">
                            </div>
                            @error('password')
                            <span class="text-red-500 text-xs">{{ $message }}</span>
                            @enderror
                            <a href="{{route('password.request')}}" class="text-xs font-semibold px-1 float-end mt-3">Forget Password</a>
                        </div>
                    </div>
                    <div class="flex -mx-3">
                        <div class="w-full px-3 mb-5">
                            <button type="submit" class="block w-full  mx-auto bg-sp-blue hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LOGIN NOW</button>
                        </div>
                    </div>
                </div>
            </form>


                <hr class="my-6 border-gray-300 w-full">

<button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
      <div class="flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"/></defs><clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z"/><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z"/><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z"/><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z"/></svg>
      <span class="ml-4">
      Log in
      with
      Google</span>
      </div>
    </button>

<p class="mt-8">Need an account? <a href="{{route('register')}}" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
        account</a></p>
            </div>
        </div>
    </div>
</div>


    
</section>
      

      @endsection("content")

      