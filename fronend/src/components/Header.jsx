import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header_container'>
      <div className='header_left_wrapper'>
        <div className='logo_wrapper'>
          <h1>LOGO</h1>
        </div>
      </div>

      <div className='header_center_wrapper'>
        <ul className='header_items'>
          <Link to={'/'}><li>Главная</li></Link>
          <Link to={'/products'}><li>Товары</li></Link>
          <Link to={'/disc'}><li>О нас</li></Link>
        </ul>
      </div>

      <div className='header_right_wrapper'>
        <div className='nav_wrapper'>
          <i className="bi-basket-fill fz-60px"></i>
        </div>
      </div>
    </header>
  )
}

export default Header