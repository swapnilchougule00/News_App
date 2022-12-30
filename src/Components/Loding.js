import React from 'react'
import './Loding.css'
import '../index.css'

function loding({show}) {
  return (
    <div className= {`${show? 'dark': 'light'} loding`}>
        <div className="spinner">
<div className="loader l1"></div>
<div className="loader l2"></div>
</div>
    </div>
  )
}

export default loding