"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import hotelService from "@/app/services/hotelService";
import { Button, Form, Modal } from "react-bootstrap";
import { Hotel } from "@mui/icons-material";
import supplierStaffService from "@/app/services/supplierStaffService";

interface Iprops {
  showSupplierStaffUpdate: boolean;
  setShowStaffUpdate: (value: boolean) => void;
  onUpdate: () => void;
  ThisstaffId: number;  
  supplierStaff: ISupplierStaff | null;
  setSupplierStaff: (value: ISupplierStaff | null) => void;
}

function UpdateStaff(props: Iprops) {
  const {showSupplierStaffUpdate, setShowStaffUpdate, onUpdate, ThisstaffId, supplierStaff, setSupplierStaff,} = props;

  const [staffId, setStaffId] = useState<number>(0);
  const [staffName, setStaffName] = useState<string>("");
  const [staffPhoneNumber, setStaffPhoneNumber] = useState<string>("");
  const [staffEmail, setStaffEmail] = useState<string>("");
  const [staffAddress, setStaffAddress] = useState<string>("");
  const [staffPassword, setStaffPassword] = useState<string>("");
  const [status, SetStatus] = useState<boolean>(true);
  const [roleId, setRoleId] = useState<number>(0);

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!staffName) newErrors.staffName = "Staff Name is required";
    if (!staffPhoneNumber) {
      newErrors.staffPhoneNumber = "Staff Phone Number is required";
    } else if (!/0[0-9]{9}/.test(staffPhoneNumber)) {
      newErrors.staffPhoneNumber = "Staff Phone Number must be 10 digits";
    }
    if (!staffAddress) newErrors.staffAddress = "Staff Address is required";    

    return newErrors;
  };

  useEffect(() => {
    if (supplierStaff && supplierStaff.staffId) {
      setStaffId(supplierStaff.staffId)
      setStaffName(supplierStaff.staffName);
      setStaffPhoneNumber(supplierStaff.staffPhoneNumber);
      setStaffEmail(supplierStaff.staffEmail);
      setStaffAddress(supplierStaff.staffAddress);
      setStaffPassword(supplierStaff.staffPassword);   
      setRoleId(supplierStaff.roleId);   
      //setShowStaffUpdate(false);      
    }
  }, [supplierStaff]);  
  
  const handleSubmit = async () => {
    const staffId = ThisstaffId;    
    const supplierId = localStorage.getItem("supplierId");
    // if (!staffName || !staffPhoneNumber || !staffEmail || !staffAddress || !staffPassword ) {
    //   toast.error("Please fill in all fields!!!");
    //   return;
    // } 
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } 
    try {
      const supplierStaff: ISupplierStaff = {
        staffId: Number(ThisstaffId),
        staffName,
        staffPhoneNumber,
        staffEmail,
        staffAddress,
        staffPassword,
        status: true,        
        roleId: 3,
        supplierId: Number(supplierId),
      };
      const response = await supplierStaffService.updateStaff(supplierStaff);
      toast.success("Update Supplier Staff Success");
      handleCloseModal();
      onUpdate();
    } catch (error) {
      toast.error("Failed to update supplier staff");
      console.error("Error updating supplier staff:", error);
    }
  };
  
  const handleCloseModal = () => {
    setStaffName("");
    setStaffPhoneNumber("");
    setStaffEmail("");
    setStaffAddress("");
    setStaffPassword("");  
    setSupplierStaff(null);  
    setShowStaffUpdate(false);
    setErrors({});
  };

  return (
    <>
      <Modal
        className="pt-36"
        show={showSupplierStaffUpdate}
        onHide={() => handleCloseModal()}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formStaffName">
              <Form.Label>Staff Name</Form.Label>

              <Form.Control
                type="text"
                placeholder="Please enter staff name"
                value={staffName}
                onChange={(e) => setStaffName(e.target.value)}
                isInvalid={!!errors.staffName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staffName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffPhone">
              <Form.Label>Staff Phone</Form.Label>
              <Form.Control
                type="text"                
                placeholder="Please enter staff phone number"
                value={staffPhoneNumber}
                onChange={(e) => setStaffPhoneNumber(e.target.value)}
                isInvalid={!!errors.staffPhoneNumber}
              />
               <Form.Control.Feedback type="invalid">
                {errors.staffPhoneNumber}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffEmail">
              <Form.Label>Staff Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter staff email"
                value={staffEmail}
                onChange={(e) => setStaffEmail(e.target.value)}
                readOnly
                style={{background: "#CED1D2", fontWeight: "bold"}}                
              />              
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffAddress">
              <Form.Label>Staff Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff address"
                value={staffAddress}
                onChange={(e) => setStaffAddress(e.target.value)}
                isInvalid={!!errors.staffAddress}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staffAddress}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffPassword">
              <Form.Label>Staff Password</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff password"
                value={staffPassword}
                onChange={(e) => setStaffPassword(e.target.value)}
                readOnly
                style={{background: "#CED1D2", fontWeight: "bold"}}
              />
            </Form.Group>           
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="border" style={{background:"white",color: "black", borderRadius: "10px"}} onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button style={{background:"#305A61"}} onClick={() => handleSubmit()}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UpdateStaff;
