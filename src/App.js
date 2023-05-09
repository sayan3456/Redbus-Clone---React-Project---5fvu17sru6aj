import logo from './logo.svg';
import './App.css';
import RedBusNavbar from './components/Navbar';
import Search from './components/Search';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResult from './components/SearchResult';
import Home from './components/Home';
import JourneyContext from './context/JourneyContext';
import { useState } from 'react';
import SeatSelection from './components/SeatSelection';
import Journey from './components/Journey';
import Login from './components/Login';
import BookTickit from './components/BookTickit';
import showTickit from './components/showTickit';

function App() {
  const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [selectedSeat, setSelectedSeat] = useState([])
    const [busDetails,setBusDetails]= useState({});
  return (
    <div className="App">
      <JourneyContext.Provider value={{
        from:from,
        to:to,
        setFrom:setFrom,
        setTo:setTo,
        setSelectedSeat:setSelectedSeat,
        selectedSeat:selectedSeat,
        busDetails:busDetails,
        setBusDetails:setBusDetails
      }}>


      <BrowserRouter>
        
        <Routes>

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Journey Component={Home} />} />
          <Route path="/show-ticket" element={<Journey Component={showTickit} />} />
          <Route path="/results" element={<Journey Component={SearchResult} />} />
          <Route path="/book-seats" element={<Journey Component={SeatSelection }/>} />
          <Route path="/book-ticket" element={<Journey Component={BookTickit}  />} />
        </Routes>
        
      </BrowserRouter>
      </JourneyContext.Provider>
    </div>
  );
}

export default App;
