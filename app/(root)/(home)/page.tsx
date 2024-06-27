import FaqsSection from "@/components/FaqsSection";
import PortfolioItem from "@/components/PortfolioItem";
import SectionHeading from "@/components/SectionHeading";
import TestimonialSection from "@/components/TestimonialSection";
import { benefits, portfolios, skills } from "@/constants";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      {/* hero section */}
      <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
        {/* left side */}
        <div className="tablet:w-2/3 mt-10 tablet:mt-0">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p
              className="px-4 py-2 bg-peach-500 text-gray-600 w-max rounded"
              data-aos="fade-down"
            >
              Hello There
            </p>
            <h1 className="text-grey" data-aos="fade-down" data-aos-delay="200">
              John Doe welcome's you
            </h1>
            <p className="text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Dignissimos suscipit, itaque perspiciatis repellendus aliquam
              architecto eligendi qui dolore asperiores minus doloribus nesciunt
              quo iste fugit sint. Beatae delectus fuga culpa?
            </p>
          </div>
          <div className="flex gap-5 mt-10 justify-center tablet:justify-start">
            <Link href={"/contact"} className="btn btn-primary">
              <Phone />
              Contact now
            </Link>
            <Link href={"/contact"} className="btn">
              view profile
              <ArrowRight size={16} />
            </Link>
          </div>
          {/* stats */}
          <div className="bg-peach-400 w-full py-8 px-10 rounded-l-lg mt-16 flex-wrap gap-12 hidden tablet:flex">
            <div>
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Happy customers</p>
            </div>
            <div>
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Years of experience</p>
            </div>
          </div>

          {/* tablet version for stats section */}
          <div className="mt-16 grid grid-cols-2 gap-3 tablet:hidden">
            <div className="bg-peach-400 py-8 px-10 rounded-lg text-center col-span-2">
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Projects Completed</p>
            </div>
            <div className="bg-peach-400 py-8 px-10 rounded-lg text-center col-span-2">
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Happy customers</p>
            </div>
            <div className="bg-peach-400 py-8 px-10 rounded-lg text-center col-span-2">
              <h3 className="text-grey-700">
                5 <span className="text-purple">+</span>
              </h3>
              <p className="to-grey-600">Years of experience</p>
            </div>
          </div>
        </div>
        {/* right side */}
        <div
          className="relative w-full tablet:w-1/3 h-[400px] tablet:h-[700px]
       rounded-b-2xl overflow-hidden"
        >
          <Image
            src={"/images/hero.png"}
            alt="hero image"
            className="object-cover"
            fill
          />
        </div>
      </section>
      {/* skills section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Creative Skills"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quit"
        />
        {/* skills */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="box flex flex-col items-center gap-5">
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={35}
                  height={35}
                />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700 mb-2">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* benefits section */}
      <section className="max-width section-padding">
        <SectionHeading
          title="Benefits"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quit"
        />
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
        tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-3 tablet:mb-6"
        >
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h4 className="text-grey-700 mb-2">{benefit.name}</h4>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] 
        tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6"
        >
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h4 className="text-grey-700 mb-2">{benefit.name}</h4>
              <p className="text-grey-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* portfolio section */}
      <section className="section-padding max-width">
        <SectionHeading
          title="My Works"
          subtitle="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, quit"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.map((portfolio, index) => (
            <PortfolioItem key={index} portfolio={portfolio} />
          ))}
        </div>
        <Link
          href={"/portfolio"}
          className="btn btn-primary mt-10 mx-auto w-max"
        >
          View All projects
        </Link>
      </section>
      {/* testimonial page */}
      <TestimonialSection />

      {/* FAQs section */}
      <FaqsSection />
    </>
  );
};

export default page;
