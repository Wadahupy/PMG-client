import React from "react";

const Cards = ({ items }) => {
  return (
    <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          // className="relative flex w-full p-5 items-center overflow-hidden select-none hover:scale-[104%] ease-in-out duration-300 text-white h-[300px] rounded-3xl font-dm_sans group"
          className="relative flex w-full items-center overflow-hidden select-none hover:scale-[104%] ease-in-out duration-300 border border-black text-white min-h-[400px] h-[50vh] rounded-3xl font-dm_sans group"
        >
          <img
            // className=" object-cover absolute top-0 left-0 brightness-50 w-full h-full blur-[2px] group-hover:blur-none group-hover:brightness-100 group-hover:scale-[106%] ease-in-out duration-[600ms]"
            // className=" object-cover absolute top-0 left-0 brightness-50 w-full h-full blur-[2px] group-hover:blur-none ease-in-out duration-[600ms]"
            // className=" object-cover absolute top-0 left-0 brightness-[0.6] w-full h-full blur-[2px] group-hover:blur-none ease-in-out group-hover:scale-[106%] duration-[600ms]"
            // className=" object-cover absolute top-0 left-0 brightness-[0.6] grayscale w-full h-full ease-in-out group-hover:grayscale-0 group-hover:scale-[106%] duration-[600ms]"
            // className=" object-cover absolute top-0 left-0 grayscale w-full h-full ease-in-out group-hover:grayscale-0 group-hover:scale-[106%] duration-[600ms]"
            // className=" object-cover absolute top-0 left-0 w-full h-full ease-in-out group-hover:scale-[106%] duration-[600ms]"
            className=" object-cover absolute top-0 left-0 w-full h-full ease-in-out group-hover:blur-[2px] group-hover:scale-[106%] duration-[600ms]"
            src={item.image}
            alt="services"
          />

          {/* <div className="w-full h-[120%] absolute top-[30%] left-0 bg-gradient-to-t from-black group-hover:top-0 duration-[700ms] ease-in-out"></div> */}
          {/* <div className="w-full h-[110%] absolute top-[10%] left-0 bg-gradient-to-t from-black/80 group-hover:top-0 duration-[700ms] ease-in-out"></div> */}
          {/* <div className="w-full h-[200%] absolute -top-[50%] left-0 bg-gradient-to-t from-black group-hover:-top-[70%] duration-[700ms] ease-in-out"></div> */}
          <div className="w-full h-[200%] absolute -top-[70%] left-0 bg-gradient-to-t from-black/90 group-hover:-top-[100%] duration-[700ms] ease-in-out"></div>

          {/* <div className="w-full h-[100%] absolute -top-[0%] left-0 bg-gradient-to-t from-black/90 group-hover:-top-[100%] duration-[700ms] ease-in-out"></div> */}
          {/* <div className="w-full h-[100%] absolute top-[100%] left-0 bg-black/50 group-hover:top-[0%] duration-[900ms] ease-in-out"></div> */}

          {/* <div className="z-10 flex flex-col justify-center w-full">
            <h3 className="mx-auto mb-4 text-5xl lg:text-3xl xl:text-5xl font-medium text-pretty w-[80%] xl:w-full sm:translate-y-[100%] translate-y-[50%] md:translate-y-[200%] lg:translate-y-[150%] xl:translate-y-[100%] group-hover:translate-y-0 ease-in-out duration-[500ms]">{item.title}</h3>
            <p className="mx-auto text-lg lg:text-base font-normal text-balance w-[80%] translate-y-[300%] group-hover:translate-y-0 ease-in-out duration-[500ms]">
              {item.description}
            </p>
          </div> */}
          <div className="absolute -translate-x-1/2 left-1/2 z-10 flex flex-col w-full px-10 lg:px-5 xl:px-10 top-[80%] -translate-y-1/2 group-hover:top-1/2 ease-in-out duration-[500ms]">
            <h3 className="mx-auto mb-4 text-5xl lg:text-4xl font-medium text-pretty xl:w-full ease-in-out duration-[600ms] 2xl:w-[80%]">
              {item.title}
            </h3>
            <p className="mx-auto text-lg lg:text-base font-normal text-pretty translate-y-[500%] w-[80%] group-hover:translate-y-0 ease-in-out duration-[550ms]">
              {item.description}
            </p>
          </div>

        </div>
      ))}
    </div>
  );
};

export default Cards;