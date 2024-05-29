import React from "react";
import logo from "@/public/logo.png";
import Image from "next/image";
import { FacebookIcon, InstagramIcon, LinkedinIcon, X } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <Image
          className="object-cover object-center rounded-full"
          src={logo}
          alt="logo"
          width={60}
          height={60}
        />

        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2024 Foodyyy —
          <a
            href="https://twitter.com/bromaanii"
            className="text-gray-600 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @bromaanii
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500 transition hover:-translate-y-2 delay-100 hover:text-blue-400 hover:scale-110">
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a className="text-gray-500 transition hover:-translate-y-2 delay-100 hover:text-black hover:scale-110 ml-3">
            <X className="w-5 h-5" />
          </a>
          <a className="text-gray-500 transition hover:-translate-y-2 delay-100 hover:text-red-600 hover:scale-110 ml-3">
            <InstagramIcon className="w-5 h-5" />
          </a>
          <a className="text-gray-500 transition hover:-translate-y-2 delay-100 hover:text-blue-700 hover:scale-110 ml-3">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </span>
      </div>
    </footer>
  );
}
