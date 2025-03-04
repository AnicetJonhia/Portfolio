import React from "react";
import monImage from "../images/programmer.jpg";

const About = () => {
    return(
        <section className="about-section section-padding" id="about">
          <div className="container">
              <div className="row align-items-center justify-content-center">
                  <div className="about-image">
                      <div className="img-box 2">
                          <img src={monImage} alt="Anicet" />
                      </div>
                  </div>
                  <div className="about-content">
                      <div className="section-title">
                          <h5 className="sub-title">About</h5>
                          <h3 className="main-title">Why You Should Hire Me?</h3>
                          <ul className="line">
                              <li></li>
                              <li></li>
                              <li></li>
                          </ul>
                      </div>
                      <p>
                      My name is Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA.
                      <br />
                       I come from Fianarantsoa, Madagascar.
                       <br />
                       🤲 I am currently in the third year of my degree, pursuing an IT integration and development course at the “Ecole Supérieure des Technologies de l'Information (ESTI)” in Antananarivo, Madagascar.🎓
                      </p>
                          <div className="about-skills">
                              <div className="skill-item">
                                  <div className="skill-header">
                                      <h6 className="skill-title">Node.js, React, Next.js, React Native</h6>
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
                                    <h6 className="skill-title">Python, Django</h6>
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
                                    <h6 className="skill-title">SQL, NoSQL</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">55</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="55%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <h6 className="skill-title">UI/UX Design</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">50</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="50%"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="skill-item">
                                <div className="skill-header">
                                    <h6 className="skill-title">Artificial Intelligence (AI)</h6>
                                    <div className="skill-percentage">
                                        <p><span className="counter">50</span>%</p>
                                    </div>
                                </div>
                                <div className="skill-bar">
                                    <div className="bar-inner">
                                        <div className="bar progress-line" data-progress="30%"></div>
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
