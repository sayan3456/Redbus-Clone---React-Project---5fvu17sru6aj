import React from "react";
import "../styles/book.css";
import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRupeeSign } from "react-icons/fa";
import JourneyContext from "../context/JourneyContext";
import pic from "./png-removebg-preview.png";
import Payment from "./payment/Payment";
// import Modal from 'react-modal';
function BookTickit() {
  const navigate = useNavigate();
  const { selectedSeat, setSelectedSeat, busDetails, setFrom, setTo } = useContext(JourneyContext);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  console.log(selectedSeat);
  const successMessageStyle = {
    position: "fixed",
    inset: "0px",
    background: "white",
    border: "10px solid green",
    borderRadius: "30px",
    width: "max-content",
    height: "300px",
    margin: "auto",
    padding: "10px",
  };
  const imag = {
    height: "120px",
    width: "170px",
  };
  // const location = useLocation();
  const ste = {
    width: "75px",
    height: "40px",
    borderRadius: "10px",
    fontFemily: "Lucida Console",
    fontSize: "25px",
    fontWidth: "400",
  }
  const lock = {
    width: "35px",
    height: "45px",
    color: "green",
  }



  return (
    <>
      {showSuccessModal && (
        <div style={successMessageStyle}>
          {/* <symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
          </symbol> */}
          <img style={imag} src={pic} alt="imgage" />
          <h1 ><strong><svg style={lock} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z" /></svg></strong>Your payment is successful!</h1>
          {/*className="alert alert-success"*/}
          {/*  */}
          <button style={ste}
            onClick={() => {
              setShowSuccessModal(false);
              setFrom("");
              setTo("");
              setSelectedSeat([]);
              navigate("/");
            }}
          >
            ok
          </button>
        </div>
      )}
      <div className="main">
        <h1 id="payheading">Showing Detalis</h1>
        <div id="detailsandpaycontainer">
          <div className="detailsandpay_details">
            <h2 className="pt">PAYMENT DETAILS</h2>
            <div className="details-item">
              <div className="detalis-left">BUS NAME</div>
              <div className="details-right">{busDetails.busName}</div>
            </div>
            <div className="details-item">
              <div className="detalis-left">SEAT NO.</div>
              <div className="details-right">{selectedSeat.join(",")}</div>
            </div>
            <div className="details-item">
              <div className="detalis-left">TOTAL FARE</div>
              <div className="details-right">
                {<FaRupeeSign />}
                {selectedSeat.reduce(
                  (acc, currentVal, index) =>
                    acc + Number(busDetails.ticketPrice),
                  0
                )}
              </div>
            </div>
            <button className="button-3" onClick={()=>navigate("/Payment")} type="submit">Payment Page</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default BookTickit;
