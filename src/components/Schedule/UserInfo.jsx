import React, { useState } from "react";
import { Card, Input, Typography } from "@material-tailwind/react";
import SubmitBtn from "../../shared/components/Partials/SubmitBtn";

const UserInfo = () => {
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);
  };

  return (
    <div className="relative z-10 flex items-center justify-center ">
      <Card
        color="transparent"
        shadow={false}
        className="container rounded-2xl h-[700px] w-11/12 md:h-[700px] md:w-[700px] mx-auto -z-10"
      >
        <div className="border border-black rounded-xl">
          <div className="w-full text-center p-7">
            <Typography
              variant="h4"
              color="blue-gray"
              className="text-4xl text-center"
            >
              User Information
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Nice to meet you! Enter your details to register.
            </Typography>
          </div>
          <hr className="h-0.5 bg-black border-0 dark:bg-gray-700"></hr>
          <form
            className="w-full max-w-screen-lg p-10 mb-2"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-6 mb-10">
              {/* Name Section */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
              </Typography>
              <div className="flex flex-col w-full gap-2 sm:flex-row">
                <Input
                  size="lg"
                  placeholder="First Name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <Input
                  size="lg"
                  placeholder="Last Name"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              {/* Email Section */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Email
              </Typography>
              <div className="flex flex-row gap-2">
                <Input
                  size="lg"
                  placeholder="name@mail.com"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              {/* Contact No. Section */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Contact Number
              </Typography>
              <div className="flex flex-row gap-2">
                <Input
                  size="lg"
                  placeholder="0912345678"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              {/* Address Section */}
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Address
              </Typography>
              <Input
                size="lg"
                placeholder="63 Bantayog St. Concepcion Uno MC"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            {/* SubmitInfo Button */}
            <SubmitBtn
              label="Submit"
              onClick={handleSubmit}
              id="SubmitInfo"
              type="submit"
            />
          </form>
        </div>
      </Card>

      {/* Overlay */}
      {isVerifying && (
        <div className="absolute flex items-center justify-center bg-gray-800 bg-opacity-50  container rounded-2xl h-[939px] w-11/12 md:h-[700px] md:w-[700px] mx-auto ">
          <div className="px-6 py-3 text-lg font-semibold text-blue-700 bg-blue-100 rounded-md shadow-lg">
            Waiting for Admin Verification..
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
