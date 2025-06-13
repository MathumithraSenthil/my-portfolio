import React from 'react'
import '../Projects/Projects.css'
import mini_prj from '../assets/mini_proj.png'
import main_proj from '../assets/main_prj.png'
import assignment_prj1 from '../assets/assignment_prj1.png'
import assignment_prj2 from '../assets/assignment_prj2.png'
import assignment_prj3 from '../assets/assignment_prj3.png'


const Projects = () => {
  return (
    <div class="container-fluid pb-4 ">
         <div className='text-center align-items-center'>
        <p class="fs-1 p-3 text-white" style={{textShadow: "3px 3px 5px rgba(0, 0, 0)",fontFamily: "Cinzel"}}>Projects</p>
        </div>
         
        <div className='text-center align-items-center'>
        <p class="fs-2 pb-3 text-dark" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Academic Project</p>
      </div>

        <div className="container">
        <div className="row justify-content-center align-items-stretch g-4">
        
            <div className="col-md-5 d-flex text-center justify-content-center">
            <div class="card card_hover" style={{width: "30rem"}}>
                <img src={mini_prj} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-title title_hover fs-3 text-dark text-center" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Web Development</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Developed a Home Interior Design Management System using HTML, CSS, Javascript and MySQL, enabling users to discover and connect with interior designers, painters, and decorators through a centralized, user-friendly platform.</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Stack:</strong><br/> PHP, CSS, Javascript, MySQL</p>
                </div>
            </div>
          </div>
          <div className="col-md-5 d-flex text-center justify-content-center">
          <div class="card card_hover" style={{width: "30rem"}}>
                <img src={main_proj} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-title fs-3 text-dark text-center" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Web Development</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Developed a complete hardware infrastructure management system that simplifies sales, customer support, and inventory tracking, using ReactJS, Spring Boot, and MySQL for an efficient full-stack implementation.</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Stack:</strong><br/> ReactJs, Bootstrap, Spring Boot, MySQL</p>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className='text-center align-items-center'>
        <p class="fs-2 p-5 text-dark" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Assignment Project</p>
      </div>

      <div className="container">
        <div className="row justify-content-center align-items-stretch g-4">
        
          <div className="col-md-4 d-flex text-center justify-content-center">
          <div class="card card_hover" style={{width: "25rem"}}>
                <img src={assignment_prj1} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-title fs-3 text-dark text-center" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Harmony</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Created a simple, static website for a Musical Instruments Class using HTML and CSS as part of my UI/UX learning journey.</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Stack:</strong><br/> HTML, CSS</p>
                </div>
            </div>
          </div>
          <div className="col-md-4 d-flex text-center justify-content-center">
          <div class="card card_hover" style={{width: "25rem"}}>
                <img src={assignment_prj2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-title fs-3 text-dark text-center" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Armory vault</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Designed a static e-commerce website using HTML and CSS, featuring a responsive layout, product listings, navigation menus, and styled UI components, created as part of my exploration in web design and user interface principles.</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong >Stack:</strong><br/> HTML, CSS, Javascript</p> 
                </div>
            </div>
          </div>
          <div className="col-md-4 d-flex text-center justify-content-center">
          <div class="card card_hover" style={{width: "25rem"}}>
                <img src={assignment_prj3} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <p class="card-title fs-3 text-dark text-center" style={{textShadow: "2px 2px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Lamborghini clone</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}>Designed a clone of the Lamborghini website using ReactJS and Bootstrap, with a modern and responsive design to showcase cars and brand style.</p>
                    <p class="card-text fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong >Stack:</strong><br/>ReactJs, Bootstrap</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects