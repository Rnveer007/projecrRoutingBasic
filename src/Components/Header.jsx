import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'

function Header() {
  return (
    <>
      <div className='bg-black text-white p-4 flex justify-evenly'>
        <div>Header</div>
        <ul className='flex'>
          <li className='px-4'>
            <Link to="/">Home</Link>
          </li>

          <li className='px-4'>
            <Link to="/about">About</Link>
          </li>

          <li className='px-4'>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header