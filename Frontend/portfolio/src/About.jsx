import React from 'react'
import photo from '../src/assets/photo.png'

const About = () => {
  return (
    <div class="container-fluid p-4 ">
        <div className='text-center mb-4'>
        <p class="display-5 text-white mt-3" style={{textShadow: "3px 3px 5px rgba(0, 0, 0)",fontFamily: "Cinzel"}}>about me</p>
        </div>
        <div class="row align-items-center">
            <div className='col-lg-3 col-md-12 d-flex justify-content-center mb-4 mb-lg-0'>
                <img src={photo} alt="Profile" className="img-fluid rounded" style={{ maxWidth: "280px", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}/>
            </div>

            <div className='col-lg-9 col-md-12'>
                 <p class="display-6 text-dark mb-3" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Mathumithra Senthil</p>
                <div className='row'>
                    <div className='col-md-6 mb-3'>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>Qualification : </strong>Master of Computer Applications</p>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>Experience : </strong>Fresher</p>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>LinkedIn : </strong>https://www.linkedin.com/in/mathumithrasenthil/</p>
                    </div>
                    <div className='col-md-6 mb-3'>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>Email : </strong>mathumithrasenthil2812@gmail.com</p>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>Phone : </strong>+91 7010407411</p>
                    <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;<strong>City : </strong>Hyderabad, Telangana</p>
                    </div>
                </div>
                <p class="fs-5 text-dark mt-3" style={{fontFamily: "Cormorant"}}> I come from a curious mindset, always eager to learn, build, and improve. Whether it's designing APIs or crafting seamless user experiences, I believe in writing clean, thoughtful code that makes a difference. I’ve grown through challenges, embraced late-night debugging sessions, and found joy in every “it finally works!” moment. I’m here not just to build software, but to grow with it.</p>
            </div>
        </div>
    </div>
  )
}

export default About