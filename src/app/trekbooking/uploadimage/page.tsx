'use client'
import Image from 'next/image';
import { useState, ChangeEvent } from "react";
import { analytics } from "../firebase/firebase-config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function UpLoadImage() {
  const [fileupload, setfileupload] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setfileupload(file || null);
  };

  const upload = async () => {
    if (fileupload !== null) {
      const storageRef = ref(analytics, 'Trek_Image/' + fileupload.name);
      await uploadBytes(storageRef, fileupload);
      const downloadURL = await getDownloadURL(storageRef);
      setImageUrl(downloadURL); // Lưu URL vào state để hiển thị
    } else {
      alert("Please select a file.");
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange}></input>
      <button onClick={upload}>Upload</button>
      {imageUrl && ( // Kiểm tra xem imageUrl có tồn tại không trước khi hiển thị
        <div>
          <h2>Image URL:</h2>
          <p>{imageUrl}</p>
          <img src={imageUrl} alt="Uploaded Image" style={{ maxWidth: "100%" }} /> {/* Hiển thị hình ảnh */}
        </div>
      )}
    </div>
  );
}
