'use client'
import React from 'react';
import { useEffect } from 'react';
import '../../../../public/css/imag360.css';
import Script from 'next/script';


const Tour: React.FC = () => {
  return (
    <>
      <Script async src='https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js' />
      <Script async src='../Components/panolens.min.js'/>
      <Script async src='../Components/main.js'/>
      <div className="tour">
        <div className="container">
          <div className="tour__head">
            <h2>3D TOUR</h2>
          </div>
          <div className="image-container"></div>
        </div>
      </div>
    </>
  );
};

export default Tour;