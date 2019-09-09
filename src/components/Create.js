import React, { useState } from 'react';
import { Form, Col, Button, Modal } from "react-bootstrap";

export default function Create(props) {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const highestBid = props.hogstaBud !== undefined ? (
        <Modal.Title>Högsta budet: {props.hogstaBud.Summa} kr</Modal.Title>
    ) : <Modal.Title>Utropspriset: {props.utropspris} kr</Modal.Title>

    return(
        <div>
            <Button className="float-right" variant="outline-info" onClick={handleShow}>Nytt Bud</Button>   
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {highestBid}
                </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => {props.handleBudForm(e, props.auktionID, props.utropspris)}}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Summa</Form.Label>
                                    <Form.Control name="summa" type="summa" placeholder="Summa..." />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Budgivare</Form.Label>
                                    <Form.Control name="bidder" type="bidder" placeholder="Bidder..." />
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


// export default function AddBid(props) {
//     const [show, setShow] = useState(false);

//     const handleShow = () => setShow(true);
//     const handleClose = () => setShow(false);

//     const hogstaBudet = props.hogstaBud !== undefined ? (
//         <Modal.Title>Högsta budet: {props.hogstaBud.Summa} kr</Modal.Title>
//     ) : <Modal.Title>Utropspriset: {props.utropspris} kr</Modal.Title>

//     return(
//         <div>
//             <Button className="float-right" variant="primary" onClick={handleShow}>Nytt Bud</Button>   
//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     {hogstaBudet}
//                 </Modal.Header>
//                     <Modal.Body>
//                         <Form onSubmit={(e) => {props.handleBudForm(e, props.auktionID, props.utropspris)}}>
//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="formGridEmail">
//                                     <Form.Label>Summa</Form.Label>
//                                     <Form.Control name="summa" type="summa" placeholder="Summa..." />
//                                 </Form.Group>
//                             </Form.Row>
//                             <Form.Row>
//                                 <Form.Group as={Col} controlId="formGridState">
//                                     <Form.Label>Budgivare</Form.Label>
//                                     <Form.Control as="select" name="budgivare">
//                                         <option>Välj...</option>
//                                         <option>Abbe</option>
//                                         <option>Niya</option>
//                                         <option>Erika</option>
//                                         <option>Filip</option>
//                                     </Form.Control>
//                                 </Form.Group>
//                             </Form.Row>
//                             <Modal.Footer>
//                                 <Button variant="primary" type="submit">Lägg bud</Button>
//                                 <Button variant="secondary" onClick={handleClose}>Stäng</Button>
//                             </Modal.Footer>
//                         </Form>
//                     </Modal.Body>
//             </Modal>
//         </div>
//     )
// }