import React from "react";
import { Image } from "react-bootstrap";
import img from "./redbus lead.png";
import "../styles/home.css";
const Home=()=>{
    return (
        <div> 
            <div>         
            <Image className="w-100" src="https://st.redbus.in/Images/INDOFFER/FESTIVE200/Hero01.png" />
            </div>  
            <div className="section-1">
                <h1 className="about">About Us</h1>
                <div className="section">
                <div className="left">
                   <img className="img-Icon" src={img}/>
                </div>
                <div className="right">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Nulla ratione quidem facere excepturi consequuntur fuga
                            architecto dicta maxime? Assumenda, illum? Facilis, illo
                            maxime ut totam recusandae omnis temporibus mollitia nemo?
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Nesciunt molestiae consectetur doloribus quis, sunt,
                            fugiat necessitatibus beatae a eum omnis placeat ullam,
                            in illum corrupti laborum unde? Autem, odit ullam!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto, laboriosam amet veniam exercitationem sint quisquam
                            reiciendis fugiat modi temporibus asperiores optio delectus
                            ratione et voluptatem est cupiditate repellat nesciunt quas.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Mollitia, ipsam cupiditate nulla nostrum esse sint quaerat
                            voluptate itaque ea dolores! Accusamus sit ullam eius ex
                            doloremque ipsum minus nihil facilis? Lorem ipsum dolor,
                            sit amet consectetur adipisicing elit. Adipisci quos quis
                            dicta quas dolorem, odit dignissimos reiciendis. Possimus
                            facere eos eaque vero? Corrupti fuga nisi earum minus
                            tenetur qui deserunt?<span>[Show More!]</span>
                        </p>
                </div>
                </div>
            </div>
            <div className="section-2">
                <h1 className="cupoun">Use Cupoun</h1>
                <div className="section-o">
                <div class="row">
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default Home;