import { Container } from "@chakra-ui/react";
import "./App.css";
import { Head, CustomTab } from "./components";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("");
  console.log(currentTab);

  return (
    <div className="w-screen">
      <Container mx="auto" maxW="1280px">
        <header>
          <Head />
        </header>
        <CustomTab currentTab={(value) => setCurrentTab(value)} />
      </Container>
    </div>
  );
}

export default App;
