import React from 'react'
import Card from '../components/Card'
import note from '../assets/images/note-0.png'

const CV = () => {
  return (
    <div className="container mt-5 pt-3" >
        <Card title='CV' logo={note}>
            <ul>
                <li>
                    University of Oxford [Oxford] (10.2023 - Present)
                    <p><i>DPhil in Engineering Science</i></p>
                </li>
                <li>Imperial College London [ICL] (10. 2021 - 10. 2022)
                    <p><i>MSc. Applied Machine Learning</i></p>
                </li>
                <li>University of Electronic Science and Technology of China [UESTC] (09. 2017 - 06. 2021)
                    <p><i>BEng. Electronic Information Engineering</i></p>
                </li>
            </ul>
        </Card>
    </div>

  )
}

export default CV