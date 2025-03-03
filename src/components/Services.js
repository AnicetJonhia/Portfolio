// Services.js
import React from 'react';
import ibonia from "../images/ibonia.png"
import lcom from "../images/lcom.jpeg"
import nextrocket from "../images/next-rocket.png"
import futurmap from "../images/futurmap.png"

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
                            <img src={ibonia} alt=""/>
                        </div>
                        <h3>Professional Discovery Course</h3>
                        <h4>Ibonia, Madagascar - July 2022</h4>
                        <p>Observation</p>
                        <p>Understanding the Agile Method</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={lcom} alt=""/>
                        </div>
                        <h3>Internship</h3>
                        <h4>LCom Corporation, Madagascar - October to November 2022</h4>
                        <p>Showcase Site</p>
                        <p>Introduction to OOP in PHP</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={lcom} alt=""/>
                        </div>
                        <h3>Internship</h3>
                        <h4>LCom Corporation, Madagascar - September to November 2023</h4>
                        <p>UX / UI Design</p>
                        <p>Getting to Know ReactJs</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={nextrocket} alt=""/>
                        </div>
                        <h3>Freelance JavaScript Developer</h3>
                        <h4>NextRocket, Dubai - January 2024</h4>
                        <p>Automation via Web Scraping</p>
                    </div>
                </div>

                <div className="service-item">
                    <div className="service-item-inner">
                        <div className="icon">
                            <img src={futurmap} alt=""/>
                        </div>
                        <h3>Python Developer</h3>
                        <h4>Futurmap, Madagascar - Since March 2024</h4>
                        <p>Developing and maintaining scripts and extensions with PyRevit</p>
                        <p>Automating tasks in Autodesk Revit</p>
                    </div>
                </div>


            </div>
        </div>
    </section>
  );
};

export default Services;
