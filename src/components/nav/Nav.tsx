import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaRegMoon } from "react-icons/fa";

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("", "");

  return (
    <section className="flex justify-between">
      <Button as={Button} onClick={toggleColorMode} rightIcon={<FaRegMoon />}>
        {colorMode === "dark" ? "Dark" : "Light"}
      </Button>
      <p>helo</p>
    </section>
  );
};

export default Nav;
