/* This file contains the code for "don't sleep on the facts" 
Sleep health has many dimensions that contribute to one's sleep quality.*/

'use strict';
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
                            <p>Getting a good night's sleep is essential for overall health and wellbeing. Research has shown that sleep plays an important role in academic performance, cognitive abilities, and quality of life. Here are some key takeaways from recent studies on how sleep impacts your quality of life:</p>
                            <ul>
                                <li>Academic Performance — A study published in the Journal of Epidemiology and Global Health (2017) found that poor sleep quality was associated with lower academic performance in university students. The study found that students who reported poor sleep quality were more likely to have lower GPAs and experience academic difficulties.</li>
                                <li>Cognitive Abilities — Research has shown that sleep is important for cognitive function, including memory consolidation, attention, and problem-solving. Gomez Fonseca & Genzel (2020) found that sleep plays an important role in creative thinking, with sleep helping to enhance problem-solving abilities and promote innovative thinking.</li>
                                <li>Quality of Life — Sleep is important for overall quality of life, with poor sleep quality associated with a range of negative health outcomes, including increased risk for chronic diseases and mental health disorders. The journal Enfermería Clínica (2019) found that poor sleep quality was associated with increased stress levels in university students.</li>
                                <li>Wellness — Research has shown that improving sleep quality can have a positive impact on physical and mental health. Wang & Bíró (2021) in the journal Explore found that implementing good sleep hygiene practices, such as establishing a regular sleep routine and avoiding electronics before bedtime, can improve sleep quality and overall wellbeing. This means more energy, promoting good mental health, and acknowleging a physiological need for your body!</li>
                            </ul>
                            <table className="info">
                                <thead>
                                    <tr>
                                        <th>Consequences of poor sleep health</th>
                                        <th>Benefits of improved sleep health</th>
                                    </tr>
                                </thead>
                                <tbody>
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
                                </tbody>
                            </table>
                        <p>It's important to prioritize sleep and make it a priority in our busy lives. While it may be tempting to sacrifice sleep in order to get more work done or to stay up late watching cat videos, the long-term consequences of poor sleep quality can have a significant impact on our health and wellbeing.</p>
                        <p>In summary, taking steps to improve our sleep quality is an investment in our overall health and wellbeing. By prioritizing sleep, we can improve our academic performance, cognitive abilities, and quality of life, leading to a happier, healthier, and more productive life!</p>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-8 d-flex justify-content-center">
                            <img className="individual-sleep-image mt-5" src={sleep_image1} alt='sleep1'></img>
                        </div>
                        <div className="col-xs-4 col-md-12 mt-5">
                        <a href="https://docs.google.com/document/d/1FJ_o1PxaBvswqFaAFB2zztBmtLEb3RNsFuUcW87-Kyk/edit?usp=sharing">
                            <h2>Works Cited</h2>
                            </a>
                            <div className='mt-4'>
                                <p>Almojali, A. I., Almalki, S. A., Alothman, A. S., Masuadi, E. M., & Alaqeel, M. K. (2017). The prevalence and association of stress with sleep quality among medical students. Journal of Epidemiology and Global Health, 7(3), 169–174. https://doi.org/10.1016/j.jegh.2017.04.005</p>
                                <p>Colten, H. R., Altevogt, B. M., & Research, I. of M. (US) C. on S. M. and. (2006). Sleep physiology. National Academies Press (US). https://www.ncbi.nlm.nih.gov/books/NBK19956/</p>
                                <p>Gomez Fonseca, A., & Genzel, L. (2020). Sleep and academic performance: Considering amount, quality and timing. Current Opinion in Behavioral Sciences, 33, 65–71. https://doi.org/10.1016/j.cobeha.2019.12.008</p>
                                <p>Herawati, K., & Gayatri, D. (2019). The correlation between sleep quality and levels of stress among students in Universitas Indonesia. Enfermería Clínica, 29, 357–361. https://doi.org/10.1016/j.enfcli.2019.04.044</p>
                                <p>Smevik, H., Habli, S., Saksvik, S. B., Kliem, E., Evensmoen, H. R., Conde, V., Petroni, A., Asarnow, R. F., Dennis, E. L., Eikenes, L., Kallestad, H., Sand, T., Thompson, P. M., Saksvik-Lehouillier, I., Håberg, A. K., & Olsen, A. (2022). Poorer sleep health is associated with altered cognitive control processing in healthy adults. Neuroscience. https://doi.org/10.1101/2022.10.28.512671</p>
                                <p>Wang, F., & Bíró, É. (2021). Determinants of sleep quality in college students: A literature review. EXPLORE, 17(2), 170–177. https://doi.org/10.1016/j.explore.2020.11.003</p>
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