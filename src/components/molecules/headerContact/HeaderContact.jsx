import React from 'react'
import './HeaderContact.scss';
import pinDrop from '../../../assets/pin-drop.svg';
import clock from '../../../assets/clock.svg';
import phone from '../../../assets/phone.svg';

const HeaderContact = (props) => {

    // Object destructuring :) 

    const {address,phones,schedule} = props.contactInformation
    return (
			<div className="header__contact">
				<div className="wrapper">
					<div className="header__contact__address">
						<img src={pinDrop} alt="pin-drop" />
						<div className="header__contact__address-text">
							<p>{address.headline}</p>
							<p>{address.fullAddress}</p>
						</div>
					</div>
					<div className="decoration-line"></div>
					<div className="header__contact__schedule">
						<img src={clock} alt="" />
						<div className="header__contact__schedule-text">
							<p>{schedule.headline}</p>
							<p>{schedule.scheduleText}</p>
						</div>
					</div>
				</div>
				<div className="header__contact__phone">
					<img src={phone} alt="" />
					<div className="header__contact__phone-numbers">
						<p>{phones.phoneNumber}</p>
						<p>{phones.alternativePhoneNumber}</p>
					</div>
				</div>
			</div>
		);
}

export default HeaderContact