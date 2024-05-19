@extends("site.layouts.layout")
@section("title","splice Packages LLC")
@section("content")
<section id="page-hero-section" class="w-full h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center" style="background-color: #333c54; background-image: url(https://splicepackages.com/public/presentation/banners/Business-Solutions-cover.jpg);">
    <h3 class="text-white text-4xl font-bold mt-14">Our Blogs</h3>
    <span class="text-white">Home - Oub Blogs</span>
</section>
<section id="blog ">
  <!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Try to know about what we are doing</h2>
    <p class="mt-1 text-gray-600 dark:text-neutral-400">See how game-changing companies are making the most of every engagement with Preline.</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <a href="{{route('single-blog')}}" class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->

  <!-- Card -->
 

  

  <!-- Grid -->
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <!-- Card -->
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Announcing a free plan for small teams
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          At Wake, our mission has always been focused on bringing openness.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          How Google Assistant now helps you record stories for kids
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Google is constantly updating its consumer AI, Google Assistant, with new features.
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Aaron Larsson</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-neutral-700 dark:hover:border-transparent dark:hover:shadow-black/40" href="#">
      <div class="aspect-w-16 aspect-h-11">
        <img class="w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80" alt="Image Description">
      </div>
      <div class="my-6">
        <h3 class="text-xl font-semibold text-gray-800 dark:text-neutral-300 dark:group-hover:text-white">
          Front accounts - let's work together
        </h3>
        <p class="mt-5 text-gray-600 dark:text-neutral-400">
          Are you an accountant? Are you a company formation advisor?
        </p>
      </div>
      <div class="mt-auto flex items-center gap-x-3">
        <img class="size-8 rounded-full" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
        <div>
          <h5 class="text-sm text-gray-800 dark:text-neutral-200">By Lauren Waller</h5>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->

  <!-- Card -->
 
  <!-- End Card -->
</div>
<!-- End Card Blog -->

<!-- Card Blog -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid lg:grid-cols-2 gap-6">
    <!-- Card -->
    <a class="group relative block rounded-xl" href="#">
      <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
        <img class="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1669828230990-9b8583a877ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80" alt="Image Description">
      </div>

      <div class="absolute top-0 inset-x-0 z-10">
        <div class="p-4 flex flex-col h-full sm:p-6">
          <!-- Avatar -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="size-[46px] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            </div>
            <div class="ms-2.5 sm:ms-4">
              <h4 class="font-semibold text-white">
                Gloria
              </h4>
              <p class="text-xs text-white/80">
                Jan 09, 2021
              </p>
            </div>
          </div>
          <!-- End Avatar -->
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-0 z-10">
        <div class="flex flex-col h-full p-4 sm:p-6">
          <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
            Facebook is creating a news section in Watch to feature breaking news
          </h3>
          <p class="mt-2 text-white/80">
            Facebook launched the Watch platform in August
          </p>
        </div>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group relative block rounded-xl" href="#">
      <div class="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[350px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
        <img class="size-full absolute top-0 start-0 object-cover" src="https://images.unsplash.com/photo-1611625618313-68b87aaa0626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80" alt="Image Description">
      </div>

      <div class="absolute top-0 inset-x-0 z-10">
        <div class="p-4 flex flex-col h-full sm:p-6">
          <!-- Avatar -->
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="size-[46px] border-2 border-white rounded-full" src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80" alt="Image Description">
            </div>
            <div class="ms-2.5 sm:ms-4">
              <h4 class="font-semibold text-white">
                Gloria
              </h4>
              <p class="text-xs text-white/80">
                May 30, 2021
              </p>
            </div>
          </div>
          <!-- End Avatar -->
        </div>
      </div>

      <div class="absolute bottom-0 inset-x-0 z-10">
        <div class="flex flex-col h-full p-4 sm:p-6">
          <h3 class="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80">
            What CFR (Conversations, Feedback, Recognition) really is about
          </h3>
          <p class="mt-2 text-white/80">
            For a lot of people these days, Measure What Matters.
          </p>
        </div>
      </div>
    </a>
    <!-- End Card -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Card Blog -->
</setion>
@endsection("content")

      