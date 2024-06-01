import React from 'react'
import about from '../assets/images/user_calendar-0.png'

const Card = ({children, title, logo}) => {
  return (
    <div className='card my-5'>
        <div className="card-header icon">
            <h4 className="my-0 font-weight-normal "><img src={logo} alt={title} />  {title}</h4>
        </div>
        <div className="card-body about">
            { children }
        </div>
    </div>
  )
}

export default Card