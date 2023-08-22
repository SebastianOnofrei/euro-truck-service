import React from 'react'
import Button from "../../atoms/button/Button";
import Link from '../../atoms/link/Link';

const NavLinks = () => {
    let buttonText = "Заказать звонок";
    const navigationLinks = [
			"Это мы",
			"Почему мы?",
			"А вот поэтому",
			"Контакты",
		];
    return (
		<nav>
			<div className="nav__logo"></div>
			<div className="navigation__links">
                {navigationLinks.map((link)=>{
                  return <Link link={link}/>
                })}
            </div>
			<Button text={buttonText} />
		</nav>
	);
}

export default NavLinks