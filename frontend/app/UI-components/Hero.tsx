import React from 'react'
import homeImage from "@/public/home_page.jpeg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap justify-center items-center">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <Image
            alt="feature"
            className="object-cover object-center h-full w-full"
            width={460}
            height={500}
            src={homeImage}
          />
        </div>
        <div className=" flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          <div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Before they sold out
              <br className="hidden lg:inline-block" />
              readymade gluten
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
          </div>
          {/* buttons */}
          <div className="grid grid-cols-2 gap-4">
            {/* item 1 */}
            <div className=" mb-3 lg:items-start items-center">
              <Link href="/menu">
                <Button className="w-full">Menu</Button>
              </Link>
            </div>
            {/* item 2 */}
            <div className=" mb-3 lg:items-start items-center">
              <Link href="/Favourites">
                <Button className="w-full">My Favourites</Button>
              </Link>
            </div>
            {/* item 3 */}
            <div className="col-span-2 mb-10 lg:items-start items-center">
              <Link href="/Random-Meal">
                <Button className="w-full">Random Meal</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
