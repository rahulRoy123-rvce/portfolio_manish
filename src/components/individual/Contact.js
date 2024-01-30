import React from 'react'

const Contact = () => {
  return (
    <section class="text-gray-600 body-font bg-black">
  <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
    <div class="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
      <h1 class="title-font font-medium text-3xl text-white">Schedule a Call</h1>
      <p class="leading-relaxed mt-4">Make an appointment with me to discuss your idea.</p>
      <p>
      <button class="text-white  border-0 py-2 px-8 focus:outline-none bg-[#4372BE] rounded text-lg mt-4">Calendly </button>
      </p>
    </div>
    <div class="lg:w-2/6 md:w-1/2 bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
      <h2 class="text-white text-lg font-medium title-font mb-5">Contact Me</h2>
      <div class="relative mb-4">
        <label for="full-name" class="leading-7 text-sm text-gray-600">First Name</label>
        <input type="text" id="full-name" name="full-name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <button class="text-white bg-[#4372BE] border-0 py-2  focus:outline-none  rounded text-lg mr-36 mt-4">Submit</button>
      {/* <p class="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p> */}
    </div>
  </div>
</section>
  )
}

export default Contact
