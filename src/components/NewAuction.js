import React, { useState } from 'react';
import { Form, Col, Button, Modal } from "react-bootstrap";

export default function NewAuction(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <div>
            <Button className="float-right" variant="outline-info" onClick={handleShow}>Ny auktion</Button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>Skapa en ny auktion här.</Modal.Header>
                <Modal.Body>
                    <Form onSubmit={(e) => {props.postData(e)}}>
                        <Form.Group controlId="formTitel">
                            <Form.Label>Titel</Form.Label>
                            <Form.Control name="titel" type="text" placeholder="Titel" />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Beskrivning</Form.Label>
                            <Form.Control name="description" as="textarea" rows="3" />
                        </Form.Group>
                        <Form.Group controlId="formStartDate">
                            <Form.Label>Start datum</Form.Label>
                            <Form.Control name="start_date" type="text" placeholder="Start datum" />
                        </Form.Group>
                        <Form.Group controlId="formEndDate">
                            <Form.Label>Slut datum</Form.Label>
                            <Form.Control name="end_date" type="text" placeholder="Slut datum" />
                        </Form.Group>
                        <Form.Group controlId="formStarBid">
                            <Form.Label>Utropspris</Form.Label>
                            <Form.Control name="start_bid" type="text" placeholder="Utropspris" />
                        </Form.Group>
                        <Form.Group controlId="formCreatedBy">
                            <Form.Label>Skapad av</Form.Label>
                            <Form.Control name="created_by" type="text" placeholder="Skapad av" />
                        </Form.Group>
                        <Button className="float-right" variant="outline-info" onClick={handleClose}>Stäng</Button>  
                        <Button className="float-right" variant="outline-info" type="submit">Skapa</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}
