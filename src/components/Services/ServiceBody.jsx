import React from "react";

const ServiceBody = ({ serviceBodies }) => {
  return (
    <>
      {serviceBodies.map((serviceBody, index) => (
        <div key={index} className="mb-12 text-center">
          <h2 className="mb-8 text-5xl font-bold font-quattrocento text-primary">
            {serviceBody.title}
          </h2>
          <p className="text-xl text-gray-700">{serviceBody.description}</p>
        </div>
      ))}
    </>
  );
};

export default ServiceBody;
