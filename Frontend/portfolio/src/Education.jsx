import React from 'react'

const Education = () => {

  return (
    <div class="container-fluid p-4 " >
        <div className='text-center align-items-center'>
        <p class="fs-1 text-white" style={{textShadow: "3px 3px 5px rgba(0, 0, 0)",fontFamily: "Cinzel"}}>education</p>
        </div>
        <div className="d-flex container pt-4 pb-2 w-80 justify-content-center" >

            <div className='ps-5'>
            <div className=" position-relative ps-4 border-start border-dark" style={{paddingBottom:"20px"}}>
                <span className="position-absolute top-1 mt-2 start-0 translate-middle bg-dark border border-dark rounded-circle" style={{width:"15px", height:"15px", zIndex: "1"}}></span>
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}>MCA</p>
                <span class="fs-5 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>CMS COllege of Science and Commerce</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Major: </strong>Computer Applications</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>CGPA: </strong>8.3</span><br/>
                <span class="fs-4 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>2023 - 2025</span>
            </div>
        
            <div className="position-relative ps-4 border-start border-dark" style={{paddingBottom:"20px"}}>
                <span className=" position-absolute top-1 mt-2 start-0 translate-middle bg-dark border border-dark rounded-circle" style={{width:"15px", height:"15px", zIndex: "1"}}></span>
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}>B.Sc</p>
                <span class="fs-5 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>Sri GVG Visalakshi College for Women</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Major: </strong>Physics</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>CGPA: </strong>8.4</span><br/>
                <span class="fs-4 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>2020 - 2023</span>
            </div>
            </div>

            <div className='ps-5'>
            <div className="position-relative ps-4 border-start border-dark" style={{paddingBottom:"20px"}} >
                <span className=" position-absolute top-1 mt-2 start-0 translate-middle bg-dark border border-dark rounded-circle" style={{width:"15px", height:"15px", zIndex: "1"}}></span>
                <p class="fs-5 fw-bold text-dark" style={{fontFamily: "Cormorant"}}>HSLC / 12th Standard</p>
                <span class="fs-5 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>Sri Visalakshi Girls Higher Secondary School</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Major: </strong>PCM (Non-Medical) with Computer Science</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Percentage: </strong>67%</span><br/>
                <span class="fs-4 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>2020</span>
            </div>
       
            <div className="position-relative ps-4 border-start border-dark" style={{paddingBottom:"20px"}} >
                <span className="position-absolute top-1 mt-2 start-0 translate-middle bg-dark border border-dark rounded-circle" style={{width:"15px", height:"15px", zIndex: "1"}}></span>
                <p class="fs-4 fw-bold text-dark" style={{fontFamily: "Cormorant"}}>SSLC / 10th Standard</p>
                <span class="fs-5 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>Sri Visalakshi Girls Higher Secondary School</span><br/>
                <span class="fs-5 text-dark" style={{fontFamily: "Cormorant"}}><strong>Percentage: </strong>85%</span><br/>
                <span class="fs-4 fw-semibold text-dark" style={{fontFamily: "Cormorant"}}>2018</span>
            </div>    
            </div>     
        
        </div>
    </div>
  )
}

export default Education