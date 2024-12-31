import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";
import SubmitBtn from "../../shared/components/Partials/SubmitBtn";

const SignUpForm = () => {
  const handleSignUp = () => {
    console.log("SignUp button clicked");
    // Perform Sign In logic here
  };
  return (
    <Card
      color="transparent"
      shadow={false}
      className="container flex flex-col items-center justify-center mx-auto"
    >
      <div className="p-10 my-10 border border-black rounded-xl font-dm_sans">
        <Typography variant="h4" color="blue-gray" className="font-dm_sans">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal font-dm_sans">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="w-full max-w-screen-lg mt-8 mb-2 font-dm_sans">
          <div className="flex flex-col gap-6 mb-1">

            {/* Email Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 font-dm_sans">
              Email
            </Typography>
            <div className="flex flex-row gap-2">
              <Input
                size="lg"
                placeholder="e.g. Juan Dela Cruz"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1 font-dm_sans"
                labelProps={{
                  className: "before:content-none after:content-none font-dm_sans",
                }}
              />
            </div>

            {/* Password Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 font-dm_sans">
              Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 font-dm_sans"
              labelProps={{
                className: "before:content-none after:content-none font-dm_sans",
              }}
            />

            {/* Confirm Password Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3 font-dm_sans">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900 font-dm_sans"
              labelProps={{
                className: "before:content-none after:content-none font-dm_sans",
              }}
            />
          </div>

          {/* Terms & Conditions */}
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal font-dm_sans"
              >
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900 font-dm_sans"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />

          {/* Sign-Up Button */}
          <SubmitBtn
            label="Sign Up"
            onClick={handleSignUp}
            id="Sign-Up"
            type="submit"
            className="mt-6 font-dm_sans"
          />

          {/* Sign-In Link */}
          <Typography color="gray" className="mt-4 font-normal text-center font-dm_sans">
            Already have an account?{" "}
            <NavLink to="/sign-in" className="font-medium text-gray-900 font-dm_sans">
              Sign In
            </NavLink>
          </Typography>
        </form>
      </div>
    </Card>
  );
};

export default SignUpForm;
