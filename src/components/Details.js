import React from 'react';
import { Table, Button } from 'react-bootstrap';
import NewBid from "./NewBid";

export default function Details(props) {

    const createBid = props.bids.length > 0 ? (
        <NewBid handlePostBid={props.handlePostBid} auctionID={props.auctions.AuktionID} bidPrice={props.auctions.Utropspris} highestBid={props.bids.slice(0)[0].Summa}/>
    ) : (
        <NewBid handlePostBid={props.handlePostBid} auctionID={props.auctions.AuktionID} bidPrice={props.auctions.Utropspris}/>
    )

    return (
        <div>
            {createBid}
            <Table striped bordered hover responsive variant="dark">
                <thead>
                    <tr>
                        <th>Budgivare</th>
                        <th>Summa</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.bids.map(item => (
                            <tr key={item.BudID}>
                                <td>{item.Budgivare}</td>
                                <td>{item.Summa}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}