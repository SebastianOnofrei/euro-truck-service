import React from 'react'
import './Hero.scss';
import Button from "../../atoms/button/Button";

const Hero = () => {
  let heroHeadline = "Доступный сервис грузовых автомобилей";
  let heroDescription =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.";
  let buttonText = "Чета сделать";
  return (
		<section className="hero">
			<div className="hero__text">
				<h1>{heroHeadline}</h1>
				<p>{heroDescription}</p>
        		<Button text={buttonText}/>
			</div>
		</section>
	);
}

export default Hero