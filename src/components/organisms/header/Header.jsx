import React from 'react'
import './Header.scss';
import Button from '../../atoms/button/Button';

const Header = () => {
  let buttonText = "Заказать звонок";
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
      <div className="header__contact">
        <div className="header__contact__address"></div>
        <div className="header__contact__schedule"></div>
        <div className="header__contact__phone"></div>
      </div>
      <nav>
          <div className="nav__logo"></div>
          <div className="navigation__links">this will be a molecule</div>
          <Button text={buttonText}/>
      </nav>
    </header>
  )
}

export default Header