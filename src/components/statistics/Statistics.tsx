import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
} from "@chakra-ui/react";
import { IoVideocamOutline } from "react-icons/io5";
import { PiEyeThin } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

const Statistics = () => {
  return (
    <div className="grid grid-cols-1 gap-y-3 lg:grid-cols-2 mt-3">
      <div className="flex flex-col items-center lg:w-auto">
        <span>
          <IoVideocamOutline className=" inline-block mb-px text-primary" />{" "}
          Video count <span className="font-bold">40K +</span>
        </span>
        <CircularProgress value={40} size={140} color="primary.200">
          <CircularProgressLabel fontSize="1.3rem" fontWeight="600">
            100K
          </CircularProgressLabel>
        </CircularProgress>
      </div>
      <div className="flex flex-col items-center lg:w-auto">
        <span>
          <PiEyeThin className=" inline-block mb-px text-primary" /> View count{" "}
          <span className="font-bold">40K +</span>
        </span>

        <CircularProgress value={40} size={140} color="primary.200">
          <CircularProgressLabel fontSize="1.3rem" fontWeight="600">
            100K
          </CircularProgressLabel>
        </CircularProgress>
      </div>

      <div className="lg:col-span-2">
        <span>
          <FaPeopleGroup className=" inline-block mb-1 text-primary" />{" "}
          Subscribers count <span className="font-bold">40K +</span>
        </span>
        <Progress
          mt={1}
          height={5}
          border="1px"
          background="transparent"
          borderColor="primary.200"
          borderRadius={200}
          colorScheme={"primary"}
          value={30}
          position="relative"
        >
          <span className="absolute -top-[2px] right-2 font-bold">100K</span>
        </Progress>
      </div>
    </div>
  );
};

export default Statistics;
