import React from 'react';
import graph_image from "../img/graph.png"
import calendar_image from "../img/calendar.png"
import Footer from "./Footer";
function Home() {
    return (
        <>
            <main>
                <div className="container">
                    <section className="row header-content align-items-center">
                        <div className="content col-xs-6 col-md-5 m-4 mt-5">
                            <h1>Welcome to sleep&see</h1>
                            <p className='intro'><span>A site made to record </span><br></br><span>and visualize your sleep</span></p>
                            <a href="/login">
                                <button className="link-button">Try it out</button>
                            </a>
                        </div>
                        <div className="content col-xs-6 col-md-5 m-4">
                            <img className="graph-image" src={graph_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-8 mt-8">
                            <img className="calendar-image mt-5" src={calendar_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-4 mt-5">
                            <h1>Sleep quality is important</h1>
                            <p className='intro mt-5'>see different graphs and sleep cycles across your week or month on when you hit the hay</p>
                            <a href="/login">
                                <button className="link-button">Try it out</button>
                            </a>
                        </div>
                        <div className='mt-5'>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <h2>Be a dreamer</h2>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>Research says that 35% of students stay up past 3 AM at least once a week which affects long-term focus, cognitive ability, and health </p>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>We aim to inform students on the importance of good sleep health and habits to better academic performance and quality of life overall</p>
                            </div>
                        </div>        
                    </section>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;