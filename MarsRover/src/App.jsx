import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainPage from './pages/MainPage/MainPage';
import { Map } from './pages/Map/Map';
import AboutPage from './pages/AboutPage/AboutPAge';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/map" element={<Map />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
