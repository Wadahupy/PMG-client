import React from "react";
import { HiArrowSmRight } from "react-icons/hi";
import Cards from "/src/components/Home/Cards";
import Testimonials from "/src/components/Home/Testimonials";
import BannerCards from "/src/components/Home/BannerCards";
import BannerHome from "/src/components/Home/BannerHome";
import SubmitBtn from "../shared/components/Partials/SubmitBtn";

const Home = () => {
  const cardItems = [
    {
      title: "Specialized Pet Care",
      description:
        "Our team of certified veterinarians will provide expert care tailored to your pet's needs, ensuring they receive the best possible care.",
      image: "../src/assets/images/home-bg.png",
    },
    {
      title: "Specialized Pet Care",
      description:
        "Our team of certified veterinarians will provide expert care tailored to your pet's needs, ensuring they receive the best possible care.",
      image: "../src/assets/images/home-bg.png",
    },
    {
      title: "Specialized Pet Care",
      description:
        "Our team of certified veterinarians will provide expert care tailored to your pet's needs, ensuring they receive the best possible care.",
      image: "../src/assets/images/home-bg.png",
    },
  ];

  const testimonialItems = [
    {
      image: "../src/assets/images/home-bg.png",
      text: "Losing our beloved Max was one of the hardest moments for our family. Pet Cemetery Management and Services made the process so much easier, handling everything with care and professionalism. We are grateful for the dignified resting place they provided for him.",
      author: "Maria S.",
    },
    {
      image: "../src/assets/images/home-bg.png",
      text: "The team was incredibly compassionate and supportive during such a difficult time. They helped us honor Bella's memory in a way that truly reflected how much she meant to us. Thank you for making this experience as smooth as possible.",
      author: "John D.",
    },
  ];

  const chooseUsItems = [
    {
      title: "Compassionate Support",
    },
    {
      title: "Simplified Process",
    },
    {
      title: "Respectful Memorialization",
    },
    {
      title: "Personalized Care",
    },
    {
      title: "Dedicated to Preservation",
    },
    {
      title: "Expert Guidance",
    },
  ];

  const handleSubmit = () => {
    console.log("Submit Button was clicked");
    // Perform Submit logic here
  };

  return (
    <div className="z-0 min-h-screen overflow-hidden">
      {/* Home Banner  */}
      <section className="container relative mx-auto overflow-hidden">
        <BannerHome />
      </section>

      {/* Services Section */}
      <section className="relative w-full py-12 text-center text-white -z-10 bg-primary -top-32 ">
        <h2 className="mb-4 text-6xl pt-28 font-quattrocento">
          OUR SERVICES AT A GLANCE
        </h2>
        <p className="mb-5 text-sm font-dm_sans">
          Discover how we can help you honor the memory of your beloved pets
          with care and ease.
        </p>
        <p className="flex items-center justify-center mb-10 font-thin text-center underline font-dm_sans">
          View more
          <HiArrowSmRight />
        </p>
        <Cards items={cardItems} />
      </section>

      {/* Testimonials Section*/}
      <section className="container mx-auto">
        <h2 className="w-full mb-10 text-5xl font-bold text-center md:text-6xl item-center font-quattrocento">
          TESTIMONIALS
        </h2>
        <Testimonials testimonials={testimonialItems} />
      </section>

      {/* Why choose us Section*/}
      <section className="relative w-full py-12 text-center text-white -z-10 bg-primary -top-32">
        <h2 className="pt-10 mb-10 text-6xl font-quattrocento">
          WHY CHOOSE US?
        </h2>
        <div>
          <BannerCards bannerCards={chooseUsItems} />
        </div>
      </section>

      {/* Have a Question Section*/}
      <div className="container flex flex-col w-full max-w-4xl p-8 mx-auto mb-40 border border-black rounded-lg shadow-lg bg-secondary lg:flex-row">
        {/* Left: Form Section */}
        <div className="flex-1">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="subject" className="sr-only">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Subject"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Message"
                className="w-full p-3 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              ></textarea>
            </div>
            <SubmitBtn
              label="Submit"
              onClick={handleSubmit}
              id="SubmitBtn"
              type="submit"
              className="mt-6"
            />
          </form>
        </div>

        {/* Right: Text Section */}
        <div className="items-center justify-center flex-1 text-center lg:mt-0 lg:ml-12 lg:text-left">
          <h2 className="mb-4 text-6xl font-bold text-black font-quattrocento">
            Have Questions?
          </h2>
          <p className="mb-5 text-gray-700 ">
            If you need assistance or more information about our services, feel
            free to reach out. Our team is ready to answer any questions you may
            have and guide you through the memorialization process.
          </p>
          <div className="flex justify-center lg:justify-center">
            <img
              className={`size-52`}
              src="../src/assets/images/logo-icon-dark.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
