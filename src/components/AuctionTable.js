import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Table, Collapse } from 'react-bootstrap';


export default function AuctionTable(props) {

    // Om search är true visar den all data (även de som gått ut) annars visas bara de som ej gått ut än.
    const showOnlyPresentDate = props.auctions.filter(item => {
        return props.search === true ? props.auctions : (Date.parse(item.SlutDatum) >= Date.now() ? (item) : null)
    })

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
                    showOnlyPresentDate.map(item => (
                        <tr key={item.AuktionID}>
                            <td onClick={props.handleBidID}><Link to={'/' + item.AuktionID}>{item.AuktionID}</Link></td>
                            <td>{item.Titel}</td>
                            <td>{item.Beskrivning}</td>
                            <td>Datum: {item.StartDatum.slice(0, 10)} Tid: {item.StartDatum.slice(12, 16)}</td>
                            <td>Datum: {item.SlutDatum.slice(0, 10)} Tid: {item.SlutDatum.slice(12, 16)}</td>
                            <td>{item.Utropspris}</td>
                            <td>{item.SkapadAv}</td>
                        </tr>))
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