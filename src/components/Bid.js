import React from 'react'
import Details from "./Details";

export default class Bid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auction: [],
            bid: []
        };
    }

    handleBidID = async (id) => {
        const auctionID = id;

        const urlBid = `http://nackowskis.azurewebsites.net/api/Bud/2150/${auctionID}`;
        const urlAuction = `http://nackowskis.azurewebsites.net/api/Auktion/2150/${auctionID}`;

        await fetch(urlBid)
            .then(response => response.json())
            .then(result =>
                this.setState({
                    bid: result
                })
            );
        await fetch(urlAuction)
            .then(response => response.json())
            .then(result =>
                this.setState({
                    auction: result
                })
            );
    }

    componentDidMount() {
        this.handleBidID(this.props.match.params.bid_id);
    }

    render() {
        return (
            <div>
                <Details bids={this.state.bid} auctions={this.state.auction}/>
            </div>
        )
    }
}
