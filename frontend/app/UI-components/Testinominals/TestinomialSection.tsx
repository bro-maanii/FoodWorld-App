import React from 'react'
import TestimonialPage from './Testinomial'
import testinomialImage from '@/public/testnomials.png'

export default function TestinomialSection() {
  return (
    <section className="relative w-full h-full flex items-center justify-center ">
      <img
        alt="Hero Image"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
        height="1200"
        src={testinomialImage.src}
        style={{
          aspectRatio: "1200/800",
          objectFit: "cover",
        }}
        width="1200"
      />
      <div className="relative z-10 text-center space-y-6 px-4 md:px-6">
        <TestimonialPage />
      </div>
    </section>
  )
}
