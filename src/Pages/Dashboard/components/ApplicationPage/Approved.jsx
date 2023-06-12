import React from 'react'
import "./Application.css"

const Approved = () => {
  return (
    <div className='approved-container'>
      <svg xmlns="http://www.w3.org/2000/svg" 
      fill="none"
      viewBox="0 0 24 24" 
      stroke-width="1.5" 
      stroke="currentColor" 
      class="w-6 h-6"
      className='status'>
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <p>Approved</p>
    </div>
  )
}

export default Approved
