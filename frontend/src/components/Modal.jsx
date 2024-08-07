import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './modal.css';

export const CustomModal = ({ handleClose }) => {
  return (
    <div className="modal-backdrop">
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Body className="modal-body">
            <i style={{ fontSize: 60, color: 'green' }} className="fa-solid fa-circle-check"></i>
            <h3>Payment Successful</h3>
            <p>Your order has been confirmed!</p>
          </Modal.Body>
          <Modal.Footer className='justify-content-center'>
            <Button href="/" onClick={handleClose} variant="dark">
              Continue Shopping
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  );
};
