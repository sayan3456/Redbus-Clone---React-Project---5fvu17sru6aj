import React, { useContext } from "react";
import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useState } from "react";
import BusResult from "./BusResult";
import { Button } from "react-bootstrap";
import JourneyContext from "../context/JourneyContext";
import { useNavigate } from "react-router-dom";
const SearchResult = () => {
    const [buses, setBuses] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const {from,to}=useContext(JourneyContext);
    const navigate=useNavigate();

    useEffect(
        ()=>{
            if(!from||!to)
            {
                navigate("/");
            }
        },[]
    );
    async function fetchBuses() {
        setIsLoading(true);
        const response = await fetch(`https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`);
        const allBuses = await response.json();
        setIsLoading(false);
        setBuses(allBuses);
        console.log(allBuses);
    }
    useEffect(
        () => {
           
            fetchBuses();
        }, [from,to]
    );
   if (isLoading) {
        return <Spinner animation="border" variant="danger" />;
    }

    function sortResults(criteria)
    {
        if(criteria==="Price")
        {   const busesCopy=[...buses];
            const sortedBuses=busesCopy.sort((a,b)=>{
                if(Number(a.ticketPrice)<Number(b.ticketPrice))
                    return -1;
                return 1;
            });
            setBuses(sortedBuses);
        }
    }
    return (
        <div className="bg-danger p-4 d-flex flex-column">
            <div className="bg-white p-3 d-flex w-100 align-self-center">
                <h4 className="w-25">Sort By</h4>
                <div className="d-flex justify-content-around w-75">
                    {["Departure", "Arrival", "Price"].map(
                        (criteria,index) => {
                            return <Button key={'btn'+index} variant="danger" onClick={()=>{
                                sortResults(criteria);
                            }}>{criteria}</Button>
                        }
                    )}
                </div>
            </div>
            {buses.map((bus,index) => {
                return <BusResult key={'bus'+index} bus={bus} />
            }
            )}
        </div>
    );
};

export default SearchResult;

/*
https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses
*/