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
                    <h1 class="font-bold text-3xl text-gray-900">PASSWORD LOST</h1>
                    <p>Enter your information to recover account</p>
                </div>
                @if(session('status'))
    <div class="text-green-500 text-xs">{{ session('status') }}</div>
@endif
                <form method="post" action="{{ route('password.email') }}">
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
            <div class="w-full px-3 mb-5">
                <button type="submit" class="block w-full  mx-auto bg-sp-blue hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">LOGIN NOW</button>
            </div>
        </div>
    </div>
</form>




                <hr class="my-6 border-gray-300 w-full">

<p class="mt-8">Need an account? <a href="{{route('register')}}" class="text-blue-500 hover:text-blue-700 font-semibold">Create an
        account</a></p>
            </div>
        </div>
    </div>
</div>


    
</section>
      

      @endsection("content")

      