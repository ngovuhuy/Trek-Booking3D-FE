'use client'
import React, { useEffect } from 'react';
import '../../../../public/css/imag360.css';
import '../../../../public/css/voucher.css'
const Tour = () => {
  const listImageUrl = [
    'https://firebasestorage.googleapis.com/v0/b/mangastore-4146a.appspot.com/o/Trek_Image%2Fvictoria-island-3648513_1920.jpg?alt=media&token=aec4b512-7288-4890-85d9-7fdcb1787861',
    'https://firebasestorage.googleapis.com/v0/b/mangastore-4146a.appspot.com/o/Trek_Image%2Fpanorama-of-the-landscape-2328387_1920.jpg?alt=media&token=b097fdaf-fa57-4fe1-b3b6-5631abc10c40',
    'https://firebasestorage.googleapis.com/v0/b/mangastore-4146a.appspot.com/o/Trek_Image%2Fvictoria-island-3648513_1920.jpg?alt=media&token=aec4b512-7288-4890-85d9-7fdcb1787861'
    
  ];

  useEffect(() => {

    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = '../Components/panolens.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    script2.onload = () => {
      const panorama = new PANOLENS.ImagePanorama(listImageUrl[0]);
      const panorama2 = new PANOLENS.ImagePanorama(listImageUrl[1]);

      let imageContainer = document.querySelector('.image360-container');

      var infospotPositions = [
        new THREE.Vector3(-2136.06, 16.30, 890.14),
        new THREE.Vector3(-3136.06, 296.30, -4290.14),
      ];

      const viewer = new PANOLENS.Viewer({
        container: imageContainer,
        autoRotate: true,
        autoRotateSpeed: 0.3,
        controlBar: true,
      });

      panorama.link(panorama2, infospotPositions[0]);
      panorama2.link(panorama, infospotPositions[1]);

      viewer.add(panorama, panorama2);
    };

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <>
      <div className="tour">
        <div className="container">
          <div className="tour__head">
            <h2>3D TOUR</h2>
          </div>
          <div className="image360-container"></div>
        </div>
      </div>

      
    </>
  );
};

export default Tour;
