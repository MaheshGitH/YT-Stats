import { Container } from "@chakra-ui/react";
import "./App.css";
import { Head, CustomTab, Overview, Statistics } from "./components";
import { useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState("Overview");

  return (
    <div className="w-screen">
      <Container mx="auto" maxW="1280px">
        <header>
          <Head />
        </header>
        <CustomTab currentTab={(value) => setCurrentTab(value)} />
        {currentTab === "Overview" ? <Overview /> : <Statistics />}
      </Container>
    </div>
  );
}

export default App;
