import React from 'react';
import sleep_image1 from "../img/sleep-image1.jpg";
import Footer from "./Footer";
function Healtheir() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row">
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Sleep Healthier?</h1>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="sleep-image mt-5" src={sleep_image1} alt='sleep1'></img>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-5">
                            <h2>Helpful Links</h2>
                            <div className='mt-4'>
                                <a href="https://www.sleepfoundation.org/sleep-hygiene/what-is-healthy-sleep">
                                    <p>What is healthy sleep?</p>
                                </a>
                                <a href="https://www.mayoclinic.org/healthy-lifestyle/adult-health/in-depth/sleep/art-20048379">
                                    <p>Healthy lifestyle, Sleep tips: 6 steps to better sleep</p>
                                </a>
                                <a href="https://www.sleepfoundation.org/sleep-hygiene/healthy-sleep-tips">
                                    <p>Healthy Sleep Tips</p>
                                </a>
                                <a href="https://www.healthline.com/health/healthy-sleep">
                                    <p>What Do You Want to Know About Healthy Sleep? by Healthline</p>
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

export default Healtheir;