import React from 'react'
import './Header.scss';

import HeaderContact from '../../molecules/headerContact/HeaderContact';
import NavLinks from '../../molecules/navLinks/navLinks';


const Header = () => {

  let contactInformation = {
		address: {
			headline: "Наш адрес:",
			fullAddress: "г. Бишкек, ул. Ляляля 69",
		},
		schedule: {
			headline: "График работы:",
			scheduleText: "С 8:00 до 22:00 без выходных",
		},
		phones: {
			phoneNumber: "+7 (708) 51 51 518",
			alternativePhoneNumber: "+7 (700) 51 51 518",
		},
	};
  return (
    <header>
      <HeaderContact contactInformation={contactInformation}/>
      <NavLinks />
    </header>
  )
}

export default Header