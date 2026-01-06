import React from 'react';
import photo from '../src/assets/photo.png';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: 'black',
          font: {
            family: 'Cinzel',
            size: 14,
          },
        },
      },
      title: {
        display: true,
        color: 'black',
        font: {
          family: 'Cinzel',
          size: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'black',
          font: {
            family: 'Cinzel',
            size: 14,
          },
        },
        grid: {
          color: 'rgba(255,255,255,0.1)',
        },
      },
      y: {
        ticks: {
          color: 'black',
          font: {
            family: 'Cinzel',
            size: 14,
          },
          stepSize: 10,
          beginAtZero: true,
        },
        grid: {
          color: 'rgba(193, 186, 186, 0.71)',
        },
      },
    },
  };
  
const labels = ['Commitment', 'Communication', 'Confidence', 'Creativity', 'Teamwork'];

export const data = {
  labels,
  datasets: [
    {
      label: 'My Strengths (%)',
      data: [95, 87, 82, 85, 90],
      backgroundColor: 'rgba(118, 112, 109, 0.63)',
      barThickness: 50,       
      maxBarThickness: 100
    }
  ],
};

const About = () => {
  return (
    <div className="container-fluid p-4">
      <div className='text-center mb-4'>
        <p className="display-5 fs-1 text-white mt-3" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0)", fontFamily: "Cinzel" }}>about me</p>
      </div>
      <div className="row align-items-center">
        <div className='col-lg-3 col-md-12 d-flex justify-content-center mb-4 mb-lg-0'>
          <img src={photo} alt="Profile" className="img-fluid rounded" style={{ maxWidth: "280px", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }} />
        </div>

        <div className='col-lg-9 col-md-12 '>
          <p className="display-6 fs-2 text-dark mb-3" style={{ textShadow: "2px 2px 2px rgba(0, 0, 0, 0.4)", fontFamily: "Cormorant" }}>Mathumithra Senthil</p>
          <div className='row'>
            <div className='col-md-6 mb-3'>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>Qualification : </strong>Master of Computer Applications (MCA)</p>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>Experience : </strong>Fresher</p>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>LinkedIn : </strong>https://www.linkedin.com/in/mathumithrasenthil/</p>
            </div>
            <div className='col-md-6 mb-3'>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>Email : </strong>mathumithrasenthil2812@gmail.com</p>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>Place : </strong>Tamil Nadu</p>
              <p className="fs-5 text-dark" style={{ fontFamily: "Cormorant" }}><i className="bi bi-circle-square"></i>&nbsp;<strong>GitHub : </strong>https://github.com/MathumithraSenthil</p>
            </div>
          </div>
          <p className="fs-5 text-dark p-2" style={{ fontFamily: "Cormorant" }}>
            I come from a curious mindset, always eager to learn, build, and improve.<br />
            Whether it's designing APIs or crafting seamless user experiences, I believe in writing clean, thoughtful code that makes a difference.<br />
            I’ve grown through challenges, embraced late-night debugging sessions, and found joy in every “it finally works!” moment.<br />
            I’m here not just to build software, but to grow with it.
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center" >
        <div className="text-center" style={{ height: "500px", width: "800px" }}>
          <p className="display-5 fs-1 text-white" style={{ textShadow: "3px 3px 5px rgba(0, 0, 0)", fontFamily: "Cinzel" }}>
            My Strengths
          </p>
          <Bar options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default About;
