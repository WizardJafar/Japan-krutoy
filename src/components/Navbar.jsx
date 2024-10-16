import React from 'react'

import logo from '../assets/channels4_profile-removebg-preview.png';

const Navbar = () => {
  return (
    <div className="navbar pr-14 pl-14 bg-white border-gray-400 shadow-md shadow-gray-400 container">
  <div className="flex-1">
    <a>
      <img src={logo} className="w-20 h-16" alt="" />
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Bekzod Mirzaaliyev</a></li>
      <li className=' border-gray-400 shadow-md shadow-gray-400 rounded-lg'>
      <details>
          <summary>Uz</summary>
          <ul className="bg-base-100 rounded-t-none p-2 border-gray-400 shadow-md shadow-gray-400">
            <li><a>Ru</a></li>
          </ul>
        </details>
      </li>
      <li><a className='text-red-700 hover:bg-red-400'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
</svg>
</a></li>
    </ul>
  </div>
</div>
  )
}

export default Navbar