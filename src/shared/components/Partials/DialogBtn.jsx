import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/outline";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Tooltip,
  Card,
  Typography,
  Input,
} from "@material-tailwind/react";

const DialogBtn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Tooltip content="Edit Schedule">
        <Button
          onClick={handleOpen}
          variant="gradient"
          className="flex items-center mx-2 border border-black"
          color="yellow"
        >
          <PlusIcon className="w-5 h-5" />
          Add Schedule
        </Button>
      </Tooltip>

      <Dialog open={open} handler={handleOpen} className="max-h-screen">
        <DialogHeader className="flex justify-center">
          Add New Schedule
        </DialogHeader>
        <DialogBody className="overflow-y-scroll max-h-[400px] border border-black">
          <Card
            color="transparent"
            shadow={false}
            className="mx-auto rounded-2xl"
          >
            <form className="p-5">
              <div className="flex flex-col">
                <div className="flex flex-col items-start w-full gap-2 sm:flex-row">
                  <div className="flex flex-col flex-1 w-full">
                    {/* Date Section */}
                    <Typography variant="h6" color="blue-gray">
                      Date
                    </Typography>
                    <Input
                      size="lg"
                      type="date"
                      placeholder="Date today"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900 w-full"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                  <div className="flex flex-col w-full mb-2 flex-0">
                    {/* Name of Owner Section */}
                    <Typography variant="h6" color="blue-gray">
                      Name of Owner
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="e.g. Juan Dela Cruz"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>

                {/* Address Section */}
                <Typography variant="h6" color="blue-gray">
                  Address
                </Typography>
                <div className="flex flex-row gap-2 mb-2">
                  <Input
                    size="lg"
                    placeholder="e.g. 63 Bantayog St. Concepcion Uno MC"
                    className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="flex flex-col items-start w-full gap-2 sm:flex-row">
                  <div className="flex flex-col flex-1 w-full">
                    {/* Name of Pet Section */}
                    <Typography variant="h6" color="blue-gray">
                      Name of Pet
                    </Typography>
                    <div className="flex flex-row gap-2">
                      <Input
                        size="lg"
                        placeholder="e.g. Brownie"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 w-full">
                    {/* Contact No. Section */}
                    <Typography variant="h6" color="blue-gray">
                      Contact Number
                    </Typography>
                    <div className="flex flex-row gap-2 mb-2">
                      <Input
                        size="lg"
                        placeholder="e.g. 0912345678"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-start w-full gap-2 sm:flex-row">
                  <div className="flex flex-col flex-1 w-full">
                    {/* Birthday of Pet Section */}
                    <Typography variant="h6" color="blue-gray">
                      Birthday of Pet
                    </Typography>
                    <div className="flex flex-row gap-2">
                      <Input
                        size="lg"
                        type="date"
                        placeholder="0912345678"
                        className="!border-t-blue-gray-200 focus:!border-t-gray-900 flex-1"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 w-full mb-2">
                    {/* Death Date Section */}
                    <Typography variant="h6" color="blue-gray">
                      Death Date
                    </Typography>
                    <Input
                      size="lg"
                      type="date"
                      placeholder="63 Bantayog St. Concepcion Uno MC"
                      className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>
                </div>
                {/* Cause of Death Section */}
                <Typography variant="h6" color="blue-gray">
                  Cause of Death
                </Typography>
                <Input
                  size="lg"
                  placeholder="e.g. Penetration"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
              </div>

              {/* SubmitInfo Button */}
              {/* <SubmitBtn
              label="Submit"
              onClick={handleSubmit}
              id="SubmitInfo"
              type="submit"
            /> */}
            </form>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            className="border border-black"
            color="yellow"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DialogBtn;
