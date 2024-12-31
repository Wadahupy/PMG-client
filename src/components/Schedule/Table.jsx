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
    //  min-h-[50vh]
    <div className="w-full h-full bg-white border border-black rounded-3xl">

      {/* header */}
      <div className="flex items-center justify-between gap-4 m-4">

        {/* tabs section */}
        <div className="flex items-center gap-4">

          <button
            className={`py-2 px-4 h-full flex items-center w-fit gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Pending" ? "cursor-default text-white bg-primary" : "text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Pending") }}
          >
            <p>Pending</p>
            {/* Pending notification */}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">5</span>
          </button>

          <button
            className={`py-2 px-4 h-full flex items-center w-fit gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Upcoming" ? "cursor-default text-white bg-primary" : "text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Upcoming") }}
          >
            <p>Upcoming</p>
            {/* Upcoming notification */}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">5</span>
          </button>

          <button
            className={`py-2 px-4 h-full flex items-center w-fit gap-2 rounded-xl text-base duration-300 ease-in-out ${activeTab === "Completed" ? "cursor-default text-white bg-primary" : "text-black hover:bg-blue-gray-50"}`}
            onClick={() => { setActiveTab("Completed") }}
          >
            <p>Completed</p>
            {/* Completed notification */}
            <span className="flex items-center justify-center text-sm text-black rounded-full bg-secondary size-8">5</span>
          </button>

        </div>

        {/* tools section */}
        <div className="flex flex-col items-center gap-4 sm:flex-row">

          {/* search bar */}
          <div className="">
            <Input
              label="Search"
              placeholder="Search here..."
              icon={<MagnifyingGlassIcon className="w-5 h-5" />}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-row flex-wrap gap-2">

            {/* edit */}
            <Tooltip content="Edit Schedule">
              <IconButton
                color="blue"
                className="w-16 h-10 border border-black rounded-full"
              >
                <BsPencilSquare className="w-5 h-5" />
              </IconButton>
            </Tooltip>

            {/* dl pdf */}
            <Tooltip content="Download PDF">
              <IconButton
                color="green"
                className="w-16 h-10 border border-black rounded-full"
              >
                <FaFilePdf className="w-5 h-5" />
              </IconButton>
            </Tooltip>

            {/* delete */}
            <Tooltip content="Delete Schedule">
              <IconButton
                color="red"
                className="w-16 h-10 border border-black rounded-full"
              >
                <FaTrash className="w-5 h-5" />
              </IconButton>
            </Tooltip>

            {/* add sched btn */}
            <DialogBtn />

          </div>

        </div>
      </div>

      {/* table */}
      <CardBody className="px-4 overflow-x-auto border border-y-black">
        <table className="w-full text-left border table-auto border-blue-gray-50">
          <thead>
            <tr>
              <th className="p-4 text-sm font-semibold border-b text-blue-gray-700 border-blue-gray-100 bg-light-blue-100">
                Select
              </th>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-sm font-semibold border-b text-blue-gray-700 border-blue-gray-100 bg-light-blue-100"
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
                  className={`p-4 text-sm text-blue-gray-600 ${index !== TABLE_ROWS.length - 1
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
                    className={`p-4 text-sm text-blue-gray-600 ${index !== TABLE_ROWS.length - 1
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
        <div className="flex justify-start mt-4 text-sm hover:text-red-500">
          <button onClick={handleClearSelection}>Clear</button>
        </div>
      </CardBody>

      {/* page */}
      <CardFooter className="flex items-center justify-between p-4 overflow-scroll border-t sm:overflow-hidden border-blue-gray-50">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
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
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter>
    </div>
  );
};

export default ScheduleTable;
