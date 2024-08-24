import {
  CircularProgress,
  CircularProgressLabel,
  Progress,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoVideocamOutline } from "react-icons/io5";
import { PiEyeThin } from "react-icons/pi";
import { FaPeopleGroup } from "react-icons/fa6";

const Statistics = () => {
  const cProgressBreakPoint = useBreakpointValue({ base: 140, lg: 200 });

  return (
    <div className="grid grid-cols-1 gap-y-10 lg:gap-y-48 lg:grid-cols-2 mt-3 lg:mt-5 mb-20">
      <div className="flex flex-col items-center lg:w-auto">
        <span className="flex items-center gap-2">
          <IoVideocamOutline className="inline-block mb-px text-primary size-4 lg:size-5" />
          <span className="lg:text-lg">
            Video count <span className="font-bold">40K +</span>
          </span>
        </span>
        <CircularProgress
          value={40}
          size={cProgressBreakPoint}
          color="primary.200"
        >
          <CircularProgressLabel
            fontSize={["1.3rem", null, null, "1.5rem", null, null]}
            fontWeight="600"
          >
            100K
          </CircularProgressLabel>
        </CircularProgress>
      </div>
      <div className="flex flex-col items-center lg:w-auto">
        <span className="flex items-center gap-2">
          <PiEyeThin className="inline-block mb-px text-primary lg:size-5" />
          <span className="lg:text-lg">
            View count
            <span className="font-bold">40K +</span>
          </span>
        </span>

        <CircularProgress
          value={40}
          size={cProgressBreakPoint}
          color="primary.200"
        >
          <CircularProgressLabel
            fontSize={["1.3rem", null, null, "1.5rem", null, null]}
            fontWeight="600"
          >
            100K
          </CircularProgressLabel>
        </CircularProgress>
      </div>

      <div className="lg:col-span-2">
        <span className="flex items-center gap-2">
          <FaPeopleGroup className="inline-block mb-px text-primary size-4 lg:size-5" />
          <span className="lg:text-lg">
            Subscribers count <span className="font-bold">40K +</span>
          </span>
        </span>
        <Progress
          mt={1}
          height={[5, null, null, 8, null, null]}
          border="1px"
          background="transparent"
          borderColor="primary.200"
          borderRadius={200}
          colorScheme={"primary"}
          value={60}
          max={100}
          position="relative"
        >
          <span className="absolute -top-[2px] lg:top-1 right-4 font-bold">
            100K
          </span>
        </Progress>
      </div>
    </div>
  );
};

export default Statistics;
