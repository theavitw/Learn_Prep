import React from 'react'
import { NavLink } from 'react-router-dom'

function Preparation() {
  return (
    <div className='dashboard aside'>
      <h1>Lst's See Playbacks Of Some</h1>
      <h2>
        Awesome Interviews
      </h2>

      <NavLink to="/Playback" className="text-white text-decoration-none w-100">
        <button className='sd_2 sd_3'>
          Let's Go</button>
      </NavLink>


    </div>
  )
}

export default Preparation