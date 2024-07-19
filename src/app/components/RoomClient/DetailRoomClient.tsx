"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import roomService from "@/app/services/roomService";
import { mutate } from "swr";
import { toast } from "react-toastify";

interface IProps {
  showRoomDetail: boolean;
  setShowRoomDetail: (value: boolean) => void;
  hotelId: string;
  room: IRoom | null;
  setRoom: (value: IRoom | null) => void;
}

function DetailRoomClient(props: IProps) {
  const { showRoomDetail, setShowRoomDetail, hotelId, room, setRoom } = props;
  const [roomId, setRoomId] = useState<number>(0);
  const [roomName, setRoomName] = useState<string>("");
  const [roomNote, setNote] = useState<string>("");
  const [discountPercent, setDiscount] = useState<string>("");
  const [roomDescription, setDescription] = useState<string>("");
  const [roomAvailable, setAvailable] = useState<string>("");
  const [roomPrice, setPrice] = useState<string>("");
  const [roomCapacity, setCapacity] = useState<string>("");

  const handleCloseModal = async () => {
    setShowRoomDetail(false);
  };

  useEffect(() => {
    if (room && room.roomId) {
      setRoomId(room.roomId);
      setRoomName(room.roomName);
      setNote(room.roomNote);
      setAvailable(room.roomAvailable.toString());
      setPrice(room.roomPrice.toString());
      setCapacity(room.roomCapacity.toString());
      setDiscount(room.discountPercent.toString());
      setDescription(room.roomDescription);
    }
  }, [room]);

  return (
    <Modal
      className="pt-16 "
      show={showRoomDetail}
      onHide={() => handleCloseModal()}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>

      </Modal.Header>
      <Modal.Body className="padding-tour-detail ">
        <Form>
        <Form.Group className="mb-3 col-12" controlId="tourName">
              <div className="">
                <img className='w-full' src="/image/content2.png" alt="" />
              </div>
            </Form.Group>
      
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <div className="row">
          <Form.Group className="mb-3 col-12" controlId="tourName">
            <Form.Label className="font-bold text-xl">Room Name</Form.Label>
            <p className="text-center">{roomName}</p>
          </Form.Group>
          <Form.Group className="mb-3 col-12" controlId="tourPrice">
            <Form.Label className="font-bold text-xl">Room Price</Form.Label>
            <p className="text-center">{roomPrice} $</p>
          </Form.Group>
          
          
          <Form.Group className="mb-3 col-12" controlId="tourDescription">
            <Form.Label className="font-bold text-xl">Description</Form.Label>
            <p >{roomDescription}</p>
          </Form.Group>
        </div>
      </Modal.Footer>
    </Modal>
  );
}

export default DetailRoomClient;
