"use client";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleNav = () => {
    setMenu(!menu);
  };

  return (
    <div className="bg-white  flex justify-between items-center  sm:px-20  py-8 px-3 shadow-sm">
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={72}
        height={16}
        priority
      />
      <div>
        <ul className="hidden md:flex sm:gap-x-7 ">
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/">Home</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
            <Link href="/menu">Menu</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold active:font-semibold ">
            <Link href="/Favourites">My Favourites</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
            <Link href="/Random-Meal">Random Meal</Link>
          </li>
          <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
            <Link href="/About-me">About Me</Link>
          </li>
        </ul>
      </div>

      <div onClick={handleNav} className="md:hidden">
        <Menu absoluteStrokeWidth />
      </div>
      <div
        className={
          menu
            ? "fixed top-0 w-[60%] md:hidden h-screen bg-[#fbfdff] p-10 ease-in duration-500 left-0 "
            : "left-[-100%] hidden"
        }
      >
        <div className="grid grid-cols-1 gap-4">
          <div>
            <ul className="flex relative h-screen flex-col justify-normal items-center gap-y-4 ">
              <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold  ">
                <Link href="/" onClick={handleNav}>
                  Home
                </Link>
              </li>
              <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/menu" onClick={handleNav}>
                  Menu
                </Link>
              </li>
              <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold active:font-semibold ">
                <Link href="/Favourites" onClick={handleNav}>
                  My Favourites
                </Link>
              </li>
              <li className="text-base hover:delay-100 hover:scale-110 hover:font-bold ">
                <Link href="/Random-Meal" onClick={handleNav}>
                  Random Meal
                </Link>
              </li>
              <li
                className="text-base absolute bottom-32 hover:delay-100 hover:scale-110 hover:font-bold  "
                onClick={handleNav}
              >
                <Link href="/About-me">About Me</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
