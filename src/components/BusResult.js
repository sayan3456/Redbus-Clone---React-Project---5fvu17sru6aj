import React from "react";
import { FaRupeeSign } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"
const BusResult=({bus})=>{
    const navigate=useNavigate();
    return (
        <div className=" p-4 d-flex justify-content-between mt-3 align-items-center bus-de "
        style={{cursor:"pointer"}}
        onClick={()=>{
            navigate("/book-seats",{
                replace: true,
                state: bus
              });
        }}
        >
            <h4>{bus.busName}</h4>
            <div className="d-flex flex-column">
                <div>Departure</div>
                <h4>{bus.departureTime}</h4>
            </div>
            <div className="d-flex flex-column">
                <div>Arrival</div>
                <h4>{bus.arrivalTime}</h4>
            </div>
            <div className="d-flex flex-column">
                <div>Price</div>                
                <h4>{<FaRupeeSign />} {bus.ticketPrice}  </h4>
            </div>
            
        </div> 
    );

};
export default BusResult;