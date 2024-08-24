import { useState } from "react";

interface Props {
  currentTab: (value: string) => void;
}

const CustomTab = ({ currentTab }: Props) => {
  const [selectedTab, setSeletectedTab] = useState("Overview");

  const handleSelectTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSeletectedTab(String(event.currentTarget.textContent));
    currentTab(String(event.currentTarget.textContent));
  };
  return (
    <div className="flex justify-between w-full border-b border-primary lg:justify-normal divide-x divide-[#e5383b] mt-10">
      <button
        className={`${
          selectedTab === "Overview"
            ? " text-primary bg-[#e5383b16] "
            : " bg-transparent  "
        } duration-300 rounded-tl-lg w-full hover:bg-[#e5383b0d] lg:w-auto py-2 px-4 font-medium lg:px-20`}
        onClick={handleSelectTab}
      >
        Overview
      </button>
      <button
        className={`${
          selectedTab === "Statistics"
            ? " text-primary bg-[#e5383b16] "
            : " bg-transparent  "
        } duration-300 rounded-tr-lg w-full hover:bg-[#e5383b0d] lg:w-auto py-2 px-4 font-medium lg:px-20`}
        onClick={handleSelectTab}
      >
        Statistics
      </button>
    </div>
  );
};

export default CustomTab;
