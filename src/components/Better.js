/* This file contains the code for "dream big, sleep better" */
'use strict';
import React from 'react';
import sleep_image1 from "../img/InfographicTips.png"
import sleep_image2 from "../img/InfographicPhone.png"
import Footer from "./Footer";
function Better() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content">
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Infographics from our team!</h1>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image1}alt='Infographic of 5 tips for sleep'></img>
                            <img className="individual-sleep-image mt-5" src={sleep_image2}alt='Infographic of screen usage and studying before sleep'></img>
                        </div>
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>YouTube Videos</h1>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-4 d-flex justify-content-center video-container">
                            <iframe className="video"src="https://www.youtube.com/embed/owMlmhvik_0"/>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-4 d-flex justify-content-center video-container">
                            <iframe className="video"src="https://www.youtube.com/embed/Aoaec1Npjoc"/>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-4 d-flex justify-content-center video-container">
                            <iframe className="video"src="https://www.youtube.com/embed/gedoSfZvBgE"/>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-5">
                            <h2>More Links</h2>
                            <div className='mt-4'>
                                <a href="https://www.healthline.com/health/sleep-disorders-prevention">
                                    <p>Healthline's Tips to Sleep Better</p>
                                </a>
                                <a href="https://health.clevelandclinic.org/is-eating-before-bed-bad-for-you/">
                                    <p>Cleveland Clinic's Article on Eating Before Bedtime</p>
                                </a>
                                <a href="https://health.clevelandclinic.org/how-to-fall-asleep-fast/">
                                    <p>Cleveland Clinic's Tips to Fall Asleep Fast</p>
                                </a>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <a href="https://docs.google.com/document/d/1FJ_o1PxaBvswqFaAFB2zztBmtLEb3RNsFuUcW87-Kyk/edit?usp=sharing">
                                <h2>Our Group's Research Document with Notes!</h2>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Better;