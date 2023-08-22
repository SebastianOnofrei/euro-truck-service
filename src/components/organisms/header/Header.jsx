import React from 'react'
import './Header.scss';

const Header = () => {
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
          <button>this will be an ATOM</button>
      </nav>
    </header>
  )
}

export default Header