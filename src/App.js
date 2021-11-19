import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyPlayer from './components/MyPlayer';
import MySidebar from './components/MySidebar'

function App() {
  return (
    <BrowserRouter>
      <MySidebar />
      <MyPlayer />
      <Routes>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
