import React from 'react'
import './WhoAreWe.scss';

const WhoAreWe = (props) => {
  let headlineText = "У вас вопрос кто мы а кто мы блин";
  let descriptionText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.'

  return (
    <section className='who-we-are'>
      <div className="who-we-are__text">
        <h1>{headlineText}</h1>
        {/* the description text will have to be changed to 3 different , but that's how it is in the design... */}
        <p>{descriptionText}</p>
        <p>{descriptionText}</p>
        <p>{descriptionText}</p>
      </div>
    </section>
  )
}

export default WhoAreWe