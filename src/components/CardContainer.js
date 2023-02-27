/* This file contains the code for the card container of our team in about us page */
'use strict';
import React from 'react';
import { Card } from './Card.js';

export function CardContainer(props) {

    const memberInfo = props.memberInfo;
    const cards = memberInfo.map((e) => {
        return <Card key={e.name} name={e.name} desc={e.desc} linkedin={e.linkedin}></Card>
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-auto col-xl-auto d-flex">
                    {cards}
                </div>
            </div>
        </div>

    )
}