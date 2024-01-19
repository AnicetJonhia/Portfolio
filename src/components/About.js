import React from "react";
import monImage from "../images/about.jpeg"

const About = () => {
    return(
        <section className="about-section section-padding" id="about">
          <div className="container">
              <div className="row align-items-center justify-content-center">
                  <div className="about-image">
                      <div className="img-box 2">
                          {/* <img src="images/about_hero.png" alt=""> */}
                          <img src={monImage} alt="" />
                          {/* <div className="about-shape"></div> */}
                      </div>
                  </div>
                  <div className="about-content">
                      <div className="section-title">
                          <h5 className="sub-title">About</h5>
                          <h3 className="main-title">Why You Hire Me?</h3>
                          <ul className="line">
                              <li></li>
                              <li></li>
                              <li></li>
                          </ul>
                      </div> 
                      <p>
                      My name is Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA.
                      <br />
                       I come from Fianarantsoa , Madagascar. 
                       <br />
                       🤲 I am in the second year of my degree pursuing the IT integration and development course at the “Ecole Supérieure des Technologies de l'Information (ESTI) ” in Antananarivo, Madagascar.🎓
                      </p>
                          <div className="about-skills">
                              <div className="skill-item">
                                  <div className="skill-header">
                                      <h6 className="skill-title">HTML, CSS, Tailwind , Bootstrap</h6>
                                      <div className="skill-percentage">
                                          <p><span className="counter">60</span>%</p>
                                      </div>
                                  </div>
                                  <div className="skill-bar">
                                      <div className="bar-inner">
                                          <div className="bar progress-line" data-progress="60%"></div>
                                      </div>
                                  </div>
                              </div> 
                              <div className="skill-item">
                                <div className="skill-header">
                                    <h6 className="skill-title">ReactJs, Laravel, Django, Flutter</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">45</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="45%"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="skill-item">
                                <div className="skill-header">
                                    <h6 className="skill-title">SQL</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">60</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="60%"></div>
                                    </div>
                                </div>
                            </div> 
                            <div className="skill-item">
                                <div className="skill-header">
                                    <h6 className="skill-title">UI/UX design</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">65</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="65%"></div>
                                    </div>
                                </div>
                            </div> 
                          </div>
                  </div>
              </div>
          </div>
      </section>
    );
}

export default About;