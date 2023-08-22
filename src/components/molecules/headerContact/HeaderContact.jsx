import React from 'react'
import './HeaderContact.scss';

const HeaderContact = (props) => {

    // Object destructuring :) 

    const {address,phone,schedule} = props.contactInformation
    return (
			<div className="header__contact">
				<div className="header__contact__address">
					<h1>{address.headline}</h1>
				</div>
				<div className="header__contact__schedule">
					<h1>{schedule.headline}</h1>
				</div>
				<div className="header__contact__phone"></div>
			</div>
		);
}

export default HeaderContact