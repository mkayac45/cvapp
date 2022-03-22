import logo from "./logo.svg";
import "./App.css";
import Topbar from "./components/topbar/topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CvComponent from "./components/cvComponent/CvComponent";
function App() {
  return (
    <div>
      <Topbar></Topbar>
      <BrowserRouter>
      <Routes>
        <Route exact  path="/" element={<jobHistory />}/>
          <Route exact  path="cvComponent" element={<CvComponent />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
