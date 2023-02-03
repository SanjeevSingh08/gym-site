import React from 'react'
import './Poster.scss'

const Poster = (props) => {
  return (
    <div className={`${props.name} poster`} >
        <h1>{props.head}</h1>
      </div>
  )
}

export default Poster
