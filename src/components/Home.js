import React from 'react';
import { Helmet } from 'react-helmet';
import monImage from '../images/aj.png';

const Home = () => {
  return (
    <section className="home-section" id="home">
      <Helmet>
        <title>Anicet Randrianambinina - Software / AI Developer</title>
        <meta name="description" content="Anicet Randrianambinina is a Software and AI Developer, motivated and dedicated in the field of Information Technology. Explore his portfolio." />
        <meta name="keywords" content="Software Developer, AI Developer, Web Development, Portfolio, Anicet Randrianambinina, Anicet, Anicet Jonhia, Anicet Jonhia Randrianambinina, Randrianambinina" />
        <meta property="og:title" content="Anicet Randrianambinina - Software / AI Developer" />
        <meta property="og:description" content="Explore the portfolio of Anicet Randrianambinina, a skilled and passionate Software and AI Developer." />
        <meta property="og:image" content={monImage} />
        <meta property="og:url" content="https://anicetjonhia.vercel.app/" />

      </Helmet>

      <ul className="header-social animate__animated animate__zoomIn animate__slow">
        <li>
          <a href="https://www.facebook.com/anicet.jonhia/?locale=fr_FR">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="https://github.com/AnicetJonhia">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/anicet-jonhia-randrianambinina-266628244/">
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>

      <div className="container ">
        <div className="row align-items-center">
          <div className="home-text animate__animated animate__fadeInLeft">
            <h4>Hello</h4>
            <h1>Anicet Randrianambinina</h1>
            <span>Software / AI Developer</span>
            <p>Competent, motivated and dedicated in the field of Information Technology.</p>
            <a href="https://cvdesignr.com/p/655471e67b6d9"
               className="btn btn-1 animate__animated animate__zoomIn animate__slow">
              Download CV
            </a>
          </div>
          <div className="home-image ">
            <div className="img-box ">
              <img className={"animate__animated animate__rotateInDownRight"} src={monImage} alt="Anicet Randrianambinina - Software and AI Developer" />
            </div>
          </div>
        </div>
      </div>

      <div className="header-hero-shape "></div>
    </section>
  );
};

export default Home;
