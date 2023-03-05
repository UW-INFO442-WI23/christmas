/* This file contains the code for "get cozy and comfy" in resources page */

'use strict';
import React from 'react';
import sleep_image2 from "../img/sleep-image2.jpg"
import Footer from "./Footer";
function Faster() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content">
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Waking up in the middle of the night?</h1>
                        </div>
                        <div className="col-xs-12 col-md-12 mt-5">
                            <p>Or maybe feeling tired despite getting a decent chunk of sleep? Let's talk about how deep sleep works.</p>
                            <p>The sleep cycle can be separated into two parts, NREM (non rapid eye movement) and REM (rapid eye movement) sleep, which goes through stages throughout the night. </p>
                            <p>Your mood, body, and sleep environment are just important as how much sleep you're getting every night. Your room should be dim with indirect lighting, being both quiet and attractive to sleep in. A cooler ambient temperature also lower your heart rate which leaves REM sleep uninterrupted (Okamoto-Mizuno & Mizuno, 2012).</p>
                        </div>
                        <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                            <p className='intro'>Give some of these relaxation methods a try!</p>
                        </div>
                        <ul>
                            <li>Diaphragmatic breathing:</li>
                            
                            <li></li>
                            <li></li>
                        </ul>
                        <div className="col-xs-12 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image2} alt='sleep2'></img>
                        </div>
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h2>Helpful Links</h2>
                            <div className='mt-4'>
                                <a href="https://www.sleepfoundation.org/sleep-hygiene/how-to-fall-asleep-fast">
                                    <p>How to Fall Asleep Fast</p>
                                </a>
                                <a href="https://health.clevelandclinic.org/how-to-fall-asleep-fast/">
                                    <p>Here’s how to start snoozing more quickly at night</p>
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Faster;