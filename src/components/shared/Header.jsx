import React from 'react';

const header = () => {
     const today = new Date();
     const date = new Intl.DateTimeFormat("en-US", {
         weekday: "long",
         day: "numeric",
         month: "long",
         year: "numeric",
     }).format(today);
     return (
          <div>
               <div class="relative py-5 bg-gray-50">
                    <div class="flex flex-col gap-4 justify-center items-center w-full h-full px-3 md:px-0">

                         <h1 class="text-2xl md:text-4xl font-bold text-gray-500">
                              News Forest
                         </h1>
                         <p class="text-gray-400">
                              Journalism Without Fear or Favour 
                         </p>
                         <p className='text-gray-400 -mt-2'> {date}</p>


                         <div class="relative p-1 border border-gray-200 rounded-lg w-full max-w-lg">
                              <input type="text" class="rounded-md w-full p-3  outline-none" placeholder="Search : National | International | News" />
                              <button type="submit" class="absolute right-3 top-4">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                        stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                   </svg>
                              </button>

                         </div>
                    </div>

               </div>
          </div>
     );
};

export default header;