import React from 'react'
import ServiceCard from '../../molecules/serviceCard/ServiceCard';
import './OurServices.scss';

const OurServices = () => {
  let headlineText = "Любые услуги за ваши денишки";
  let descriptionText =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.";
  
  let services = [
		{
			headline: "Б/у запчасти для грузовых авто из Европы",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
			imagePath: "",
		},
		{
			headline: "Автомойка грузовых и легковых авто",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
			imagePath: "",
		},
		{
			headline: "Магазин аксессуаров",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
			imagePath: "",
		},
		{
			headline: "Пункт замены масла легковых авто",
			description:
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
			imagePath: "",
		},
	];

    return (
    <section className='services'>
      <h1>{headlineText}</h1>
      <p>{descriptionText}</p>
      {/* aici fac un card */}
      <div className="services__wrapper">
        {services.map((service,index)=>{
          return(
            <ServiceCard key={index} service = {service} className={'service-'+index}/>
          )
        })}
      </div>
    </section>
  )
}

export default OurServices