// import Navbar from "./components/Navbar";
// import Home2 from "./pages/Home2";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import {
  BrowserRouter as Router ,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Media from "./pages/Media";
// import Home2 from "./pages/Home2";


function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home2/>}></Route>

        <Route path="/product/:id" element={<Home/>}></Route>

        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/media" element={<Media/>}></Route>
      </Routes>

    </Router>
  );
}

export default App;
