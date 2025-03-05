// Portfolio.js
import React from 'react';

import tobib from "../images/tobib.png"
import agridi from "../images/agridi.png"
import {useInView} from "react-intersection-observer";

const Portfolio = () => {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2 });
    const [ref_filter, inViewFilter] = useInView({triggerOnce: true, threshold: 0.2 });
    const [ref_item, inViewItem] = useInView({triggerOnce: true, threshold: 0.2 });
  return (
    <section ref={ref} className="portfolio section-padding" id="portfolio">
        <div className="container">
            <div className="row">
            <div className="section-title text-align">
                <h5 className={`sub-title animate__animated ${inView ? "animate__fadeInLeft animate__slow" : ""}`}>Portfolio</h5>
                <h3 className={`main-title animate__animated ${inView ? "animate__fadeInRight animate__slow" : ""}`}>My Latest Personal Work</h3>
                <ul  className={`line animate__animated ${inView ? "animate__zoomInRight animate__slow" : ""}`}>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            </div>
            <div className="row">
                <div ref={ref_filter} className="portfolio-filter">
                    <button type="button" className={` active animate__animated ${inViewFilter ? "animate__zoomInLeft" +
                        " animate__slow" : ""}`}  data-filter="all">All</button>
                    <button type="button" data-filter="2023" className={` animate__animated ${inViewFilter ? "animate__zoomInUp animate__slow" : ""}`}>2023</button>
                    <button type="button" data-filter="2024" className={` animate__animated ${inViewFilter ? "animate__zoomInRight animate__slow" : ""}`}>2024</button>
                </div>
            </div>
            <div ref={ref_item} className='row'>
                <div  className={` portfolio-item animate__animated ${inViewItem ? "animate__fadeInBottomLeft" +
                    " animate__slow" : ""}`} data-category="2023">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img  src={agridi} alt="Agriculture Digitization" />
                        </div>
                        <div className="portfolio-info">
                            <h4>Bridging Producers and Consumers through Agri-Tech App</h4>

                            <div className="icon">
                            <i className="fa fa-fire"></i>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={` portfolio-item animate__animated ${inViewItem ? "animate__fadeInBottomRight" +
                    " animate__slow" : ""}`} data-category="2024">
                    <div className="portfolio-item-inner">
                        <div className="portfolio-img">
                            <img  src={tobib} alt="TobIb AI Medical Assistant" />
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
