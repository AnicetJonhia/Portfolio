// Home.js
import React from 'react';
import monImage from '../images/aj.png'
const Home = () => {
  return (
    <section className="home-section" id="home">
        <ul className="header-social">
            <li><a href="https://www.facebook.com/anicet.jonhia/?locale=fr_FR"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="https://github.com/AnicetJonhia"><i className="fab fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/anicet-jonhia-randrianambinina-266628244/"><i className="fab fa-linkedin"></i></a></li>
         
            {/* ...  ... */}
        </ul>
      <div className="container">
        <div className="row align-items-center">
            <div className="home-text">
                <h4>Hello</h4>
                <h1 >Anicet Randrianambinina</h1>
                <span>Web / Mobile Developer</span>
                <p>Competent, motivated and dedicated in the field of Information Technology.</p>
                    <a href="https://cvdesignr.com/p/655471e67b6d9" className="btn btn-1">Dowload CV</a>
            </div>
            <div className="home-image">
                <div className="img-box">
                    <img src={monImage} alt="" />
                </div>
            </div>

          {/* ... le reste du code de la section Home ... */}
        </div>
      </div>
      <div className="header-hero-shape"></div>
    </section>
  );
};

export default Home;
