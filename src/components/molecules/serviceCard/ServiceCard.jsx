import React from 'react'
import './ServiceCard.scss';

const ServiceCard = (props) => {

    const {headline,description,imagePath} = props.service;
    return (
    <div className={'service__card '+ props.className}>
        <h3>{headline}</h3>
        <p id='service__card__description'>{description}</p>
    </div>
    )
}

export default ServiceCard