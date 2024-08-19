import { useColorMode } from "@chakra-ui/react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import Logo from "./Logo";
import Search from "./Search";

const Head = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className=" flex flex-col gap-12">
      <section className="flex justify-between items-center px-4 pt-4">
        <Logo colorMode={colorMode} />
        <button
          className={`border rounded-lg ${
            colorMode === "light" ? "border-black" : "border-white"
          }`}
          onClick={toggleColorMode}
        >
          {colorMode === "dark" ? (
            <span className="flex items-center gap-4 my-2 mx-4">
              Dark
              <FaRegMoon />
            </span>
          ) : (
            <span className="flex items-center gap-4 my-2 mx-4">
              Light <FaRegSun />
            </span>
          )}
        </button>
      </section>
      <Search colorMode={colorMode} />
    </div>
  );
};

export default Head;
