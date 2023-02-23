import React from 'react';
import Footer from "./Footer";
import aboutUs_image from "../img/about_us.png"
import "../index.css";
import { CardContainer } from './CardContainer';


const memberInfo = [
  {name: 'Claudine',
   desc: 'Senior in Informatics, focusing on Human-Computer Interaction. Loves alpacas, pandas, and every other derpy animal. Spends free time playing VALORANT, Rust, Genshin Impact, and more!'},
  {name: 'Aaron',
   desc: 'insert text here'},
  {name: 'Brian',
   desc: 'insert text here'},
  {name: 'John',
   desc: "insert text here"},
  {name: 'Takumi',
   desc: "insert text here"}
]

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
              <p className='col-xs-5 col-md-12 m-4 p-6'>sleep&see is a comprehensive platform that helps users improve their sleep quality and overall wellbeing. sleep&see tracks sleep patterns and encourages daily journaling. users can also receive customized recommendations to optimize their sleep habits. with sleep&see, users can take control of their sleep and wake up feeling refreshed and rejuvenated.</p>
            </div>
            <div className="col-md-5 col-xs-12 d-flex justify-content-center">
                <img className="aboutUs-image" src={aboutUs_image} alt='team color'></img>
            </div>
          </section>
        </div>
        <div className="container">
          <section className="row header-content">
            <div className="col-xs-12 col-md-12 mt-5">
              <h1>meet the team</h1>
                <div className="col-xs-12 col-md-12 mt-5">
                  <CardContainer memberInfo={memberInfo}></CardContainer>
                </div>
            </div>
          </section>
        </div>
        <Footer />
      </main>
      <Footer />
    </>
  );
};

export default About;