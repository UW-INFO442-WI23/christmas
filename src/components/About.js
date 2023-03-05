'use strict';
/* This file contains the code for about us page. */

import React from 'react';
import Footer from "./Footer";
import aboutUs_image from "../img/about_us.png"
import "../index.css";
import { CardContainer } from './CardContainer';

/* Introducing our team such as name and bio */
const memberInfo = [
  {name: 'Claudine',
   desc: 'Senior in Informatics, focusing on Human-Computer Interaction. Loves alpacas, pandas, and every other derpy animal. Spends free time playing VALORANT, Rust, Genshin Impact, and more!'},
  {name: 'Aaron',
   desc: 'Senior in Informatics, who`s wants to be a software developer. Likes hanging out with friends, listening to music, and relaxing. Spends free time playing Nintendo Games, League of Legends, and more!'},
  {name: 'Brian',
   desc: 'Senior in Informatics, has the goal to become a UI/UX Researcher. Always listening to 21 Savage, playing basketball, and trying to lift the heaviest weight. Gaming life revolves around League of Legends, NBA 2k, and Madden!'},
  {name: 'John',
   desc: "Second-year undergraduate and senior in Informatics. Aspiring UI/UX researcher and designer, but thoroughly enjoys rocking out on a drum set, freestyle dancing, drawing, and cooking in his free time!"},
  {name: 'Takumi',
   desc: "Senior in Informatics, loves cycling, anime, and novels. Enjoys spending time with his friends, trying out new restaurants, and hitting up clubs. When it comes to music, his tastes are diverse, ranging from pop and EDM to classic rock bands like AC/DC and Led Zeppelin. "}
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
              <p className='col-xs-5 col-md-12 m-4 p-6'>
                Are you tired of feeling tired? Look no further than sleep&see!</p>
              <p className='col-xs-5 col-md-12 m-4 p-6'>
                Research shows that a consistent sleeping schedule, more knowledge on sleep hygiene, and established sleeping habits all lead to great overall sleep quality. Our platform empowers users to improve their sleep and well-being by tracking sleep and wake times, encouraging daily journaling, and providing dedicated resource pages and infographics backed by research.</p>
              <p className='col-xs-5 col-md-12 m-4 p-6'>
                Improving sleep quality is not easy, but with sleep&see, you can achieve the deep, restorative sleep your body needs to wake up feeling refreshed and rejuvenated. Take control of your sleep by exploring the other pages on our webpage!</p>
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
      </main>
      <Footer />
    </>
  );
};

export default About;