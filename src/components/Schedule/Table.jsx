import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FaFilePdf } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Button,
  CardBody,
  CardFooter,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import DialogBtn from "../../shared/components/Partials/DialogBtn";

const TABLE_HEAD = [
  "Scheduled Date",
  "Owner",
  "Address",
  "Contact No.",
  "Pet Name",
  "Birthday of Pet",
  "Pet Cause of Death",
  "Date of Death",
];

const TABLE_ROWS = [
  {
    date: "01-02-2025",
    owner: "Johnny",
    address: "63 Bantayog St. Concepcion Uno MC",
    contact: "09192073066",
    petName: "Miguel",
    birthday: "11-20-2020",
    causeOfDeath: "Penetration",
    dateOfDeath: "12-25-2024",
  },
  {
    date: "01-02-2025",
    owner: "Johnny",
    address: "63 Bantayog St. Concepcion Uno MC",
    contact: "09192073066",
    petName: "Miguel",
    birthday: "11-20-2020",
    causeOfDeath: "Penetration",
    dateOfDeath: "12-25-2024",
  },
];

const ScheduleTable = () => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [activeTab, setActiveTab] = useState("Pending");

  const handleClearSelection = () => setSelectedRow(null);
  return (
    <div className="flex flex-col w-full h-full bg-white border border-black rounded-3xl font-dm_sans">

      {/* header */}
      <div className="flex flex-col gap-4 m-4 2xl:flex-row">

        {/* tabs section (left/header) */}
        <div className="grid items-center gap-2 md:grid-cols-3 2xl:flex">

          <button
            className={`py-2 px-4 h-full flex items-center justify-center gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Pending" ? "cursor-default text-white bg-primary" : "bg-primary/10 text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Pending") }}
          >
            <p>Pending</p>
            {/* Pending notification */}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">5</span>
          </button>

          <button
            className={`py-2 px-4 h-full flex items-center justify-center gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Upcoming" ? "cursor-default text-white bg-primary" : "bg-primary/10 text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Upcoming") }}
          >
            <p>Upcoming</p>
            {/* Upcoming notification */}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">5</span>
          </button>

          <button
            className={`py-2 px-4 h-full flex items-center justify-center gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Completed" ? "cursor-default text-white bg-primary" : "bg-primary/10 text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Completed") }}
          >
            <p>Completed</p>
            {/* Completed notification 999 max*/}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">999</span>
          </button>

        </div>

        {/* tools section (right/header) */}
        <div className="flex flex-col items-center justify-end w-full gap-6 md:items-end xl:items-center lg:flex-row">

          {/* search bar */}
          <div className="w-full 2xl:w-fit">
            <Input
              label="Search"
              placeholder="Search here..."
              icon={<MagnifyingGlassIcon className="w-5 h-5" />}
              className="rounded-lg"
            />
          </div>

          <div className="flex items-center justify-end w-full h-full gap-6 2xl:w-fit">
            {/* buttons */}
            <div className="flex flex-row items-center h-full gap-2">
              {/* edit */}
              <Tooltip className="" placement="bottom" content="Edit Schedule">
                <IconButton
                  color="blue"
                  className="h-10 rounded-full"
                >
                  <BsPencilSquare className="w-5 h-5" />
                </IconButton>
              </Tooltip>

              {/* dl pdf */}
              <Tooltip className="" placement="bottom" content="Download PDF">
                <IconButton
                  color="green"
                  className="h-10 rounded-full"
                >
                  <FaFilePdf className="w-5 h-5" />
                </IconButton>
              </Tooltip>

              {/* delete */}
              <Tooltip className="" placement="bottom" content="Delete Schedule">
                <IconButton
                  color="red"
                  className="h-10 rounded-full"
                >
                  <FaTrash className="w-5 h-5" />
                </IconButton>
              </Tooltip>

            </div>

            {/* add sched btn */}
            <DialogBtn />
          </div>

        </div>
      </div>

      {/* table */}
      <CardBody className="p-0 overflow-auto border border-y-black">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="p-4 text-sm font-semibold text-black border-b bg-light-blue-100">
                Select
              </th>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-sm font-semibold text-black border-b bg-light-blue-100"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => (
              <tr key={index}>
                <td
                  className={`p-4 text-sm text-black ${index !== TABLE_ROWS.length - 1
                    ? "border-b border-blue-gray-50"
                    : ""
                    }`}
                >
                  <input
                    type="radio"
                    name="rowSelect"
                    value={index}
                    checked={selectedRow === index}
                    onChange={() => setSelectedRow(index)}
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </td>
                {Object.values(row).map((cell, idx) => (
                  <td
                    key={idx}
                    className={`p-4 text-sm text-black ${index !== TABLE_ROWS.length - 1
                      ? "border-b border-blue-gray-50"
                      : ""
                      }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-start m-4 text-sm hover:text-red-500">
          <button onClick={handleClearSelection}>Clear Select</button>
        </div>
      </CardBody>

      {/* page */}
      <CardFooter className="flex items-center justify-between p-4 overflow-scroll border-t sm:overflow-hidden border-blue-gray-50">
        <button className="z-10 flex items-center justify-center gap-2 px-6 py-2 text-base font-medium text-black transition-all duration-300 ease-in-out transform border border-black outline-none rounded-xl hover:bg-yellow-600 active:scale-95 font-dm_sans">
          Previous
        </button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
          <IconButton variant="text" size="sm">
            2
          </IconButton>
          <IconButton variant="text" size="sm">
            3
          </IconButton>
          <IconButton variant="text" size="sm">
            ...
          </IconButton>
          <IconButton variant="text" size="sm">
            8
          </IconButton>
          <IconButton variant="text" size="sm">
            9
          </IconButton>
          <IconButton variant="text" size="sm">
            10
          </IconButton>
        </div>
        <button className="z-10 flex items-center justify-center gap-2 px-6 py-2 text-base font-medium text-black transition-all duration-300 ease-in-out transform border border-black outline-none rounded-xl hover:bg-yellow-600 active:scale-95 font-dm_sans">
          Next
        </button >
      </CardFooter>
    </div>
  );
};

export default ScheduleTable;
