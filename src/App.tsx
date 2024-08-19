import { Container } from "@chakra-ui/react";
import "./App.css";
import { Head } from "./components";

function App() {
  return (
    <div className="w-screen flex justify-center">
      <Container m={0} maxW="1280px">
        <header>
          <Head />
        </header>
      </Container>
    </div>
  );
}

export default App;
