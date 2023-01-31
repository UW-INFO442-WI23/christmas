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
                        <div className="col-xs-12 col-md-12 mt-5">
                            <h1>Resources</h1>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image1} alt='sleep1'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>Sleep Healtheir</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="/healthier">
                                <button className="link-button">Check</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image2} alt='sleep2'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>Sleep Faster</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="/faster">
                                <button className="link-button">Check</button>
                            </a>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-8">
                            <img className="sleep-image mt-5" src={sleep_image3} alt='sleep3'></img>
                        </div>
                        <div className="col-xs-4 col-md-6 mt-5">
                            <h2>Sleep Better</h2>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="/better">
                                <button className="link-button">Check</button>
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