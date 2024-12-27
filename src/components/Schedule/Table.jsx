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

  const handleClearSelection = () => setSelectedRow(null);
  return (
    <Card className="w-full h-full border border-black">
      <CardHeader floated={false} shadow={false} className="mb-4 rounded-none">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button
              variant="gradient"
              size="sm"
              color="light-blue"
              className="border border-black"
            >
              Pending
              <span className="px-2 py-1 ml-1 text-blue-700 rounded-full bg-secondary">
                5
              </span>
            </Button>
            <Button size="sm" color="white" className="border border-black">
              Upcoming
              <span className="px-2 py-1 ml-1 text-gray-700 rounded-full bg-secondary">
                5
              </span>
            </Button>
            <Button size="sm" color="white" className="border border-black">
              Completed
              <span className="px-2 py-1 ml-1 text-gray-700 rounded-full bg-secondary">
                5
              </span>
            </Button>
          </div>
          <div className="flex flex-col items-start gap-4 overflow-hidden sm:flex-row">
            <div className="flex flex-row flex-wrap my-1">
              <Input
                label="Search here..."
                icon={<MagnifyingGlassIcon className="w-5 h-5" />}
              />
            </div>
            <div className="flex flex-row flex-wrap gap-2 my-1">
              <Tooltip content="Edit Schedule">
                <IconButton
                  color="blue"
                  className="w-16 h-10 border border-black rounded-full"
                >
                  <BsPencilSquare className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Download PDF">
                <IconButton
                  color="green"
                  className="w-16 h-10 border border-black rounded-full"
                >
                  <FaFilePdf className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete Schedule">
                <IconButton
                  color="red"
                  className="w-16 h-10 border border-black rounded-full"
                >
                  <FaTrash className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <DialogBtn />
            </div>
          </div>
        </div>
      </CardHeader>
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
                  className={`p-4 text-sm text-blue-gray-600 ${
                    index !== TABLE_ROWS.length - 1
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
                    className={`p-4 text-sm text-blue-gray-600 ${
                      index !== TABLE_ROWS.length - 1
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
    </Card>
  );
};

export default ScheduleTable;
