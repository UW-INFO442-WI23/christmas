/* This file contains the code for home page */
'use strict';
import React from 'react';
import graph_image from "../img/graph.png"
import calendar_image from "../img/calendar.png"
import Footer from "./Footer";
function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content align-items-center">
                        <div className="content col-xs-6 col-md-5 m-4 mt-5">
                            <h1>welcome to sleep&see:</h1>
                            <p className='intro'><span>a site made to record </span><br></br><span>and visualize your sleep</span></p>
                            <a href="/login">
                                <button className="link-button">let's start</button>
                            </a>
                        </div>
                        <div className="content col-xs-6 col-md-5 m-4 d-flex justify-content-center">
                            <img className="graph-image" src={graph_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-8 mt-8 d-flex justify-content-center">
                            <img className="calendar-image mt-5" src={calendar_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-4 mt-5">
                            <h1>your sleep is important</h1>
                            <p className='intro mt-5'>see notes and weekly averages of time slept across the month on when you hit the hay</p>
                            <a href="/login">
                                <button className="link-button">try it out</button>
                            </a>
                        </div>
                        <div className='mt-5'>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <h1>be a dreamer</h1>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>We all need sleep, but how do we make sure we get enough? Research states that 35% of students stay up past 3 A.M. at least once a week, which affects long-term focus, cognitive ability, and health. Sleep also influences stress levels and academic performance, being interconnected with our physical and mental well-being. </p>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>sleep&see is a small project aimed to track details about your sleep and record notes whenever you feel like it. Go at your own pace in learning more about your sleep habits across weeks and months of documenting your hours of sleep. Through research pages and resources, we hope to offer guided and comprehensive information for students like us to practice good sleep hygiene and improve our sleep quality!</p>
                            </div>
                        </div>        
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;