import React from "react";
import monImage from "../images/programmer.jpg";
import { useInView } from "react-intersection-observer";

const About = () => {

    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.2 });
    const [ref_p, inViewP] = useInView({triggerOnce: true, threshold: 0.2 });
    const [ref_skill, inViewSkill] = useInView({triggerOnce: true, threshold: 0.5 });

    return(
        <section ref={ref} className="about-section section-padding" id="about">
          <div className="container">
              <div className="row align-items-center justify-content-center">
                  <div className="about-image">
                      <div className="img-box 2 ">
                          <img src={monImage}
                                    className={`animate__animated ${inView ? "animate__fadeInTopLeft animate__slow" : ""}`}
                               alt="Anicet" />
                      </div>
                  </div>
                  <div className="about-content  ">
                      <div className="section-title">
                          <h5 className={`sub-title animate__animated ${inView ? "animate__fadeInLeft animate__slow" : ""}`}>About</h5>
                          <h3  className={`main-title animate__animated ${inView ? "animate__fadeInRight animate__slow" : ""}`}>Why You Should Hire Me?</h3>
                          <ul className={`line animate__animated ${inView ? "animate__zoomInRight animate__slow" : ""}`}>
                              <li></li>
                              <li></li>
                              <li></li>
                          </ul>
                      </div>
                      <p ref={ref_p} className={`animate__animated ${inViewP ? "animate__fadeInUp animate__slow" : ""}`}>
                      My name is Tokiniaina Jean Anicet Jonhia RANDRIANAMBININA.
                      <br />
                       I come from Fianarantsoa, Madagascar.
                       <br />
                       🤲 I am currently in the third year of my degree, pursuing an IT integration and development course at the “Ecole Supérieure des Technologies de l'Information (ESTI)” in Antananarivo, Madagascar.🎓
                      </p>
                          <div ref={ref_skill}  className={` about-skills animate__animated ${inViewSkill ? "animate__fadeInUp animate__slow" : ""}`}>
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
