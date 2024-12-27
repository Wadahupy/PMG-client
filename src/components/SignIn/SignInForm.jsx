import React from "react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import SubmitBtn from "../../shared/components/Partials/SubmitBtn";

export const SignInForm = () => {
  const handleSignIn = () => {
    console.log("SignIn button clicked");
    // Perform Sign In logic here
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="container flex flex-col items-center justify-center mx-auto"
    >
      <div className="p-10 my-10 border border-black rounded-xl">
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="w-full max-w-screen-lg mt-8 mb-2">
          <div className="flex flex-col gap-6 mb-1">
            {/* Email Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Email
            </Typography>
            <div className="flex flex-row gap-2">
              <Input
                size="lg"
                placeholder="e.g. Juan Dela Cruz"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>

            {/* Password Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>

          {/* Terms & Conditions */}
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                Remember me?
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          {/* Sign-Up Button */}
          <SubmitBtn
            label="Sign In"
            onClick={handleSignIn}
            id="Sign-In"
            type="submit"
            className="mt-6"
          />

          {/* Sign-Up Link */}
          <Typography color="gray" className="mt-4 font-normal text-center">
            Don't have an Account?{" "}
            <NavLink to={"/sign-up"} className="font-medium text-gray-900">
              Sign Up
            </NavLink>
          </Typography>
        </form>
      </div>
    </Card>
  );
};

export default SignInForm;
