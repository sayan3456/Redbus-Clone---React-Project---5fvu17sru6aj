import React, { useState, useEffect,useRef } from "react";
import { Container, Form } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { BsArrowLeftRight } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import JourneyContext from "../context/JourneyContext";
import { useContext } from "react";
import { createPortal } from "react-dom";
import SuggestionModal from "./suggestionModal"

const Search = () => {
    const {from,to,setFrom,setTo}=useContext(JourneyContext);
    const [journeyDate, setJourneyDate] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [suggestionResult,setSuggestionResult] =useState(null);
    const [position, setPosition] = useState(null);
    const navigate=useNavigate();
    const fromInput = useRef(null);
    const toInput = useRef(null);

    async function fetchData (location,type) {
        setSuggestionResult(null)
        let url = "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses"
        let query = await fetch(url);
        let result = await query.json();
        if(location === "") return new Promise((resolve,reject) => resolve([]))
        let filteredResults = result.filter(items => {
            if(type === "from"){
                return items.source.includes(location) 
            }else{
                return items.destination.includes(location) 
            }
        }) 
        return new Promise((resolve,reject) => resolve(filteredResults));
    }
    // function handleFormChange() {

    // }
    // function suggestResults () {
        
    // }

    useEffect(() => {
        console.log([from,null]);
        const position = fromInput.current.getBoundingClientRect();
        setPosition(position)
        fetchData(from,"from").then(result => {
            setSuggestionResult(result);
            if(result.length > 0){
                setShowSuggestion(true);
            }else{
                setShowSuggestion(false);
            }
        })
    },[from])
    useEffect(() => {
        const position = toInput.current.getBoundingClientRect();
        setPosition(position)
        console.log([null,to]);
        fetchData(to,"to").then(result => {
            setSuggestionResult(result);
            if(result.length > 0){
                setShowSuggestion(true);
            }else{
                setShowSuggestion(false);
            }
        });
    },[to])
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
    const hideSuggestions = () => {
        setShowSuggestion(false);
    }
    useEffect(() => {
        window.addEventListener("scroll", hideSuggestions,false);
        fromInput.current.addEventListener("focusout", hideSuggestions,false);
        toInput.current.addEventListener("focusout", hideSuggestions,false);
        return () => {
            window.removeEventListener("scroll", hideSuggestions,false);
            fromInput.current.removeEventListener("focusout", hideSuggestions,false);
            toInput.current.removeEventListener("focusout", hideSuggestions,false);
        }
    },[])
    return (
        <Container>
            {showSuggestion && createPortal(<SuggestionModal setFrom={setFrom} setTo={setTo} position={position} result={suggestionResult} />, document.getElementById("protalRoot"))}
            <div className="m-5">
                <InputGroup className="mb-3 flex align-items-center">
                    <Form.Control ref={fromInput} aria-label="Text input with drop down button" placeholder="From" value={from} onChange={(e) => {
                        setFrom(e.target.value);
                    }} />
                    <BsArrowLeftRight onClick={interChangeFromTo} className="mx-3" />

                    <Form.Control ref={toInput} aria-label="Text input with drop down button" placeholder="To" value={to} onChange={(e) => {
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