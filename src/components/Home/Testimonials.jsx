import React from "react";

const Testimonials = ({ testimonials }) => {
  return (
    <div className="grid grid-cols-1 gap-8 px-6 lg:grid-cols-1 sm:px-12 lg:px-24">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center lg:p-6 ${
            index % 2 === 0 ? "" : "lg:flex-row-reverse mb-40 md:mb-40 lg:mb-20"
          }`}
        >
          <img
            src={testimonial.image}
            alt="Testimonial"
            className="object-cover min-w-72 mb-4 rounded-lg h-[500px] lg:mb-0 lg:mr-20 lg:ml-20 border border-black"
          />
          <div className="w-full text-2xl">
            <p className="mb-4 text-gray-700">{testimonial.text}</p>
            <p className="font-bold text-black">— {testimonial.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
