// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container">
        <div className="row">
            <div className="section-title text-align">
                <h5 className="sub-title">Contact</h5>
                    <h3 className="main-title">Get in touch</h3>
                    <ul className="line">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                {/* ... le reste du code de la section Contact ... */}
            </div>
        </div>
        <div className="row">
            <div className="contact-item">
                <div className="contact-item-inner">
                    <i className="fas fa-phone"></i>
                    <span>Phone</span>
                    <p>+261344822412</p>
                </div>
            </div>
            
            <div className="contact-item">
                <div className="contact-item-inner">
                    <i className="fas fa-envelope"></i>
                    <span>Email</span>
                    <p>anicet.randrianambinina@esti.mg</p>
                </div>
            </div>

            <div className="contact-item">
                <div className="contact-item-inner">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Address</span>
                    <p> Antananarivo, 101, Madagascar</p>
                </div>
            </div>


          {/* ... le reste du code de la section Contact ... */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
