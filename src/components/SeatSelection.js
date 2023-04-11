import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { useState } from 'react';
import "../styles/seat.css";
import "../styles/App.css";
import { FaRupeeSign } from "react-icons/fa";
import {Button} from 'react-bootstrap';
import JourneyContext from '../context/JourneyContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SeatSelection = () => {
    const location = useLocation();
    // const [selectedSeat, setSelectedSeat] = useState([])
    const {from,to,setSelectedSeat,selectedSeat,setBusDetails}=useContext(JourneyContext);
    // console.log(location.state);
    setBusDetails(location.state);
    const navigate=useNavigate();
    // useEffect(
    //     ()=>{
    //         if(!from||!to)
    //             navigate("/");
    //     },[]
    // );
    function seatNum(i, j) {
        return 8 * i + j + 1;
    }

    return (
        <div>
            {/* <div className="d-flex justify-content-around w-100">
                    {["Departure", "Arrival", "Price"].map(
                        (criteria) => {
                            return <Button variant="danger" onClick={()=>{
                                sortResults(criteria);
                            }}>{criteria}</Button>
                        }
                    )}
                </div> */}
            {/* <h2>{JSON.stringify(location.state)}</h2> */}
            <div className='p-4 d-flex justify-content-between mt-3 align-items-center bus-da'>
                {/* {`Bus Name: ${location.state.busName}
                 | Ticket Price : ${location.state.ticketPrice} | Arival Time : ${location.state.arrivalTime}`} */}
            {/* <div className="d-flex flex-column"></div> */}
            <div className="d-flex flex-column">
            <div className="bus-d">Bus Name</div>
            <h4>{location.state.busName}</h4>
            </div>
            <div className="d-flex flex-column">
                <div className="bus-d">Departure</div>
                <h4 className='bus-n'>{location.state.departureTime}</h4>
            </div>
            <div className="d-flex flex-column">
                <div className="bus-d">Arrival</div>
                <h4 className='bus-n'>{location.state.arrivalTime}</h4>
            </div>
            <div className="d-flex flex-column"> 
            <div className="bus-d">Price</div>               
                <h4 className='bus-n'> {<FaRupeeSign />}{location.state.ticketPrice}</h4>
            </div>
            </div>
            <Container className='background'>
                {[1, 2, 3].map((seatRow, i) => {
                    return (
                        <div className={`row d-flex justify-content-center m-0 mw-100 p-4 mt-${Math.ceil(seatRow * 1.5)}`} key={seatRow}>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((seat, j) => {
                                return <div className= {`seat ${selectedSeat.includes(seatNum(i, j)) ? 'bg-success' : ""}`}
                                    key={8 * i + j}
                                    onClick={
                                        () => {
                                            const previousSeats = [...selectedSeat];
                                            if (selectedSeat.includes(seatNum(i, j))) {
                                                const allSeatsExceptCurrent = previousSeats.filter(
                                                    (currentSeat) => {
                                                        return currentSeat != seatNum(i, j);
                                                    }
                                                );
                                                setSelectedSeat(allSeatsExceptCurrent);
                                            }
                                            else
                                                setSelectedSeat([...previousSeats, seatNum(i, j)]);
                                        }
                                    }
                                >{8 * i + j + 1}</div>
                            })
                            }
                            
                        </div>
                        
                    );
                })
                }
                {selectedSeat.length? <Button onClick={() => navigate("/book-ticket")} variant="success">Book Tickets</Button>:""}
            </Container>
        </div>
    )
}

export default SeatSelection;