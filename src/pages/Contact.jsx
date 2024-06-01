import React from 'react'
import envelope from '../assets/images/envelope_closed-0.png'
import Card from '../components/Card'

const Contact = () => {
  return (
    <div>
        <div className="container mt-5 pt-3" >
            <Card title='Contact' logo={envelope}>
                <ul>
                    <li>Email: jing.wu@eng.ox.ac.uk</li>
                </ul>
            </Card>
        </div>
    </div>
  )
}

export default Contact