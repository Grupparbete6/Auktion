import React from 'react';
import { Table, Collapse } from 'react-bootstrap';

export default function AuctionDetails(props) {

    return (
        <Table striped bordered hover responsive variant="dark">
            <thead>
                <tr>
                    <th>BudID</th>
                    <th>AuktionID</th>
                    <th>Budgivare</th>
                    <th>Summa</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.bids.map(item => (
                        <tr>
                            <td>{item.BudID}</td>
                            <td>{item.AuktionID}</td>
                            <td>{item.Budgivare}</td>
                            <td>{item.Summa}</td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    )
}