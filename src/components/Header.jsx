import React from 'react'
import headerIcon from '../assets/header-icon.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Link to='/'>
      <div className='flex flex-wrap justify-center content-between items-center p-4 shadow-md height-20 bg-white hover:cursor-pointer'>
          <img src={headerIcon} alt='' className='h-28 px-4'/>
          <h1 className='text-5xl font-mono font-bold'>ByteCooks</h1>
      </div>
    </Link>
  )
}

export default Header