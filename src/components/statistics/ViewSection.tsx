import {
  CircularProgress,
  CircularProgressLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { TfiStatsUp } from "react-icons/tfi";
import calculateCount from "../../utils/calculateCount";
import formatNumber from "../../utils/formatNumber";

interface Props {
  viewCount: string | undefined;
}

const ViewSection = ({ viewCount }: Props) => {
  if (!viewCount) return;

  const cProgressBreakPoint = useBreakpointValue({ base: 140, lg: 200 });
  const [max, setMax] = useState(0);

  useEffect(() => {
    setMax(calculateCount(parseInt(viewCount)));
  }, [viewCount]);

  return (
    <div className="flex flex-col items-center lg:w-auto">
      <span className="flex items-center gap-2">
        <TfiStatsUp className="inline-block mb-px text-primary lg:size-5" />
        <span className="lg:text-lg">
          Number of views &#40;out of &nbsp;
          <span className="font-bold">{formatNumber(max)}</span>
          &#41;
        </span>
      </span>

      <CircularProgress
        value={parseInt(viewCount)}
        size={cProgressBreakPoint}
        color="primary.200"
        max={max}
      >
        <CircularProgressLabel
          fontSize={["1.3rem", null, null, "1.5rem", null, null]}
          fontWeight="600"
        >
          {`${formatNumber(parseInt(viewCount))} ${
            parseInt(viewCount) > 1000 ? "+" : ""
          }`}
        </CircularProgressLabel>
      </CircularProgress>
    </div>
  );
};

export default ViewSection;
