import { Container, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { Nav } from "./components";

function App() {
  const bg = useColorModeValue("light", "dark");
  return (
    <Container bg={bg}>
      <header>
        <Nav />
      </header>
    </Container>
  );
}

export default App;
