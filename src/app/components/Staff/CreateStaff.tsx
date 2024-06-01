'use client';

import { useState } from "react";
import { toast } from "react-toastify";
import hotelService from "@/app/services/hotelService";
import { Button, Form, Modal } from "react-bootstrap";
import supplierStaffService from "@/app/services/supplierStaffService";

interface Iprops {
  showStaffCreate: boolean;
  setShowStaffCreate: (value: boolean) => void;
  onCreate: () => void;
}

function CreateSupplierStaff(props: Iprops) {
  const { showStaffCreate, setShowStaffCreate, onCreate} = props;


  const [staffName, setStaffName] = useState<string>("");
  const [staffPhoneNumber, setStaffPhoneNumber] = useState<string>("");
  const [staffEmail, setStaffEmail] = useState<string>("");
  const [staffAddress, setStaffAddress] = useState<string>("");
  const [staffPassword, setStaffPassword] = useState<string>("");

  const handleSubmit = async () => {
    const supplierId = localStorage.getItem("supplierId");
    if (!staffName || !staffPhoneNumber || !staffEmail || !staffAddress || !staffPassword) {
      toast.error("Please fill in all fields!!!");
      return;
    }

    try {
      const supplierStaff: ISupplierStaff= {
        staffId: 0,
        staffName,
        staffPhoneNumber,
        staffEmail,
        staffAddress,
        staffPassword,            
        status: true, // Default value is true
        supplierId: Number(supplierId),
        roleId: 3
      };
      const response = await supplierStaffService.createStaff(supplierStaff);
      toast.success("Create Supplier Staff Success");
      handleCloseModal(); 
      onCreate();     
    } catch (error) {
      toast.error("Failed to create supplier staff");
      console.error("Error creating supplier staff:", error);
    }
  };

  const handleCloseModal = () => {
    setStaffName("");
    setStaffPhoneNumber("");
    setStaffEmail("");
    setStaffAddress("");
    setStaffPassword("");    
    setShowStaffCreate(false);
  };

  return (
    <>
      <Modal className='pt-36' show={showStaffCreate} onHide={() => handleCloseModal()} size='lg' backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formStaffName">
              <Form.Label>Staff Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff name"
                value={staffName}
                onChange={(e: any) => setStaffName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffPhoneNumber">
              <Form.Label>Staff Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff phone number"
                value={staffPhoneNumber}
                onChange={(e: any) => setStaffPhoneNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffEmail">
              <Form.Label>Staff Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter staff email"
                value={staffEmail}
                onChange={(e: any) => setStaffEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffAddress">
              <Form.Label>Staff Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff address"
                value={staffAddress}
                onChange={(e: any) => setStaffAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffPassword">
              <Form.Label>Staff Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff password"
                value={staffPassword}
                onChange={(e: any) => setStaffPassword(e.target.value)}
              />
            </Form.Group>            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="border" style={{background:"white",color: "black", borderRadius: "10px"}} onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button style={{background:"#305A61"}} onClick={() => handleSubmit()}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSupplierStaff;
