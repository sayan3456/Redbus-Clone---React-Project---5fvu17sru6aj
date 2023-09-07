// import logo from './logo.svg';
import './App.css';
// import RedBusNavbar from './components/Navbar';
// import Search from './components/Search';
// import { Toaster } from 'react-hot-toast';
// import Background from './image/Untitled design (1).jpg'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SearchResult from './components/SearchResult';
import Home from './components/Home';
import JourneyContext from './context/JourneyContext';
import { Component, useState } from 'react';
import SeatSelection from './components/SeatSelection';
import Journey from './components/Journey';
import Login from './components/Login';
import BookTickit from './components/BookTickit';
import showTickit from './components/showTickit';
// import PaymentMethod from './components/payment/Payment';

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

          <Route path="/" element={<Journey Component={Home} />}/>
          <Route path="/login" element={<Login />} />
          <Route path="/show-ticket" element={<Journey Component={showTickit} />} />
          <Route path="/results" element={<Journey Component={SearchResult} />} />
          <Route path="/book-seats" element={<Journey Component={SeatSelection }/>} />
          <Route path="/book-ticket" element={<Journey Component={BookTickit}  />} />
          {/* <Route path='/Payment' element={<Journey Component={PaymentMethod}/>}/> */}
        </Routes>
        
      </BrowserRouter>
      </JourneyContext.Provider>
      {/* <Payment/> */}
    </div>
  );
}

export default App;
