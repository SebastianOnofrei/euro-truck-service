import React from 'react'
import Header from '../organisms/header/Header'
import Hero from '../organisms/hero/Hero'
import OurServices from '../organisms/our-services/OurServices';
import WhoAreWe from '../organisms/who-are-we/WhoAreWe';

const Home = () => {
  return (
		<>
			<Header />
			<Hero />
			<OurServices/>
			<WhoAreWe/>
		</>
	);
}

export default Home