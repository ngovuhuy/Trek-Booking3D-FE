'use client'
import tourService, { createTour, revalidateTours } from '@/app/services/tourService';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../../../node_modules/react-bootstrap/esm/Button';
import Form from '../../../../node_modules/react-bootstrap/esm/Form';
import Modal from '../../../../node_modules/react-bootstrap/esm/Modal';
import useSWR from 'swr'
import { mutate } from '../../../../node_modules/swr/dist/core/index';


interface Iprops {
    showTourCreate: boolean;
setShowTourCreate: (value: boolean) => void;
}
function CreateTour(props: Iprops) {
    // npm i --save-exact react-toastify@9.1.3
    const {showTourCreate, setShowTourCreate} = props;
    const [tourName, setTourName] = useState<string>("");
    const [tourDescription, SetTourDescription] = useState<string>("");
    const [tourPrice, SetTourPrice] = useState<number>(0);
    const [tourAddress, SetTourAddress] = useState<string>("");
    const [tourTime, SetTourTime] = useState<string>("");
    const [tourTransportation, SetTourTransportation] = useState<string>("");
    const [tourCapacity, SetTourCapacity] = useState<number>(0);
    const [status, SetStatus] = useState<boolean>(true);
    const [supplierId, SetSupplierId] = useState<number>(0);


    useEffect(() => {
      const supplierIdFromStorage = localStorage.getItem("supplierId");
      if (supplierIdFromStorage) {
        SetSupplierId(parseInt(supplierIdFromStorage));
      }
    }, []);
    const handleSubmit = async () => {
      if (!tourName || !tourDescription || !tourPrice || !tourAddress || !tourTime || !tourTransportation || !tourCapacity) {
        toast.error("Please fill in all fields!!!");
        return;
      }

      try {
        const response = await createTour(tourName, tourDescription,tourPrice,tourAddress,tourTime,tourTransportation,tourCapacity,status,supplierId);
        if (typeof response === 'string') {
          toast.success(response);
        } else {
          toast.success("Create Tour Success");
        }
        handleCloseModal();
        mutate(revalidateTours)
      } catch (error) {
        toast.error("Failed to create tour");
        console.error(error);
      }
    };

   const handleCloseModal = () => {
    setShowTourCreate(false)
   }
  return (
    <>
      <Modal className='pt-36' show={showTourCreate} onHide={() => handleCloseModal()} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <div className="row">
          <Form.Group className=" mb-3 col-6" controlId="tourName">
            <Form.Label>Tour Name</Form.Label>
            <Form.Control type="text" placeholder="Please enter tour name !!!" value={tourName} onChange={(e) => setTourName(e.target.value)} />
          </Form.Group>
          
           <Form.Group className=" mb-3 col-6" controlId="tourAddress">
            <Form.Label>Tour Address</Form.Label>
            <Form.Control type="text" placeholder="Please enter tour address !!!" value={tourAddress} onChange={(e) => SetTourAddress(e.target.value)} />
          </Form.Group>
           <Form.Group className=" mb-3 col-6" controlId="tourPrice">
            <Form.Label>Tour Price</Form.Label>
            <Form.Control type="number" placeholder="Please enter tour price !!!" value={tourPrice} onChange={(e) => SetTourPrice(parseFloat(e.target.value))} />
          </Form.Group>
           <Form.Group className=" mb-3 col-6" controlId="tourTime">
            <Form.Label>Tour Time</Form.Label>
            <Form.Control type="date" placeholder="Please enter tour time !!!" value={tourTime} onChange={(e) => SetTourTime(e.target.value)} />
          </Form.Group>
           <Form.Group className=" mb-3 col-6" controlId="tourTransportation">
            <Form.Label>Tour Transportation</Form.Label>
            <Form.Control type="text" placeholder="Please enter tour transportation !!!" value={tourTransportation} onChange={(e) => SetTourTransportation(e.target.value)} />
          </Form.Group>
           <Form.Group className=" mb-3 col-6" controlId="tourCapacity">
            <Form.Label>Tour Capacity</Form.Label>
            <Form.Control type="number" placeholder="Please enter tour capacity !!!" value={tourCapacity} onChange={(e) => SetTourCapacity(parseInt(e.target.value))} />
          </Form.Group>
          <Form.Group className=" mb-3 col-6" controlId="tourDescription">
            <Form.Label>Tour Description</Form.Label>
            <Form.Control 
        as="textarea" 
        rows={5} // Bạn có thể điều chỉnh số hàng hiển thị mặc định của textarea
        placeholder="Please enter tour description !!!" 
        value={tourDescription} 
        onChange={(e) => SetTourDescription(e.target.value)} 
      />
          </Form.Group>
           <Form.Group hidden className="mb-3 col-6" controlId="supplierId">
          <Form.Label>Supplier Id</Form.Label>
          <Form.Control
            type="number"
            placeholder="Please enter supplier id !!!"
            value={supplierId}
            onChange={(e) => SetSupplierId(parseInt(e.target.value))}
          />
        </Form.Group>
          </div>
    
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

export default CreateTour;

