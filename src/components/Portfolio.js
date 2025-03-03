// Portfolio.js
import React from 'react';

import tobib from "../images/tobib.png"
import agridi from "../images/agridi.png"

const Portfolio = () => {
  return (
    <section className="portfolio section-padding" id="portfolio">
        <div className="container">
            <div className="row">
            <div className="section-title text-align">
                <h5 className="sub-title">Portfolio</h5>
                <h3 className="main-title">My Latest Personal Work</h3>
                <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
            <div className="row">
                <div className="portfolio-filter">
                    <button type="button" className="active" data-filter="all">All</button>
                    <button type="button" data-filter="2023">2023</button>
                    <button type="button" data-filter="2024">2024</button>
                </div>
            </div>
            <div className='row'>
                <div className="portfolio-item" data-category="2023">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img src={agridi} alt="Agriculture Digitization" />
                        </div>
                        <div className="portfolio-info">
                            <h4>Bridging Producers and Consumers through Agri-Tech App</h4>

                            <div className="icon">
                            <i className="fa fa-fire"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="2024">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img src={tobib} alt="TobIb AI Medical Assistant" />
                        </div>
                        <div className="portfolio-info">
                            <h4>TobIb: AI as a Medical Assistant</h4>

                            <div className="icon">
                                <i className="fa fa-fire"></i>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </section>
  );
};

export default Portfolio;
