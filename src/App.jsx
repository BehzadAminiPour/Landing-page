import {
  About,
  Download,
  Faq,
  Features,
  Footer,
  Hero,
  Navbar,
  Sidebar,
  Subscribe,
} from "./components";
import { useState } from "react";
function App() {
  const [showIcon, setShowIcon] = useState(false);
  const toggleIcon = () => {
    setShowIcon(!showIcon);
  };
  return (
    <main>
      <Navbar showIcon={showIcon} onToggle={toggleIcon} />
      <Sidebar showIcon={showIcon} onToggle={toggleIcon}/>
      <Hero />
      <Features />
      <About />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
