// Portfolio.js
import React from 'react';
import polution from "../images/polution.jpeg"
import library from "../images/library.jpeg"
import school from "../images/school.jpeg"

const Portfolio = () => {
  return (
    <section className="portfolio section-padding" id="portfolio">
        <div className="container">
            <div className="row">
            <div className="section-title text-align">
                <h5 className="sub-title">Portfolio</h5>
                <h3 className="main-title">My latest work</h3>
                <ul className="line">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                {/* ... le reste du code de la section Portfolio ... */}
            </div>
            </div>
            <div className="row">
                <div className="portfolio-filter">
                    <button type="button" className="active" data-filter="all">All</button>
                    <button type="button" data-filter="2022">2022</button>
                    <button type="button" data-filter="2023">2023</button>
                </div>
            {/* ... le reste du code de la section Portfolio ... */}
            </div>
            <div className='row'>
                <div className="portfolio-item" data-category="2022">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img src={polution} alt="" />                       </div>
                        <div className="portfolio-info">
                            <h4>Digital Versus Pollution</h4>
                            

                            <div className="icon">
                                <i className="fa fa-fire"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="2023">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img src={school} alt="" />                
                        </div>
                        <div className="portfolio-info">
                            <h4>School Management</h4>
                            <div className="icon">
                                <i className="fa fa-fire"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio-item" data-category="2023">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img src={library} alt="" />
                        </div>
                        <div className="portfolio-info">
                            <h4>Loan Management in a library</h4>
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
