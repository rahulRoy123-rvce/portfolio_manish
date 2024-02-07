import React from "react";

const About = () => {
  return (
    <section class=" body-font bg-[#C9C9C9] font-palatino">
      <div class="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 class="sm:text-6xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5">
          About me, a journey of resilience and discovery,<div className="italic">unfolds with each new</div> 
          chapter.
        </h2>
        <div class="md:w-3/5 md:pl-6">
          <p class="leading-relaxed text-base">
            Manish, a serial entrepreneur seamlessly blending the worlds of
            theatre and technology. For the past eight years, he has dedicated
            himself to fostering the entrepreneurial spirit, leaving an
            indelible mark on global projects in Nordic regions, Dubai, and
            beyond. Presently, Manish serves as the Operations Head at Impact
            Ecosystem, an impactful investment firm. Manish’s journey commenced
            in the research domain at the Bill Gates Foundation’s Digital
            Innovation Lab at IIM Bangalore. Subsequently, he embarked on his
            inaugural entrepreneurial venture, Cultivo, making him the youngest
            founder at IIM Bangalore. The startup found its incubation haven at
            the prestigious Indian Coffee Board and earned recognition at the
            United Nations Young Changemakers Conclave held at the US Consulate
            in Mumbai. A firm believer in versatility, Manish acknowledges that
            his strength lies in embracing diversity across various pursuits.
            Currently he heads the operations of Impact Ecosystem, which is
            based in frisco , Colorado. Simultaneously, he spearheads a dynamic
            student career upskilling platform, House of Wisdom, collaborating
            with over 10 esteemed institutions. Additionally, he leads a crop
            care biotechnology company championing the mission for safe food
            through innovative bio-fertilizer products. Join Manish on his
            multifaceted journey, where each venture is a testament to his
            unwavering commitment to entrepreneurship, innovation, and positive
            impact.
          </p>
          <div class="flex md:mt-4 mt-6">
            <button class="inline-flex text-white bg-indigo-500 border-0 py-1 px-4 focus:outline-none hover:bg-indigo-600 rounded">
              Contact me
            </button>
            <a class="text-indigo-500 inline-flex items-center ml-4">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
