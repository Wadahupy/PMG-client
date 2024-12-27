import React from "react";
import ScheduleBtn from "../shared/components/Partials/ScheduleBtn";
import ServiceBody from "../components/Services/ServiceBody";

const Services = () => {
  const serviceContents = [
    {
      title: "Smart Scheduling System",
      description:
        "Our Smart Scheduling System leverages advanced machine learning algorithms to recommend optimal schedules for services based on availability and preferences. This system is designed to maximize efficiency, minimize conflicts, and ensure smooth operations, providing both clients and providers with seamless planning experiences.",
    },
    {
      title: "Service History Dashboard",
      description:
        "The Service History Dashboard provides a comprehensive overview of all past transactions and services. This feature enables users to track their previous bookings, review service details, and access important documentation. The dashboard ensures all your records are easily accessible in one place.",
    },
    {
      title: "Feedback and Reviews",
      description:
        " Feedback and Reviews are essential for service improvement. Our platform allows clients to share their experiences, rate services, and provide constructive feedback. This feature helps us maintain high-quality standards and gives providers actionable insights to enhance their offerings.",
    },
  ];
  return (
    <>
      {/* Header Section */}
      <section className="py-12 text-white bg-primary">
        <div className="relative z-10 max-w-4xl p-10 mx-auto text-start">
          <h1 className="mb-8 text-6xl font-bold font-quattrocento">
            OUR SERVICES
          </h1>
          <p className="z-10 mb-10 text-xl font-dm_sans">
            We offer a range of innovative solutions designed to simplify and
            enhance your experience. Our services are tailored to meet your
            unique needs, providing seamless scheduling, comprehensive service
            history tracking, and a feedback system that prioritizes quality and
            continuous improvement. Discover how our tools can help streamline
            your processes and deliver exceptional results.
          </p>
          <img
            className="absolute w-[300px] h-[300px] -z-10  right-0 top-0 brightness-50 "
            src="/src/assets/images/bg-icon.png"
          />
          <ScheduleBtn />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl px-6 mx-auto">
          {/* Smart Scheduling System */}
          <ServiceBody serviceBodies={serviceContents} />
        </div>
      </section>
    </>
  );
};

export default Services;
