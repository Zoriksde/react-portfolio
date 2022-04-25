import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Section from "./components/Section";
import Sidebar from "./components/Sidebar";
import {
  algorithmsSection,
  fullstackSection,
  creativitySection,
} from "./data/section";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const toggleIsSidebarOpen = (): void => {
    setIsSidebarOpen((prevIsSidebarOpen) => !prevIsSidebarOpen);
  };

  return (
    <div className="app">
      <Navbar toggleIsSidebarOpen={toggleIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleIsSidebarOpen={toggleIsSidebarOpen}
      />
      <Section {...algorithmsSection} />
      <Section {...fullstackSection} />
      <Section {...creativitySection} />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
