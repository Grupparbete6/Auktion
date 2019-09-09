import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table, Collapse } from 'react-bootstrap';


export default function AuctionTable(props) {
    // const [toggle, setToggle] = useState(false);
    // const filterByDate = props.auctions.filter(auktions => {
    //     return Date.parse(auktions.SlutDatum) >= Date.now();
    // })

    // const useToggle = () => {
    //     setToggle(!toggle);
    // }

    return (
        <Table striped bordered hover responsive variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titel</th>
                    <th>Beskrivning</th>
                    <th>Start datum</th>
                    <th>Slut datum</th>
                    <th>Utropspris</th>
                    <th>Skapad av</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.auctions.map(item => (
                        <tr key={item.AuktionID}>
                            <td onClick={props.handleBidID}><Link to={'/' + item.AuktionID}>{item.AuktionID}</Link></td>
                            <td>{item.Titel}</td>
                            <td>{item.Beskrivning}</td>
                            <td>{item.StartDatum.slice(0, 10)}</td>
                            <td>{item.SlutDatum.slice(0, 10)}</td>
                            <td>{item.Utropspris}</td>
                            <td>{item.SkapadAv}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}


{/* <tr>
    <Collapse in={toggle}>
        <div>
            <p>
                Anim pariatur cliche reprehenderit,
                enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred
                nesciunt sapiente ea proident.
                                        </p>
        </div>
    </Collapse>
</tr> */}