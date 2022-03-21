import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./components/contact/contact";
import AboutMeComponent from "./components/aboutMeComponent/AboutMeComponent";
import CvComponent from "./components/cvComponent/CvComponent";
function App() {
  return (
    <div>
      <Topbar></Topbar>
      <BrowserRouter>
      <Routes>
        <Route exact  path="/" element={<jobHistory />}/>
          <Route exact  path="about" element={<AboutMeComponent />} />
          <Route exact  path="contact" element={<Contact />} />
          <Route exact  path="cvComponent" element={<CvComponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
