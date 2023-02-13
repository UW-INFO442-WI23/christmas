import React from 'react';
import sleep_image1 from "../img/sleep-image1.jpg"
import sleep_image2 from "../img/sleep-image2.jpg"
import sleep_image3 from "../img/sleep-image3.jpg"
import Footer from "./Footer";
function Resources() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row">
                        <div className="header-content col-xs-12 col-md-12 mt-5">
                            <h1>Resources</h1>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image1} alt='sleep1'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>don't sleep on the facts</h2>
                            <p className='mt-2'>Sleep health has many dimensions that contribute to one's sleep quality. Here you will find statistics, educational infographics, and expert-backed resources aimed to highlight key information relating to sleep. Knowledge is power, and more power to you for wanting to learn about the importance of sleep!</p>
                            <a href="/healthier">
                                <button className="link-button">Learn More</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image2} alt='sleep2'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>get cozy and comfy</h2>
                            <p className='mt-2'>Looking for ways to create a comfortable sleeping space to catch some zzz's? Like a soft and snug blanket, we've got you covered! Sleep is a personal aspect of life, and this page offers practical tips and habits to get you prepared for a good night's rest.</p>
                            <a href="/faster">
                                <button className="link-button">Show Me!</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image3} alt='sleep3'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>dream big, sleep better</h2>
                            <p className='mt-2'><strong>sleep&see</strong> is a small project aimed to track details about your sleep and record notes whenever you feel like it. Go at your own pace in learning more about your sleep habits across weeks and months of documenting your hours of sleep.</p>
                            <a href="/better">
                                <button className="link-button">Try Now</button>
                            </a>
                        </div>
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Resources;