'use client';

import React, { useEffect, useState, useRef } from 'react';
import '../../../../../public/css/imag360.css';
import '../../../../../public/css/voucher.css';

const roomImage3DService = {
  async getRoom3DImageByRoomId(roomId) {
    console.log("Fetching images for room ID:", roomId);
    try {
      const response = await fetch(
        `https://localhost:7132/getRoom3DImagebyRoomId/${roomId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Retrieve token from localStorage
          },
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch room image list");
      }
      const data = await response.json();
      console.log("Fetched data:", data); // Trigger refetch after fetching
      return data;
    } catch (error) {
      console.error("Error fetching room image list:", error);
      throw error;
    }
  },
};

const List3DRoom = ({ params }) => {
  const [listImageUrl, setListImageUrl] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);
  const roomId = params.roomId; // Lấy roomId từ params
  const viewerRef = useRef(null);
  const panoramaRef = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const data = await roomImage3DService.getRoom3DImageByRoomId(roomId);
        if (Array.isArray(data)) {
          const urls = data.map(item => item.roomImage3DURL);
          setListImageUrl(urls);
        } else {
          console.error("Fetched data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();

    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/105/three.min.js';
    script1.async = true;
    script1.onload = () => {
      const script2 = document.createElement('script');
      script2.src = '/Components/panolens.min.js';
      script2.async = true;
      script2.onload = () => {
        console.log("Panolens script loaded");
        setScriptsLoaded(true);
      };
      document.body.appendChild(script2);
    };
    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, [roomId]);

  useEffect(() => {
    if (scriptsLoaded && listImageUrl.length > 0) {
      console.log("Initializing Panolens viewer with images:", listImageUrl);
      const imageUrl = listImageUrl[currentImageIndex];
      console.log("ImageURL: ", imageUrl);

      if (typeof imageUrl === 'string') {
        // Remove and dispose the previous panorama if it exists
        if (panoramaRef.current) {
          viewerRef.current.remove(panoramaRef.current);
          panoramaRef.current.dispose();
          panoramaRef.current = null;
        }

        const panorama = new PANOLENS.ImagePanorama(imageUrl);
        panoramaRef.current = panorama;

        const imageContainer = document.querySelector('.image360-container');
        if (!imageContainer) {
          console.error("Image container not found");
          return;
        }

        if (!viewerRef.current) {
          const viewer = new PANOLENS.Viewer({
            container: imageContainer,
            autoRotate: true,
            autoRotateSpeed: 0.3,
            controlBar: true,
          });
          viewerRef.current = viewer;
        }

        // Only add panorama to viewer if both are valid
        if (viewerRef.current && panoramaRef.current) {
          viewerRef.current.add(panoramaRef.current);
        } else {
          console.error("Failed to initialize viewer or panorama");
        }
      } else {
        console.error("Current image URL is not a string:", imageUrl);
      }
    } else {
      console.log("Scripts not loaded or no images found");
    }
  }, [scriptsLoaded, listImageUrl, currentImageIndex]);
//di chuyen hinh anh trong list
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % listImageUrl.length);
  };

  const handleBack = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + listImageUrl.length) % listImageUrl.length);
  };

  return (
    <>
      <div className="tour">
        <div className="container">
          <div className="tour__head">
            <h2>3D TOUR</h2>
          </div>
          <div className="image360-container"></div>
          {listImageUrl.length > 0 && (
            <div className="controls">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List3DRoom;
