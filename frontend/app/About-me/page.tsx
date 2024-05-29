import React from "react";
import {
  Facebook,
  Instagram,
  LinkedinIcon,
  MailIcon,
  PhoneCall,
  TwitterIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-2xl sm:text-5xl font-bold py-10">About Me</h1>
      <div className="text-center md:w-[500px]">
        <p className="pb-7 px-2 text-lg ">
          I&apos;m <strong className="text-xl ">Eman Ali Abbasi </strong> from
          Karachi, also known as the City of Light. A Third-year Software
          Engineering student at the University of Karachi -UBIT, I thrive on
          challenges across diverse domains.
        </p>
        <p className="text-lg">
          Focused on web dev and Gen AI. Portfolio highlights innovation, while
          continuous learning fuels impactful tech contributions. Reach out
          anytime for assistance or inquiries!
        </p>
      </div>
      <div className="flex flex-wrap gap-2 py-10">
        <Link
          href="https://www.linkedin.com/in/eman-ali-abbasi-937932237/"
          target="_blank"
        >
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-2xl "
          >
            <LinkedinIcon />
          </Button>
        </Link>

        <Link href="https://www.instagram.com/maani__31/" target="_blank">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-red-500 hover:bg-red-600 hover:shadow-xl"
          >
            <Instagram />
          </Button>
        </Link>
        <Link href="https://www.facebook.com/eman.aliabbasi.5" target="_blank">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
          >
            <Facebook />
          </Button>
        </Link>
        <Link href={`tel:${+92 - 3062662261}`}>
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3  bg-green-600 hover:bg-green-700 hover:shadow-xl"
          >
            <PhoneCall />
          </Button>
        </Link>
        <Link href="/">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3 bg-blue-600 hover:bg-blue-700 hover:shadow-xl"
          >
            <TwitterIcon />
          </Button>
        </Link>
        <Link href="mailto:alie15425@gmail.com">
          <Button
            variant="ghost"
            className="flex justify-end rounded-full p-3 bg-slate-300 hover:bg-slate-400 hover:shadow-xl"
          >
            <MailIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
