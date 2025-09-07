import Navbar from "./components/navbar"
import "./App.css"
import Details from "./pages/details";
import Home from "./pages/home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
