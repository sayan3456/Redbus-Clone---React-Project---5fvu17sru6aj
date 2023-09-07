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
import "../styles/search.css"

const Search = () => {
    const {from,to,setFrom,setTo}=useContext(JourneyContext);
    const [journeyDate, setJourneyDate] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [suggestionResult,setSuggestionResult] =useState(null);
    const [position, setPosition] = useState(null);
    const [focusedInp, setfocusedInp] = useState("");
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
        setfocusedInp("from")
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
        setfocusedInp("to")
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
        setTimeout(()=> {
            setShowSuggestion(false);
        },500)
    }
    useEffect(() => {
        window.addEventListener("scroll", hideSuggestions,false);
        fromInput.current.addEventListener("focusout", hideSuggestions,false);
        toInput.current.addEventListener("focusout", hideSuggestions,false);
        return () => {
            window?.removeEventListener("scroll", hideSuggestions,false);
            fromInput?.current?.removeEventListener("focusout", hideSuggestions,false);
            toInput?.current?.removeEventListener("focusout", hideSuggestions,false);
        }
    },[])
    return (
        <div className="model">
        <Container >
            {showSuggestion && createPortal(<SuggestionModal focusedInp={focusedInp} setFrom={setFrom} setTo={setTo} position={position} result={suggestionResult} />, document.getElementById("protalRoot"))}
            <div className="m-5">
                <InputGroup className="mb-3 flex align-items-center map-sc">
                    <Form.Control className="map-fr" ref={fromInput} aria-label="Text input with drop down button" placeholder="From" value={from} onChange={(e) => {
                        setFrom(e.target.value);
                    }} />
                    <BsArrowLeftRight onClick={interChangeFromTo} className="mx-3 map" />

                    <Form.Control className="map-fr" ref={toInput} aria-label="Text input with drop down button" placeholder="To" value={to} onChange={(e) => {
                        setTo(e.target.value);
                    }} />

                    <Form.Control className="map-fr" type="date" aria-label="Text input with drop down button" placeholder="Date" value={journeyDate} onChange={(e) => {
                        setJourneyDate(e.target.value);
                    }} />
                    <Button className="map-fr" variant="danger" onClick={searchBuses}>Search Buses</Button>
                </InputGroup>
            </div>
        </Container>
        </div>
    );
};

export default Search;