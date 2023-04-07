import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { BsArrowLeftRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";
import { useContext } from "react";

const Search = () => {
    const {from,to,setFrom,setTo}=useContext(JourneyContext);
    const [journeyDate, setJourneyDate] = useState("");
    const navigate=useNavigate();

    async function fetchData (location) {
        let url = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
        let query = await fetch(url);
        let result = await query.json();
        let filteredResults = result.filter(items => {
            return items.source.includes(location) 
        }) 
        return filteredResults;
    }
    // function handleFormChange() {

    // }
    function interChangeFromTo() {
        const startPoint = from;
        const endPoint = to;
        setFrom(endPoint);
        setTo(startPoint);
    }

    function searchBuses()
    {
        // fetch()
        if(!from || !to || !journeyDate)
        {
            toast.error("All fields are mandatory");
        }
        else
        {
            navigate("/results");
        }
    }

    return (
        <Container>
            <div className="m-5">
                <InputGroup className="mb-3 flex align-items-center">
                    <Form.Control aria-label="Text input with drop down button" placeholder="From" value={from} onChange={(e) => {
                        setFrom(e.target.value);
                    }} />

                    <BsArrowLeftRight onClick={interChangeFromTo} className="mx-3" />

                    <Form.Control aria-label="Text input with drop down button" placeholder="To" value={to} onChange={(e) => {
                        setTo(e.target.value);
                    }} />

                    <Form.Control type="date" aria-label="Text input with drop down button" placeholder="Date" value={journeyDate} onChange={(e) => {
                        setJourneyDate(e.target.value);
                    }} />
                    <Button variant="danger" onClick={searchBuses}>Search Buses</Button>
                </InputGroup>
            </div>
        </Container>
    );
};

export default Search;