import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

// FUNCTIONS

// sortAuctionArray()

// selectAuction()

export default function Home(props) {
    return (
        <Table striped bordered hover variant="dark" responsive>
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
                            <td>{item.AuktionID}</td>
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