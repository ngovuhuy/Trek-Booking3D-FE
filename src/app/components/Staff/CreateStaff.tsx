"use client";

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
  const { showStaffCreate, setShowStaffCreate, onCreate } = props;
  const [staffName, setStaffName] = useState<string>("");
  const [staffPhoneNumber, setStaffPhoneNumber] = useState<string>("");
  const [staffEmail, setStaffEmail] = useState<string>("");
  const [staffAddress, setStaffAddress] = useState<string>("");
  const [staffPassword, setStaffPassword] = useState<string>("");

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!staffName) newErrors.staffName = "Staff Name is required";
    if (!staffPhoneNumber) {
      newErrors.staffPhoneNumber = "Staff Phone Number is required";
    } else if (!/0[0-9]{9}$/.test(staffPhoneNumber)) {
      newErrors.staffPhoneNumber = "Staff Phone Number must be 10 digits";
    }
    if (!staffEmail) {
      newErrors.staffEmail = "Staff Email is required";
    } else if (!/^([A-Za-z][\w\.\-]+)@([a-z]+)((\.(\w){2,3})+)$/.test(staffEmail)) {
      newErrors.staffEmail = "Staff Email must be a valid format email address";
    }
    if (!staffAddress) newErrors.staffAddress = "Staff Address is required";
    if (!staffPassword) newErrors.staffPassword = "Staff Password is required";

    return newErrors;
  };

  const handleSubmit = async () => {
    const supplierId = localStorage.getItem("supplierId");
    // if (!staffName || !staffPhoneNumber || !staffEmail || !staffAddress || !staffPassword) {
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
        staffId: 0,
        staffName,
        staffPhoneNumber,
        staffEmail,
        staffAddress,
        staffPassword,
        status: true, // Default value is true
        supplierId: Number(supplierId),
        roleId: 3,
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
    setErrors({});
    setShowStaffCreate(false);
  };

  return (
    <>
      <Modal
        className="pt-36"
        show={showStaffCreate}
        onHide={() => handleCloseModal()}
        size="lg"
        backdrop="static"
        keyboard={false}
      >
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
                isInvalid={!!errors.staffName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staffName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffPhoneNumber">
              <Form.Label>Staff Phone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Please enter staff phone number"
                value={staffPhoneNumber}
                onChange={(e: any) => setStaffPhoneNumber(e.target.value)}
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
                onChange={(e: any) => setStaffEmail(e.target.value)}
                isInvalid={!!errors.staffEmail}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staffEmail}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formStaffAddress">
              <Form.Label>Staff Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Please enter staff address"
                value={staffAddress}
                onChange={(e: any) => setStaffAddress(e.target.value)}
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
                onChange={(e: any) => setStaffPassword(e.target.value)}
                isInvalid={!!errors.staffPassword}
              />
              <Form.Control.Feedback type="invalid">
                {errors.staffPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="border"
            style={{
              background: "white",
              color: "black",
              borderRadius: "10px",
            }}
            onClick={() => handleCloseModal()}
          >
            Close
          </Button>
          <Button
            style={{ background: "#305A61" }}
            onClick={() => handleSubmit()}
          >
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSupplierStaff;
