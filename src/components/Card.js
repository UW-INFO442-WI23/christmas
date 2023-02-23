import React from 'react';

export function Card(props) {
    return (
        <div className="card m-1">
            <div class="card-body">
                <div class="row">
                    <div class="col-sm-auto col-xl-12">
                        <img src={`../img/${props.name}.png`} alt={props.name}></img>
                    </div>
                    <div className="col-sm col-xl-12">
                        <h2 className="card-title">{props.name}</h2>
                        <p className="col-xs-5 col-md-12 m-4 p-6">{props.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}