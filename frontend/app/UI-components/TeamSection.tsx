import React from 'react'
import Team from './Team'
import teamImage from "@/public/team-image.png"

export default function TeamSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center bg-gray-900">
      <img
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover opacity-5"
        height="1200"
        src={teamImage.src}
        style={{
          aspectRatio: "1200/800",
          objectFit: "cover",
        }}
        width="1200"
      />
      <div className="relative z-10 text-center space-y-6 px-4 md:px-6">
        <Team />
      </div>
    </section>
  )
}
