// Contact.js
import React from 'react';
import {useInView} from "react-intersection-observer";

const Contact = () => {

        const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2 });
 const [ref_item, inViewItem] = useInView({triggerOnce: true, threshold: 0.2 });
  return (
    <section ref={ref} className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
            <div className="section-title text-align">
                <h5 className={`sub-title animate__animated ${inView ? "animate__fadeInLeft animate__slow" : ""}`}>Contact</h5>
                    <h3 className={`main-title animate__animated ${inView ? "animate__fadeInRight animate__slow" : ""}`}>Get in touch</h3>
                    <ul className={`line animate__animated ${inView ? "animate__zoomInRight animate__slow" : ""}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

            </div>
        </div>
        <div ref={ref_item} className="row">
            <div className={`contact-item animate__animated ${inViewItem ? "animate__zoomInLeft" +
                " animate__slow" : ""}`}>
                <div className="contact-item-inner">
                    <i className="fas fa-phone animate__animated animate__infinite animate__pulse"></i>
                    <span>Phone</span>
                    <p>+261344822412</p>
                </div>
            </div>
            
            <div className={`contact-item animate__animated ${inViewItem ? "animate__zoomInUp" +
                " animate__slow" : ""}`}>
                <div className="contact-item-inner">
                    <i className="fas fa-envelope animate__animated animate__infinite animate__pulse"></i>
                    <span>Email</span>
                    <p>anicet.randrianambinina@esti.mg</p>
                </div>
            </div>

            <div className={`contact-item animate__animated ${inViewItem ? "animate__zoomInRight" +
                " animate__slow" : ""}`}>
                <div className="contact-item-inner">
                    <i className="fas fa-map-marker-alt animate__animated animate__infinite animate__pulse"></i>
                    <span>Address</span>
                    <p> Antananarivo, 101, Madagascar</p>
                </div>
            </div>



        </div>
      </div>
    </section>
  );
};

export default Contact;
