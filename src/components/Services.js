// Services.js
import React from 'react';
import ibonia from "../images/ibonia.png"
import lcom from "../images/lcom.jpeg"

const Services = () => {
  return (
    <section className="service-section section-padding" id="services">
        <div className="container">
            <div className="row">
                <div className="section-title text-align">
                    <h5 className="sub-title">Experiences</h5>
                    <h3 className="main-title">Acquired</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
            
                </div>
            </div>
            <div className="row">
                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img  src={ibonia} alt="" />
                        </div>
                        <h3>Professional discovery course</h3>
                        <h4>Ibonia, Jully 2022</h4>
                        <p>Observation</p>
                        <p>Understanding the agile method</p>
                    </div>
                </div>
                
                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={lcom} alt="" />
                        </div>
                        <h3>Internship</h3>
                        <h4>LCom Corporation, October to November 2022</h4>
                        <p>Showcase site</p>
                        <p>Introducing to OOP in PHP</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={lcom} alt="" />
                        </div>
                        <h3>Internship</h3>
                        <h4>LCom Corporation, September to November 2023</h4>
                        <p>UX / UI Design</p>
                        <p>Getting to know ReactJs</p>
                    </div>
                </div>
             </div>
        </div>
    </section>
  );
};

export default Services;
