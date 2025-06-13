import React from 'react'
import header from '../assets/header.jpg'

const Header = () => {
  return (
    <div class="container-fluid " style={{marginTop:"86px" ,backgroundColor: 'rgba(175, 162, 153, 0.596)' }}>
        <div class="row align-items-center" >
        <div className='col-lg-9 col-md-12 text-center'>
        <p class="display-5 text-dark" style={{fontFamily: "Cormorant"}}> I'm &nbsp;
          <span class="display-5 text-white" style={{textShadow: "4px 3px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel",display: "inline-block"}}> MATHUMITHRA SENTHIL</span></p>
        <p class="display-6 text-white mb-3" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>FULL STACK DEVELOPER</p>
        <p class="fs-4 text-dark" style={{fontFamily: "Cormorant"}}>MCA graduate and Java Full Stack Developer, passionate about creating scalable backend systems, dynamic user interfaces, and delivering efficient, user-centric web applications.</p>
        </div>
        <div className='col-lg-3 col-md-12 order-lg-2 order-1 d-flex justify-content-center mb-4 mb-lg-0'>
          <img src={header} alt="Profile" style={{ maxWidth: "100%", height: "auto", maxHeight: "500px"
            }} />
        </div>
        </div>
    </div>
  )
}

export default Header