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
                            <h1>welcome to sleep&see:</h1>
                            <p className='intro'><span>a site made to record </span><br></br><span>and visualize your sleep</span></p>
                            <a href="/login">
                                <button className="link-button">try it out</button>
                            </a>
                        </div>
                        <div className="content col-xs-6 col-md-5 m-4 d-flex justify-content-center">
                            <img className="graph-image" src={graph_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-8 mt-8 d-flex justify-content-center">
                            <img className="calendar-image mt-5" src={calendar_image} alt='graph'></img>
                        </div>
                        <div className="col-xs-4 col-md-4 mt-5">
                            <h1>your sleep is important</h1>
                            <p className='intro mt-5'>see graphs and notes across your week or month on when you hit the hay</p>
                            <a href="/login">
                                <button className="link-button">try it out</button>
                            </a>
                        </div>
                        <div className='mt-5'>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <h1>be a dreamer</h1>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>research says that 35% of students stay up past 3 AM at least once a week which affects long-term focus, cognitive ability, and health </p>
                            </div>
                            <div className="col-xs-12 col-md-12 mt-5 d-flex justify-content-center">
                                <p className='last-message'>we aim to inform students on the importance of good sleep health and habits to better academic performance and quality of life overall</p>
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