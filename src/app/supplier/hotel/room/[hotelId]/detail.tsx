"use client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import roomService from "@/app/services/roomService";

interface IProps {
  showRoomDetail: boolean;
  setShowRoomDetail: (value: boolean) => void;
  roomId: string;
}

function ViewDetailRoom(props: IProps) {
  const { showRoomDetail, setShowRoomDetail, roomId } = props;

  const [roomName, setRoomName] = useState<string>("");
  const [roomNote, setNote] = useState<string>("");
  const [discountPercent, setDiscount] = useState<string>("");
  const [roomDescription, setDescription] = useState<string>("");
  const [roomAvailable, setAvailable] = useState<string>("");
  const [roomPrice, setPrice] = useState<string>("");
  const [roomCapacity, setCapacity] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleCloseModalDetail = async () => {
    setShowRoomDetail(false);
  };

  const ViewDetailRoom = async () => {
    try {
      const roomDetail = await roomService.getRoomById(Number(roomId));
    } catch {}
  };

  return (
    <Modal
      className="modal-xl"
      show={showRoomDetail}
      onHide={() => handleCloseModalDetail()}
      backdrop="static"
      keyboard={false}
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title> Detail Room</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Room Name</Form.Label>
                <Form.Control
                  type="text"
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  isInvalid={!!errors.roomName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomName}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Available</Form.Label>
                <Form.Control
                  type="text"
                  value={roomAvailable}
                  onChange={(e) => setAvailable(e.target.value)}
                  isInvalid={!!errors.roomAvailable}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomAvailable}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Note</Form.Label>
                <Form.Control
                  type="text"
                  value={roomNote}
                  onChange={(e) => setNote(e.target.value)}
                  // isInvalid={!!errors.roomNote}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomNote}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  value={roomPrice}
                  onChange={(e) => setPrice(e.target.value)}
                  isInvalid={!!errors.roomPrice}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomPrice}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Discount Percent</Form.Label>
                <Form.Control
                  type="text"
                  value={discountPercent}
                  onChange={(e) => setDiscount(e.target.value)}
                  //isInvalid={!!errors.discountPercent}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.discountPercent}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Label>Capacity</Form.Label>
                <Form.Control
                  type="text"
                  value={roomCapacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  isInvalid={!!errors.roomCapacity}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomCapacity}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col xs={11}>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={roomDescription}
                  onChange={(e) => setDescription(e.target.value)}
                  //isInvalid={!!errors.roomDescription}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.roomDescription}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ViewDetailRoom;
