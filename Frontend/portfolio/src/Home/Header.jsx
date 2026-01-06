import React from 'react'



const Header = () => {

  const roles = "SOFTWARE DEVELOPER";
  const [text, setText] = React.useState("");

  React.useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(roles.slice(0, i));
      i++;
      if (i > roles.length) clearInterval(interval);
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="container-fluid " style={{marginTop:"86px" ,backgroundColor: 'rgba(78, 48, 29, 0.14)' }}>
        <div class="row align-items-center" >
        <div className='col-lg-12 col-md-12 p-3 text-center'>
        <p class="display-5 text-dark" style={{fontFamily: "Cormorant"}}>
          <span class="display-5 fs-1 text-white" style={{textShadow: "4px 3px 1px rgba(0, 0, 0, 0.4)",fontFamily: "Cinzel",display: "inline-block"}}> MATHUMITHRA SENTHIL</span></p>
          <p class="display-6 fs-3 text-white mb-3" style={{textShadow: "4px 3px 1px rgba(0, 0, 0, 0.2)",fontFamily: "Cinzel",display: "inline-block"}}>
            {text}
          </p>
        </div>
        
        </div>
    </div>
  )
}

export default Header