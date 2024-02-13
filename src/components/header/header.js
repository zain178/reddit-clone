import React from 'react'
import logo from './reddit-img-header.jpeg'
import './header.css'

export function Header() {

  return (
    <div className='header'>
        <img className='header-img' src={logo}/>
        <p className='header-text'>Neddit</p>
    </div>
  )
}

