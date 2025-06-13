import React from 'react'
import '../Skills/Skills.css'

const Skills = () => {
  return (
    <div class="container-fluid pb-4 " >
        <div className='text-center align-items-center'>
        <p class="fs-1 pb-3 text-white" style={{textShadow: "3px 3px 5px rgba(0, 0, 0)",fontFamily: "Cinzel"}}>skills</p>
        </div>
         
      <div className="container">
        <div className="row justify-content-center align-items-stretch g-4">
        
          <div className="col-md-5 d-flex">
            <div className="card card-hover flex-fill text-center p-3">
              <p class="card-title fs-4 fw-light text-dark" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>Web Design</p>
              <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>
                Design is my favorite part of web development—For me, design is the blueprint of imagination.
                It's how I bring clarity, color, and life to an idea before building it with code.
              </p>
            </div>
          </div>
          <div className="col-md-5 d-flex">
            <div className="card card-hover flex-fill text-center p-3">
              <p class="card-title fs-4 fw-light text-dark" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>Web Development</p>
              <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>
                Web development is where creativity meets logic—it's how I bring ideas to life and turn
                designs into dynamic, functional experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center align-items-center'>
        <p class="fs-2 pt-4 text-dark" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>I'm Familiar With</p>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-stretch g-4">
        
          <div className="col-md-5 d-flex">
            <div className="card card-hover flex-fill text-center p-3">
              <p class="card-title fs-4 fw-light text-dark" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>Front End</p>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>HTML</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>CSS</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>JavaScript</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>ReactJs</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Bootstrap</span>
            </div>
          </div>
          <div className="col-md-5 d-flex">
            <div className="card card-hover flex-fill text-center p-3">
              <p class="card-title fs-4 fw-light text-dark" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>Back End</p>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Java (Spring Boot)</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>REST APIs</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Spring MVC</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Microservices</span>
            </div>
          </div>
          <div className="col-md-5 d-flex">
            <div className="card card-hover flex-fill text-center p-3">
              <p class="card-title fs-4 fw-light text-dark" style={{textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel"}}>DataBase Management</p>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>MySQL</span>
              <span class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Oracle</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills