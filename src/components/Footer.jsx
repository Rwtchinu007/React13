import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className='footer'>
        <h4>Footer</h4>
        <button onClick={()=>{
            navigate('/courses')
        }}> Explore Courses</button>
    </div>
  )
}

export default Footer