import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FaFilePdf } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
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
];

const ScheduleTable = () => {
  return (
    <Card className="w-full h-full border border-black">
      <CardHeader floated={false} shadow={false} className="mb-4 rounded-none">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button size="sm" color="blue">
              Pending{" "}
              <span className="px-2 py-1 ml-1 text-blue-700 bg-blue-200 rounded-full">
                5
              </span>
            </Button>
            <Button size="sm" color="gray">
              Upcoming{" "}
              <span className="px-2 py-1 ml-1 text-gray-700 bg-gray-200 rounded-full">
                5
              </span>
            </Button>
            <Button size="sm" color="gray">
              Completed{" "}
              <span className="px-2 py-1 ml-1 text-gray-700 bg-gray-200 rounded-full">
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
            <div className="flex flex-row flex-wrap my-1">
              <Tooltip content="Edit Schedule">
                <IconButton color="black" className="w-16 h-10 rounded-full">
                  <BsPencilSquare className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Download PDF">
                <IconButton color="black" className="w-16 h-10 rounded-full">
                  <FaFilePdf className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete Schedule">
                <IconButton color="black" className="w-16 h-10 rounded-full">
                  <FaTrash className="w-5 h-5" />
                </IconButton>
              </Tooltip>
              <Tooltip content="Add New Entry">
                <IconButton
                  color="yellow"
                  className="w-16 h-10 border border-black rounded-full"
                >
                  <PlusIcon className="w-5 h-5" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-4 overflow-scroll border border-y-black">
        <table className="w-full text-left table-auto">
          <thead>
            <tr>
              <th className="p-4 text-sm font-semibold border-b text-blue-gray-700 border-blue-gray-100 bg-blue-gray-50">
                Select
              </th>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="p-4 text-sm font-semibold border-b text-blue-gray-700 border-blue-gray-100 bg-blue-gray-50"
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map((row, index) => (
              <tr key={index}>
                {/* Radial Button Column */}
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
                    className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                  />
                </td>
                {/* Other Columns */}
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
      </CardBody>
      <CardFooter className="flex justify-between p-4 overflow-scroll border-t sm:overflow-hidden tems-center border-blue-gray-50">
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
