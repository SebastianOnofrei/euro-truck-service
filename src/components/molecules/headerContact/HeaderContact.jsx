import React from 'react'
import './HeaderContact.scss';

const HeaderContact = (props) => {

    // Object destructuring :) 

    const {address,phones,schedule} = props.contactInformation
    return (
			<div className="header__contact">
				<div className="wrapper">
					<div className="header__contact__address">
						<p>{address.headline}</p>
						<p>{address.fullAddress}</p>
					</div>
					<div className="decoration-line"></div>
					<div className="header__contact__schedule">
						<p>{schedule.headline}</p>
						<p>{schedule.scheduleText}</p>
					</div>
				</div>
				<div className="header__contact__phone">
					<p>{phones.phoneNumber}</p>
					<p>{phones.alternativePhoneNumber}</p>
				</div>
			</div>
		);
}

export default HeaderContact