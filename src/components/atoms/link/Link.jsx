import React from 'react'
import './Link.scss';

const Link = (props) => {

    return (
        <li>
            <a href='#'>{props.link}</a>
        </li>
    )
}

export default Link