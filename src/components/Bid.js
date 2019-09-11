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

        const urlBid = `http://nackowskis.azurewebsites.net/api/bud/2150/${auctionID}`;
        const urlAuction = `http://nackowskis.azurewebsites.net/api/auktion/2150/${auctionID}`;

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
                }),
            );
    }

    handlePostBid = (e, auctionID, bidPrice, highestBid) => {
        e.preventDefault();



        const url = 'http://nackowskis.azurewebsites.net/api/bud/2150';
        const bidData = {
            "Summa": e.target.sum.value,
            "Budgivare": e.target.bidder.value,
            "AuktionID": auctionID
        };

        if (e.target.sum.value > highestBid && e.target.bidder.value !== "") {

            fetch(url, {
                method: 'POST',
                body: JSON.stringify(bidData),
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                }
            }).then((data) => {
                console.log('Request success:', data);
            })

            alert('Ditt bud har sparats.');
            window.location.reload();
        }
        else if (e.target.sum.value < highestBid || e.target.sum.value.length > 9) {
            alert('Ditt bud har inte sparats pga ett av följande fel: \nDitt bud är lägre än nuvarande bud.\nDitt bud är för stort.');
            return;
        }
        else if (e.target.bidder.value === "") {
            alert('Namn på budgivare krävs.');
            return;
        }
    }

    checkCompleted = () => {
        var currentDate = Date.now()

        if ((Date.parse(this.state.auction.SlutDatum) < currentDate) && this.state.bid.length !== 0) {
            var maxArray = []
            var max = this.state.bid.reduce(function (current, prev) {
                return (prev.SlutDatum > current.SlutDatum) ? prev : current
            });
            maxArray.push(max)

            this.setState({
                bid: maxArray
            })
        }
        else if (this.state.bid.length === 0){
            var bud = {Budgivare: "Inga bud", Summa: 0}
            var budArray = []
            budArray.push(bud)
            this.setState ({
                bid: budArray
            })
        }
    }

    async componentDidMount() {
        await this.handleBidID(this.props.match.params.bid_id);
        this.checkCompleted()
    }

    render() {
        if (this.state.bid.length > 1)
            this.state.bid.sort((a, b) => (a.Summa < b.Summa) ? 1 : ((b.Summa < a.Summa) ? -1 : 0))
        return (
            <div>
                <Details bids={this.state.bid} auctions={this.state.auction} handlePostBid={this.handlePostBid} />
            </div>
        )
    }
}
