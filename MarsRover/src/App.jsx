import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './pages/MainPage/MainPage';
import { Map } from './pages/Map/Map';
import Control from './pages/RoverControl/Control';
import Navbar from './shared/Navbar/Navbar';
import SideBar from './widgets/SideBar/SideBar';
import { Footer } from './pages/MainPage/Footer/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<Map />} />
        <Route path="/control" element={<Control />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
