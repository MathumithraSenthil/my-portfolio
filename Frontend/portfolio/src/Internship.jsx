import React from 'react'

const Internship = () => {
  return (
    <div class="container-fluid p-4 ">
        <div className='text-center align-items-center'>
        <p class="fs-1 p-2 text-white" style={{textShadow: "3px 3px 5px rgba(0, 0, 0)",fontFamily: "Cinzel"}}>internship</p>
        </div>

        <div className='text-center align-items-center'>
        <p class="fs-3 text-dark" style={{textShadow: "1px 1px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>Java Full Stack Developer</p>
        </div>

        <div className='text-center align-items-center'>
        <p class="fs-3 text-dark" style={{fontFamily: "Cormorant"}}>DCRK IT Solutions Private limited, Hyderabad</p>
        </div>
        <p class="fs-3 text-dark text-center" style={{textShadow: "1px 1px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cormorant"}}>January 2025 - Present</p>
       <div className='container pt-4 pb-2 w-75 justify-content-center'>
            <div className=" position-relative ps-4 border-start border-dark border-4" >
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp;  Backend Development</p>
                <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}>I developed backend services using Spring Boot 2 and Java 8, where I architected and exposed RESTful APIs that streamlined customer data handling with high efficiency and modular design.</p>
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp; Frontend Development </p>
                <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}>On the frontend, I crafted responsive and interactive UI components with ReactJS and Bootstrap, delivering a seamless user experience across devices and enhancing overall design consistency.</p>
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}><i class="bi bi-back"></i>&nbsp; Database & Testing</p>
                <p class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}>I integrated MySQL for structured data management, implemented full-stack CRUD operations, and ensured API performance and correctness by rigorously testing endpoints with Postman.</p>
          </div>
       </div>
    </div>
  )
}

export default Internship