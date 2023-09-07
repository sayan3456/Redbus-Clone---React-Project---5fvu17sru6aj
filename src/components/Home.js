import React from "react";
// import { Image } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import {FaBusAlt} from 'react-icons/fa'
// import img from "./redbus lead.png";
import Img from "../image/webreferal.png";
import Img1 from '../image/Untitled design (2).jpg';
import "../styles/home.css";
const Home = () => {
  return (
    // <div className="model_section">
      <div className="section">
    <div className="row row-cols-1 row-cols-md-3 g-4 section_1">
      <div className="model_section">
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">Offer</h5>
              <p className="card-text"><b>PromoCode:-</b><i>#098958</i></p>
              <p className="card-description">Book a Bus tickit 90% off </p>
              <button type="submit" class="btn btn-primary">Apply Now!</button>
            </div>
            {/* <div className="card-footer">
              <small className="text-muted">Last update 3 min</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">Offer</h5>
              <p className="card-text"><b>PromoCode:-</b><i>#089958</i></p>

              <p className="card-description">Book a Bus tickit 40% off </p>
              <button type="submit" class="btn btn-primary">Apply Now!</button>
            </div>
            {/* <div className="card-footer">
              <small className="text-muted">Last update 3 min</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">Offer</h5>
              <p className="card-text"><b>PromoCode:-</b><i>#065958</i></p>
              <p className="card-description">Book a Bus tickit 60% off </p>
              <button type="submit" class="btn btn-primary">Apply Now!</button>
            </div>
            {/* <div className="card-footer">
              <small className="text-muted">Last update 3 min</small>
            </div> */}
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            {/* <img src="..." className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">Offer</h5>
              <p className="card-text"><b>PromoCode:-</b><i>#078958</i></p>
              <p className="card-description">Book a Bus tickit 50% off </p>
              <button type="submit" class="btn btn-primary">Apply Now!</button>
            </div>
            {/* <div className="card-footer">
              <small className="text-muted">Last update 3 min</small>
            </div> */}
          </div>
        </div>
      </div>
    </div>
    <img src={Img} alt="image"/>
    <div className="section_2">
    <div class="container">
  <div class="row">
    <div class="col">
      <h1 className="header_one">NOW, <b>GET MORE THAN JUST BUS</b> TICKETS WITH REDBUS!</h1>
      <h3 className="header_two">Bus Rental</h3>
      <p className="text_one">Rent Cabs, Tempo Travellers & Buses with best drivers</p>
      <ul className="list">
        <li className="list-style">
        Outstation
        </li>
        <li className="list-style">
        Hourly Rental
        </li>
        <li className="list-style">
        Airport Transfers
        </li>
      </ul>
      <button type="submit" className="button">Book Bus Rental</button>
    </div>
    <div class="col">
      <img className="image_1" src={Img1} alt="image1" />
    </div>
  </div>
    </div>
      </div>
    </div>
  );
};

export default Home;