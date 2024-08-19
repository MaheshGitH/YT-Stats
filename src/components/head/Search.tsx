import { IoSearchOutline } from "react-icons/io5";
import { ColorModeType } from "../types";
import Instruction from "./Instruction";

const Search = ({ colorMode }: ColorModeType) => {
  return (
    <section>
      <form
        className={`max-w-md min-w-24 ${
          colorMode === "light"
            ? " bg-[#EFEFEF] text-black "
            : " bg-black text-white "
        }  border-b-2 border-primary flex  items-center px-6 py-4 rounded-tl-lg rounded-tr-lg mx-auto`}
        action=""
      >
        <input
          placeholder="Enter YouTube channel ID"
          className="bg-transparent placeholder-[#786868] w-full outline-none"
          type="text"
        />
        <IoSearchOutline className=" text-primary size-7" />
      </form>
      <Instruction />
    </section>
  );
};

export default Search;
