/* This file contains the code for "get cozy and comfy" in resources page */

'use strict';
import React from 'react';
import sleep_image1 from "../img/InfographicCycle.png"
import sleep_image2 from "../img/info-page2-image.png"
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
                            <p>Or still feeling tired despite getting a decent chunk of sleep? Let's talk about how deep sleep works.</p>
                            <p>The sleep cycle can be separated into two parts, NREM (non rapid eye movement) and REM (rapid eye movement) sleep, which goes through stages throughout the night. While most of your sleep consists of NREM sleep, REM is just as important to ensure restfulness and no sleep disturbances. <b>The longer you sleep, the more NREM-REM cycles you go through that gets progressively longer during the night.</b></p>
                            <p>In fact, your sleep cycles between NREM and REM sleep, 75-80% and 20-25% respectively, with the first NREM-REM sleep cycle being 70-100 minutes, and second and later cycles lasting approximately 90-120 minutes each. NREM sleep can be split into four different stages, each with its own purpose:</p>
                        <ul>
                            <li>Stage 1 lasts ~1-7 minutes or 2-5% of total sleep, shifting the brain from a wakeful to relaxation state</li>
                            <li>Stage 2 lasts ~10-25 minutes and constitutes 45-55% of sleep, facilitating memory consolidation and lengthens with each successive cycle</li>
                            <li>Stages 3 and 4 are referred to as slow-wave sleep</li>
                            <ul>
                                <li>Stage 3 lasts a few minutes or ~3-8% of sleep</li>
                                <li>Stage 4 lasts ~20-40 minutes or ~10-15% of sleep</li>
                            </ul>
                        </ul>
                        <div className="col-xs-12 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image1} alt='Graphs of sleep cycle'></img>
                        </div>
                            <p>Your mood, body, and sleep environment are just as important as how much sleep you're getting every night. Your room should be dim with indirect lighting, being both quiet and attractive to sleep in. A cooler ambient temperature also lower your heart rate which leaves REM sleep uninterrupted (Okamoto-Mizuno & Mizuno, 2012).</p>
                            <p>To prepare for sleep, it's important to reduce outside noise, invest in a comfortable mattress and pillows, and clear your mind from stress and anxiety. Following a nighttime routine is also helpful in creating a consistent pattern for your brain to get used to before sleeping (which also establishes your circadian rhythm). This can include a warm shower, shutting down your electronics, and journalling down any thoughts that might keep you up.</p>
                            <p>Relaxation techniques offer many benefits that deal with ongoing stress. It lowers your heart rate and blood pressure, reduces stress hormones and muscle tension, and improves one's focus and mood. It also focuses much-needed attention to your body and mind, empowering awareness in your senses and well-being!</p>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image2} alt='Person sleeping on desk with headphones'></img>
                        </div>  
                        <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                            <p className='intro'>Give some of these relaxation methods a try!</p>
                        </div>
                        <ul className='m-3'>
                            <li>Breathing exercises — Slowly take deep breathes through your nose to expand your chest and diaphragm, hold it for a few seconds, and exhale through your mouth slowly.</li>
                            <li>Progressive muscle relaxation — Slowly tense single muscle groups for a few seconds and then relax them for 30 seconds, starting from your toes and working your way up to your head.</li>
                            <li>Visualization — For the creative minds, envision a calm and serene environment to provoke relaxing and positive emotions in your body and mind.</li>
                            <li>Mindfulness meditation — Reduce stress through yoga, focusing on your breath, and/or grateful thoughts that calm your mind and boost well-being.</li>
                        </ul>        
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h2>Helpful Links</h2>
                            <div className='m-4'>
                                <a href="https://www.sleepfoundation.org/sleep-hygiene/how-to-fall-asleep-fast">
                                    <p>Sleep Foundation's Sleep Hygiene Tips</p>
                                </a>
                                <a href="https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/relaxation-technique/art-20045368">
                                    <p>Mayo Clinic's Relaxation Techniques</p>
                                </a>
                                <a href="https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control-helps-quell-errant-stress-response">
                                    <p>Harvard Medical School's Lifestyle Tips</p>
                                </a>
                                <a href="https://www.insider.com/guides/health/how-to-sleep-better">
                                    <p>Insider's 25 Tips on Sleeping Better</p>
                                </a>                                            
                            <h2>Works Cited</h2>
                                <div className='mt-4'>
                                    <p className='source-wrap'>Colten, H. R., Altevogt, B. M., & Research, I. of M. (US) C. on S. M. and. (2006). Sleep physiology. National Academies Press (US). https://www.ncbi.nlm.nih.gov/books/NBK19956/</p>
                                    <p className='source-wrap'>Okamoto-Mizuno, K., & Mizuno, K. (2012). Effects of thermal environment on sleep and circadian rhythm. Journal of Physiological Anthropology, 31(1), 14. https://doi.org/10.1186/1880-6805-31-14</p>
                                </div>
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