import React from 'react'

const Title = ({title, subtite}) => {
  return (
    <>
        <div className="py-5 pt-md-5 pb-md-6 mx-auto text-center">
            <h1 className="display-4 pt-md-5 mt-5">{title}</h1>
            <p className="lead">{subtite}</p>
        </div>
    </>
  )
}

export default Title