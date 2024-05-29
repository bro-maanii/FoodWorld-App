"use client";
import AboutUS from "./UI-components/AboutUS";
import BookSeat from "./UI-components/BookSeat";
import Hero from "./UI-components/Hero";
import Hero2 from "./UI-components/Hero2";
import Reveal from "./UI-components/Reveal";
import Team from "./UI-components/Team";
import TeamSection from "./UI-components/TeamSection";
import TestimonialPage from "./UI-components/Testinominals/Testinomial";
import TestinomialSection from "./UI-components/Testinominals/TestinomialSection";

export default function Home() {
  return (
    <>
      <div className="wapper">
        <Reveal>
          <Hero />
        </Reveal>
      </div>
      <div className="bg-red-800 py-5">
        <div className="wapper">
          <Reveal>
            <Hero2 />
          </Reveal>
        </div>
      </div>
      
      <Reveal>
        <AboutUS />
      </Reveal>
      
        <Reveal>
          <TeamSection />
        </Reveal>
      
      
        <Reveal>
          <TestinomialSection />
        </Reveal>
      
      <div className=" my-8">
        <Reveal>
          <BookSeat />
        </Reveal>
      </div>
    </>
  );
}
