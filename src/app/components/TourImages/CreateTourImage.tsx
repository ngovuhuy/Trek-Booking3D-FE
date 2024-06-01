import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { analytics } from "../../../../public/firebase/firebase-config";
import tourImageService from "@/app/services/tourImageService";

interface Iprops {
  showTourImageCreate: boolean;
  setShowTourImageCreate: (value: boolean) => void;
  onCreate: () => void;
  tourId: number; // Thêm tourId vào đây
}

function CreateTourImage(props: Iprops) {
  const { showTourImageCreate, setShowTourImageCreate, onCreate, tourId } = props; // Nhận tourId từ props
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [previewImageURL, setPreviewImageURL] = useState<string>("/image/addpicture.png");
  const [uploadedImageURL, setUploadedImageURL] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setFileUpload(file);
      const previewURL = URL.createObjectURL(file);
      setPreviewImageURL(previewURL);
    }
  };

  const uploadImage = async () => {
    if (fileUpload !== null) {
      try {
        const storageRef = ref(analytics, "Trek_Image/" + fileUpload.name);
        await uploadBytes(storageRef, fileUpload);
        const downloadURL = await getDownloadURL(storageRef);
        setUploadedImageURL(downloadURL); // Lưu URL vào state để hiển thị
        toast.success("Image uploaded successfully!");
        return downloadURL; // Trả về URL sau khi upload
      } catch (error) {
        toast.error("Failed to upload image: " + error);
        throw error;
      }
    } else {
      toast.error("Please select a file.");
      return null;
    }
  };
  
  useEffect(() => {
    if (showTourImageCreate) {
      setFileUpload(null);
      setPreviewImageURL("/image/addpicture.png");
      setUploadedImageURL(null);
    }
  }, [showTourImageCreate]);
  
  const handleCloseModal = () => {
    setFileUpload(null);
    setPreviewImageURL("/image/addpicture.png");
    setShowTourImageCreate(false);
  };

  const handleSubmit = async () => {
    if (!fileUpload) {
      toast.error("Please choose an image!!!");
      return;
    }

    try {
      const imageURL = await uploadImage();
      if (imageURL) {
        const TourImage = {
          tourImageId: 0,
          tourImageURL: imageURL,
          tourId: tourId, // Đảm bảo tourId được truyền đúng
        };
        const response = await tourImageService.createTourImage(TourImage);
        toast.success("Create Tour Image Success");
        handleCloseModal();
        onCreate();
      }
    } catch (error) {
      toast.error("Failed to create tour image");
      console.error("Error creating tour image:", error);
    }
  };

  return (
    <>
      <Modal show={showTourImageCreate} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body className="p-4">
          <h2 className="font-bold pb-4">Add Image Picture</h2>
          <div className="flex justify-center">
            <img
              className="max-w-[180px] max-h-[180px] cursor-pointer"
              src={uploadedImageURL || previewImageURL}
              alt="Add"
              onClick={() => document.getElementById("fileInput")?.click()}
            />
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <div className="flex justify-end mt-4">
            <Button variant="secondary" className="mr-2" onClick={handleCloseModal}>
              Exit
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateTourImage;
