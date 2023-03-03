/* This file contains the code for the card of our team in about us page */
'use strict';
import React from 'react';

export function Card(props) {
    return (
        <div className='col'>
            <div className="card m-1">
                <div className="about-card">
                  <div className='card-body'>
                    <div className="row">
                        <div className="col-sm-auto col-xl-12">
                            <img className="img-thumbnail img-fluid" src={`../img/${props.name}.png`} alt={props.name}></img>
                        </div>
                        <div className="col-sm col-xl-12">
                            <h2 className="card-title">{props.name}</h2>
                            <p className="card-text m-3 p-3">{props.desc}</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}