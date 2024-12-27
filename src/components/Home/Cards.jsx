import React from "react";

const Cards = ({ items }) => {
  return (
    <div className="container grid grid-cols-1 gap-6 px-10 mx-auto sm:grid-cols-1 lg:grid-cols-3 sm:px-12 lg:px-24">
      {items.map((item, index) => (
        <div
          key={index}
          className="object-cover w-full h-full p-20 shadow-md rounded-3xl text-start font-dm_sans"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h3 className="mb-2 text-2xl font-medium text-white">{item.title}</h3>
          <p className="font-light text-white text-pretty">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
