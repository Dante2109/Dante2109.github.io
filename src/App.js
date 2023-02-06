
import './App.css';
import Navbar from './pages/Navbar';
import {Homepage} from './pages/Homepage';
import About from "./pages/About"
import { Projects } from './pages/Projects';
function App() {

  return (
    <div style={{overflow:"hidden"}} >
      <Navbar/>
      <Homepage/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
