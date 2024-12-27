import React from "react";
import BannerAbout from "../components/About/BannerAbout";

const About = () => {
  return (
    <div className="container z-0 min-h-screen mx-auto overflow-hidden">
      {/* About Banner */}
      <section className="relative overflow-hidden">
        <BannerAbout />
      </section>
      {/* Our Story Section*/}
      <section className="text-center">
        <h1 className="mt-10 text-6xl font-quattrocento">OUR STORY</h1>
        <p className="mb-10">Pet Memorial Garden</p>
        <p className="p-5 text-2xl text-justify text-black font-dm_sans dark:text-gray-400 first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">
          The story of Pet Cemetery Management and Services is rooted in
          compassion and a desire to transform the way we honor our beloved
          pets. Recognizing that pets are cherished family members who br ing
          joy and unconditional love, we saw the need for a modern approach to
          memorialization. The process of saying goodbye can often be
          overwhelming and lack the dignity our pets deserve, inspiring us to
          create "Pet Cemetery Management and Services Through Digital
          Information Using Machine Learning: A Smart Approach to
          Memorialization." Our mission is to blend cutting-edge technology with
          empathetic service, making the journey of loss more manageable while
          preserving the deep emotional connection families have with their
          pets.
        </p>
        <p className="p-5 text-2xl text-justify indent-10">
          Our innovative platform addresses the challenges families face during
          difficult times by providing tools that simplify and personalize the
          memorialization process. Intelligent scheduling powered by
          reinforcement learning streamlines service planning, while clustering
          techniques optimize cemetery space management, balancing functionality
          with reverence. Leveraging historical data and machine learning, we
          offer tailored memorial options that reflect the unique bond between
          families and their pets, ensuring every tribute is as special as the
          life it celebrates.
        </p>
        <p className="p-5 mb-24 text-2xl text-justify indent-10">
          At its core, our project is a reflection of care, empathy, and a
          commitment to honoring the lives of pets while supporting the families
          who loved them. From its user-friendly design to its thoughtful
          features, every aspect of our platform was created to ease the burden
          of grief and celebrate the memory of cherished companions. By
          combining technology with humanity, Pet Cemetery Management and
          Services strives to make a lasting difference, providing a service
          that resonates with love, loss, and remembrance.
        </p>
      </section>
    </div>
  );
};

export default About;
