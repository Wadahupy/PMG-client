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
      <div className="p-10 my-10 border border-black rounded-xl">
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form className="w-full max-w-screen-lg mt-8 mb-2">
          <div className="flex flex-col gap-6 mb-1">
            {/* Name Section */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Name
            </Typography>
            <div className="flex flex-col w-full gap-2 sm:flex-row">
              <Input
                size="lg"
                placeholder="e.g. Juan"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Input
                size="lg"
                placeholder="e.g. Dela Cruz"
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
                placeholder="e.g. Juan Dela Cruz"
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
                placeholder="e.g. 0912345678"
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
                I agree to the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
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
            className="mt-6"
          />

          {/* Sign-In Link */}
          <Typography color="gray" className="mt-4 font-normal text-center">
            Already have an account?{" "}
            <NavLink to="/sign-in" className="font-medium text-gray-900">
              Sign In
            </NavLink>
          </Typography>
        </form>
      </div>
    </Card>
  );
};

export default SignUpForm;
