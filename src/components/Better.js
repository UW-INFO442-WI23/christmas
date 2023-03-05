/* This file contains the code for "dream big, sleep better" */
'use strict';
import React from 'react';
import sleep_image4 from "../img/sleep-image3.jpg"
import Footer from "./Footer";
function Better() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content">
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Sleep Better (Quality of sleep)?</h1>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image4} alt='sleep2'></img>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-5">
                            <h2>Helpful Links</h2>
                            <div className='mt-4'>
                                <a href="https://www.healthline.com/nutrition/17-tips-to-sleep-better">
                                    <p>17 Proven Tips to Sleep Better at Night (Evidence based)</p>
                                </a>
                                <a href="https://www.health.harvard.edu/newsletter_article/8-secrets-to-a-good-nights-sleep">
                                    <p>8 secrets to a good night's sleep by Harvard Health Publishing</p>
                                </a>
                                <a href="https://www.insider.com/guides/health/how-to-sleep-better">
                                    <p>25 science-backed tips for how to sleep better</p>
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

export default Better;