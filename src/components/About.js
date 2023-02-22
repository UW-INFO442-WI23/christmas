import React from 'react';
import Footer from "./Footer";
import aboutUs_image from "../img/about_us.png"
import "../index.css";
const About = () => {
  return (
    <>
      <main>
        <div className="container">
          <section className="row header-content">
            <div className="col-xs-12 col-md-12 mt-5">
              <h1>about us</h1>
            </div>
            <div className="content col-xs-5 col-md-6 m-2 p-6">
              <p className='col-xs-5 col-md-12 m-4 p-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="content col-xs-5 col-md-6 m-2">
              <p className='col-xs-5 col-md-12 m-4 p-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="col-md-5 col-xs-12 d-flex justify-content-center">
                <img className="aboutUs-image" src={aboutUs_image} alt='team color'></img>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default About;