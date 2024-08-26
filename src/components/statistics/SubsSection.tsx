import { Progress } from "@chakra-ui/react";

import { FaPeopleGroup } from "react-icons/fa6";
import formatNumber from "../../utils/formatNumber";
import { useState, useEffect } from "react";
import calculateCount from "../../utils/calculateCount";

interface Props {
  subscribersCount: string | undefined;
}

const SubsSection = ({ subscribersCount }: Props) => {
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(calculateCount(parseInt(subscribersCount!)));
  }, [subscribersCount]);
  return (
    <div className="lg:col-span-2">
      <span className="flex items-center gap-2">
        <FaPeopleGroup className="inline-block mb-px text-primary size-4 lg:size-5" />
        <span className="lg:text-lg">
          Subscribers count{" "}
          <span className="font-bold">
            {" "}
            {`${formatNumber(parseInt(subscribersCount!))} ${
              parseInt(subscribersCount!) > 1000 ? "+" : ""
            }`}
          </span>
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
        value={parseInt(subscribersCount!)}
        max={max}
        position="relative"
      >
        <span className="absolute -top-[2px] lg:top-1 right-4 font-bold">
          {formatNumber(max)}
        </span>
      </Progress>
    </div>
  );
};

export default SubsSection;
