import React from 'react';
import sleep_image1 from "../img/sleep-image1.jpg";
import Footer from "./Footer";
function Healtheir() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content">
                        <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                            <p className='intro'>People spend about a third of their life asleep, yet:</p>
                        </div>
                        <ul>
                            <li><b>72.7%</b> of U.S. young adults experience short sleep durations, getting less than 7 hours of sleep on average</li>
                            <li><b>39.2%</b> of university students reported durations of less than 6 hours of sleep</li>
                            <li>More than <b>half of college students</b> suffer from poor sleep quality</li>
                        </ul>
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>What's the big deal?</h1>
                            <p>Why does it matter?</p>
                            <table id="info">
                                <tr>
                                    <th>Consequences of poor sleep health</th>
                                    <th>Benefits of improved sleep health</th>
                                </tr>
                                <tr>
                                    <td>Poor health outcomes such as high stress, fatigue, difficulty concentrating</td>
                                    <td>Consistent sleep patterns that lead to little or no problem with sleep or daytime alertness</td>
                                </tr>
                                <tr>
                                    <td>Worse task performance during high working-memory loads and impaired cognitive function</td>
                                    <td>Increased memory consolidation where information and knowledge can be adapted and retained</td>
                                </tr>
                                <tr>
                                    <td>Lower neuronal responses and resources to perform tasks over longer periods of time</td>
                                    <td>Stronger neuron response and cognitive activations for tasks</td>
                                </tr>
                                <tr>
                                    <td>Associated with a hyper-reactive brain state</td>
                                    <td>Restores stamina and function of the body and mind</td>
                                </tr>
                            </table>
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