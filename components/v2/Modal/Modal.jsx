import React from 'react';
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';

export default function Modals({isOpen, onToggle, title, children })  {

    return (
        <div>
            <Modal isOpen={isOpen} toggle={onToggle} centered>
                <ModalHeader toggle={onToggle}>{title} </ModalHeader>
                <ModalBody>
                    {children}
                </ModalBody>
            </Modal>
        </div>
    );
}