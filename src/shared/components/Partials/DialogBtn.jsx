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
      <Tooltip placement="bottom" content="Add Schedule">
        <button
          onClick={handleOpen}
          className="flex items-center justify-center w-full h-full gap-2 px-4 py-2 text-base duration-300 ease-in-out border border-black md:min-w-fit rounded-xl bg-tertiary hover:bg-yellow-600"
        >
          <PlusIcon className="w-5 h-5" />
          Add Schedule
        </button>
      </Tooltip>

      <Dialog open={open} handler={handleOpen} className="h-[80vh] overflow-auto rounded-3xl flex flex-col">
        <DialogHeader className="flex justify-center my-5 text-4xl text-black font-dm_sans">
          Add New Schedule
        </DialogHeader>
        <DialogBody className="h-full min-h-[400px] overflow-auto bg-white border-black border-y">
          <form className="p-5 text-black font-dm_sans">
            <div className="flex flex-col">
              <div className="flex flex-col items-start w-full gap-2 sm:flex-row">
                <div className="flex flex-col flex-1 w-full">
                  {/* Date Section */}
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
              <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
                  <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
              <Typography classname="font-dm_sans" variant="h6" color="blue-gray">
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
        </DialogBody>
        <DialogFooter>
          <button
            onClick={handleOpen}
            className="z-10 flex items-center justify-center gap-2 px-8 py-4 mr-4 text-lg font-medium text-red-600 transition-all duration-300 ease-in-out transform rounded-lg outline-none active:scale-95 hover:bg-red-50 font-dm_sans"
          >
            Cancel
          </button>
          <button
            className="z-10 flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium text-black transition-all duration-300 ease-in-out transform border border-black rounded-lg outline-none bg-tertiary hover:bg-yellow-600 active:scale-95 hover:scale-105 font-dm_sans"
            onClick={handleOpen}
          >
            Confirm
          </button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default DialogBtn;
