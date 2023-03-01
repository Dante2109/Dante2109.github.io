
import './App.css';
import { useRef } from 'react';
import Navbar from './pages/Navbar';
import {Homepage} from './pages/Homepage';
import About from "./pages/About"
import { Box } from '@chakra-ui/react';
import { Projects } from './pages/Projects';
import TechSS from './pages/TechS&S';
import GitStats from './pages/GitStats';
import Contact from './pages/Contact';
function App() {
  const homepage=useRef(null);
  const about=useRef(null);
  const projects=useRef(null);
  const skills=useRef(null)
  const contact=useRef(null)
  const TechStack=useRef(null)
  const Gstats=useRef(null)
  return (
    <div style={{msOverflowX:"hidden"}} >
      <Box position="sticky" top={0} zIndex={1}>
      <Navbar h={homepage} a={about} p={projects} s={skills} c={contact} tt={TechStack} g={Gstats}/>
      </Box>
      <Homepage h={homepage}/>
      <About a={about}/>
      <TechSS t={TechStack}/>
      <Projects p={projects}/>
      <GitStats g={Gstats}/>
      <Contact c={contact}/>
    </div>
  );
}

export default App;
