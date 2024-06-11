import { useState, ChangeEvent, useEffect } from "react";
import { toast } from "react-toastify";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { analytics } from "../../../../public/firebase/firebase-config";
import room3DImageService from "@/app/services/room3DImageService";
//tao ten file doc nhat
import { v4 as uuidv4 } from 'uuid';

interface Iprops {
  showRoomImageCreate: boolean;
  setShowRoomImageCreate: (value: boolean) => void;
  onCreate: () => void;
  roomId: number;
  listRoomImage: number;
}

function CreateRoom3DImage(props: Iprops) {
  const { showRoomImageCreate, setShowRoomImageCreate, onCreate, roomId, listRoomImage } = props;
  const [fileUploads, setFileUploads] = useState<File[]>([]);
  const [previewImageURLs, setPreviewImageURLs] = useState<string[]>([]);
  const [uploadedImageURLs, setUploadedImageURLs] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    setFileUploads(files);
    const previewURLs = files.map(file => URL.createObjectURL(file));
    setPreviewImageURLs(previewURLs);
  };

  const uploadImages = async () => {
    const uploadPromises = fileUploads.map(file => {
      const uniqueFileName = `${uuidv4()}_${file.name}`;
      const storageRef = ref(analytics, "Room_3D_Image/" + uniqueFileName);
      return uploadBytes(storageRef, file)
        .then(async snapshot => {
          const downloadURL = await getDownloadURL(snapshot.ref);
          return downloadURL;
        })
        .catch(error => {
          console.error("Failed to upload image:", error);
          throw error;
        });
    });

    try {
      const urls = await Promise.all(uploadPromises);
      setUploadedImageURLs(urls);
      toast.success("Images uploaded successfully!");
      return urls;
    } catch (error) {
      toast.error("Failed to upload images.");
      throw error;
    }
  };

  const handleCloseModal = () => {
    setFileUploads([]);
    setPreviewImageURLs([]);
    setUploadedImageURLs([]);
    setShowRoomImageCreate(false);
  };

  const handleSubmit = async () => {
    if (fileUploads.length === 0) {
      toast.error("Please choose at least one image!!!");
      return;
    }
    if (fileUploads.length + listRoomImage > 6) {
      toast.error("You can only add up to 6 images for this tour.");
      return;
    }

    try {
      const imageURLs = await uploadImages();
      const roomImagePromises = imageURLs.map(url => {
        const roomImage = {
          roomImage3DId: 0,
          roomImage3DURL: url,
          roomId: roomId
        };
        return room3DImageService.createRoom3DImage(roomImage);
      });

      await Promise.all(roomImagePromises);
      toast.success("Room 3D Images created successfully");
      handleCloseModal();
      onCreate();
    } catch (error) {
      toast.error("Failed to create room images");
      console.error("Error creating room images:", error);
    }
  };

  useEffect(() => {
    if (showRoomImageCreate) {
      setFileUploads([]);
      setPreviewImageURLs([]);
      setUploadedImageURLs([]);
    }
  }, [showRoomImageCreate]);

  return (
    <>
      <Modal show={showRoomImageCreate} onHide={handleCloseModal} size="lg" centered>
        <Modal.Body className="p-4">
          <h2 className="font-bold pb-4">Add 3D Image Pictures</h2>
          <h4 className="font-bold pb-4">Room 3D Image: {listRoomImage}/6 </h4>
          <div className="flex justify-center flex-wrap">
            {previewImageURLs.length > 0 ? (
              previewImageURLs.map((url, index) => (
                <img
                  key={index}
                  className="max-w-[180px] max-h-[180px] cursor-pointer m-2"
                  src={url}
                  alt="Preview"
                  onClick={() => document.getElementById("fileInput")?.click()}
                />
              ))
            ) : (
              <img
                className="max-w-[180px] max-h-[180px] cursor-pointer m-2"
                src="/image/addpicture.png"
                alt="Click to add image"
                onClick={() => document.getElementById("fileInput")?.click()}
              />
            )}
            <input
              id="fileInput"
              type="file"
              accept="image/*"
              multiple
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

export default CreateRoom3DImage;
