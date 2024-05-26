'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import hotelService from "@/app/services/hotelService";
import { Button, Form, Modal } from "react-bootstrap";

interface Iprops {
  showHotelCreate: boolean;
  setShowHotelCreate: (value: boolean) => void;
}

function CreateHotel(props: Iprops) {
  const { showHotelCreate, setShowHotelCreate } = props;

  const [HotelId, setHotelId] = useState<number>();
  const [HotelName, setHotelName] = useState<string>("");
  const [HotelPhone, setHotelPhone] = useState<string>("");
  const [HotelEmail, setHotelEmail] = useState<string>("");
  const [HotelAvatar, setHotelAvatar] = useState<string>("");
  const [HotelFullDescription, setHotelFullDescription] = useState<string>("");
  const [HotelDistrict, setHotelDistrict] = useState<string>("");
  const [HotelCity, setHotelCity] = useState<string>("");
  const [HotelInformation, setHotelInformation] = useState<string>("");

  const handleSubmit = async () => {
    const supplierId = localStorage.getItem("supplierId");
    if (!HotelName || !HotelPhone || !HotelEmail || !HotelFullDescription || !HotelDistrict || !HotelCity || !HotelInformation) {
      toast.error("Please fill in all fields!!!");
      return;
    }

    const hotel = {
      HotelId: 0,
      HotelName,
      HotelPhone,
      HotelEmail,
      HotelAvatar,
      HotelFullDescription,
      HotelDistrict,
      HotelCity,
      HotelInformation,
      Isverify: true, // Default value is true
      SupplierId: Number(supplierId)
    };

    try {
      const response = await hotelService.createHotel(hotel);
      toast.success("Create Hotel Success");
      handleCloseModal();
    } catch (error) {
      toast.error("Failed to create hotel");
      console.error("Error creating hotel:", error);
    }
  };

  const handleCloseModal = () => {
    setHotelId(0);
    setHotelName("");
    setHotelPhone("");
    setHotelEmail("");
    setHotelFullDescription("");
    setHotelDistrict("");
    setHotelCity("");
    setHotelInformation("");
    setShowHotelCreate(false);
  };

  return (
    <>
      <Modal className='pt-36' show={showHotelCreate} onHide={() => handleCloseModal()} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add New Hotel</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formHotelName">
              <Form.Label>Hotel Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel name"
                value={HotelName}
                onChange={(e) => setHotelName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelPhone">
              <Form.Label>Hotel Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel phone"
                value={HotelPhone}
                onChange={(e) => setHotelPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelEmail">
              <Form.Label>Hotel Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter hotel email"
                value={HotelEmail}
                onChange={(e) => setHotelEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelFullDescription">
              <Form.Label>Hotel Full Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel full description"
                value={HotelFullDescription}
                onChange={(e) => setHotelFullDescription(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelDistrict">
              <Form.Label>Hotel District</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel district"
                value={HotelDistrict}
                onChange={(e) => setHotelDistrict(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelCity">
              <Form.Label>Hotel City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel city"
                value={HotelCity}
                onChange={(e) => setHotelCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formHotelInformation">
              <Form.Label>Hotel Information</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter hotel information"
                value={HotelInformation}
                onChange={(e) => setHotelInformation(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateHotel;
