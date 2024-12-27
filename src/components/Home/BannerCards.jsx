import React from "react";

const BannerCards = ({ bannerCards }) => {
  return (
    <div className="container grid grid-cols-1 gap-8 px-6 mx-auto md:grid-cols-2 lg:grid-cols-3 sm:px-12 lg:px-24">
      {bannerCards.map((bannerCard, index) => (
        <div
          key={index}
          className={`flex flex-col lg:flex-row items-center font-dm_sans text-black justify-center text-3xl p-10  shadow-lg rounded-xl ${
            index % 2 === 0 ? "bg-secondary" : " bg-tertiary"
          }`}
        >
          <h1>{bannerCard.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default BannerCards;
