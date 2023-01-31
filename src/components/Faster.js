import React from 'react';
import sleep_image2 from "../img/sleep-image2.jpg"
import Footer from "./Footer";
function Faster() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row">
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Sleep Faster?</h1>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="sleep-image mt-5" src={sleep_image2} alt='sleep2'></img>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-5">
                            <h2>Helpful Links</h2>
                            <div className='mt-4'>
                                <a href="https://www.healthline.com/health/healthy-sleep/fall-asleep-fast">
                                    <p>How to Fall Asleep in 10, 60, or 120 Seconds</p>
                                </a>
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