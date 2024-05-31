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
    showTourImageCreate: boolean;
    setShowTourImageCreate: (value: boolean) => void;
}
function CreateTourImage(props: Iprops) {
    // npm i --save-exact react-toastify@9.1.3
    const {showTourImageCreate, setShowTourImageCreate} = props;
    const [tourImageURL, setTourImageURL] = useState<string>("");
    const [TourId, setTourId] = useState<number>(0);
    const handleSubmit = async () => {
      if (!tourImageURL || !TourId) {
        toast.error("Please fill in all fields!!!");
        return;
      }
      try {
         const response = ""
        if (typeof response === 'string') {
          toast.success(response);
        } else {
          toast.success("Create Tour Image Success");
        }
        handleCloseModal();
        mutate(revalidateTours)
      } catch (error) {
        toast.error("Failed to create tour image");
        console.error(error);
      }
    };

   const handleCloseModal = () => {
    setShowTourImageCreate(false)
   }
  return (
    <>
      <Modal className='pt-36' show={showTourImageCreate} onHide={() => handleCloseModal()} size='lg'>
    
        <div className="p-16">
        <Modal.Body className='p-16'>
            <h2 className='font-bold pb-4'>Add Image picture</h2>
            <img className='md:pb-4' src="/image/addpicture.png" alt="" />
          <div className="flex justify-end">
          <button  className='mr-2 btn-exit-tour font-semibold' onClick={() => handleCloseModal()}>
            Exit
          </button>
          <button className='btn-save-tour font-semibold'  onClick={() => handleSubmit()}>
            Save
          </button>
          </div>
        </Modal.Body>
        </div>
      </Modal>
    </>
  );
}

export default CreateTourImage;

