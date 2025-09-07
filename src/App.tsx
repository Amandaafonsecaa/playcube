import Navbar from "./components/navbar"
import "./App.css"
import Details from "./pages/details";
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
