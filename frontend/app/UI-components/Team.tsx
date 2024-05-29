import { FacebookIcon, InstagramIcon, LinkedinIcon, X } from "lucide-react";
import React from "react";
import cheif from "@/public/cheif-image.jpeg";
import cheiffemale from "@/public/cheif-image-female.jpeg";

export default function Team() {
  return (
    <section className="text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl  title-font font-bold mb-4 text-red-600 tracking-widest">
            OUR TEAM
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven&apos;t heard of them.
          </p>
        </div>
        <div className="flex flex-wrap justify-center align-middle items-center -m-4">
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={cheif.src}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-blue-600">
                Emily Smith
                </h2>
                <h3 className="text-blue-600 mb-3">Head Chef</h3>
                <p className="mb-4">
                  Bringing passion and creativity to every dish.
                </p>
                <span className="inline-flex">
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-400 hover:scale-110">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-600 hover:scale-110 ml-3">
                    <X className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-red-600 hover:scale-110 ml-3">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-700 hover:scale-110 ml-3">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={cheif.src}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-blue-600">
                  John Doe
                </h2>
                <h3 className="text-blue-600 mb-3">Sous Chef</h3>
                <p className="mb-4">
                Crafting culinary masterpieces with precision.
                </p>
                <span className="inline-flex">
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-400 hover:scale-110">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-600 hover:scale-110 ml-3">
                    <X className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-red-600 hover:scale-110 ml-3">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-700 hover:scale-110 ml-3">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            {/* female */}
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={cheiffemale.src}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-blue-600">
                Sarah Johnson
                </h2>
                <h3 className="text-blue-600 mb-3">Pastry Chef</h3>
                <p className="mb-4">
                Creating sweet delights that melt in your mouth.
                </p>
                <span className="inline-flex">
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-400 hover:scale-110">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-600 hover:scale-110 ml-3">
                    <X className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-red-600 hover:scale-110 ml-3">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-700 hover:scale-110 ml-3">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
                src={cheif.src}
              />
              <div className="flex-grow sm:pl-8">
                <h2 className="title-font font-medium text-lg text-blue-600">
                Michael Rodriguez
                </h2>
                <h3 className="text-blue-600 mb-3">Sous Chef</h3>
                <p className="mb-4">
                Blending flavors to create culinary masterpieces.
                </p>
                <span className="inline-flex">
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-400 hover:scale-110">
                    <FacebookIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-600 hover:scale-110 ml-3">
                    <X className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-red-600 hover:scale-110 ml-3">
                    <InstagramIcon className="w-5 h-5" />
                  </a>
                  <a className="text-blue-600 transition hover:-translate-y-2 delay-100 hover:text-blue-700 hover:scale-110 ml-3">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
