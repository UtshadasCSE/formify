import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-xl font-extrabold sm:text-xl">
              Effortless Form Building
              <strong className="font-extrabold text-[#d91656] sm:block sm:text-4xl">
                Instantly see how your form looks as you build.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Formify is a simple, powerful form builder that lets you create,
              share, and collect data effortlessly. No coding—just drag, drop,
              and publish!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-[#d91656] px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="#"
              >
                + Create AI Form
              </a>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-[#d91656] shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto"
                href="/about-us"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
