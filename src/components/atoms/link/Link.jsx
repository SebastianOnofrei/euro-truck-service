import React from 'react'

const Link = (props) => {
    const { link } = props.link;

    return (
        <li>
            <a href='#'>{props.link}</a>
        </li>
    )
}

export default Link