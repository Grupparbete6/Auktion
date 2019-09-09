import React, { useState } from 'react';
import { Form, Col, Button, Modal } from "react-bootstrap";

export default function Create(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const highestBid = props.highestBid !== undefined ? (
        <Modal.Title>Högsta budet: {props.highestBid} kr</Modal.Title>
    ) : <Modal.Title>Utropspriset: {props.bidPrice} kr</Modal.Title>

    return(
        console.log(props.bidPrice),
        <div>
            <Button className="float-right" variant="outline-info" onClick={handleShow}>Nytt Bud</Button>   
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {highestBid}
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => {props.handlePostBid(e, props.auctionID, props.bidPrice)}}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Summa</Form.Label>
                                    <Form.Control name="sum" type="sum" placeholder="Summa..." />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Budgivare</Form.Label>
                                    <Form.Control name="bidder" type="bidder" placeholder="Budgivare..." />
                                </Form.Group>
                            </Form.Row>
                            <Modal.Footer>
                                <Button variant="primary" type="submit">Lägg bud</Button>
                                <Button variant="secondary" onClick={handleClose}>Stäng</Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
            </Modal>
        </div>
    )
}