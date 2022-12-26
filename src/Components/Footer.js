import React from 'react'
import './Footer.css'
function Footer({show}) {
  return (
    <div className={`${show? 'dark': 'light'} footer`}  >
        <p>
            @copyrights https://mynewsapp-sc.netlify.app/
        </p>
    </div>
  )
}

export default Footer