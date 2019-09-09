import React from 'react';
import Navigation from "./components/Navigation";
import AuctionTable from './components/AuctionTable';
import Details from "./components/Details";
import NewAuction from './components/NewAuction';
import Bid from './components/Bid';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AuctionInfo: [],
      Bid: undefined,
      IsLoaded: false,
      CurrentUser: 'Tom',
      SearchAuction: undefined
    }
  }

  // Async funktion som hämtar data från api till AuctionInfo state
  getData = async () => {
    const url = 'http://nackowskis.azurewebsites.net/api/auktion/2150';
    await fetch(url)
      .then(response => response.json())
      .then(result =>
        this.setState({
          AuctionInfo: result,
          IsLoaded: true
        })
      );
    console.log(this.state.AuctionInfo)
  }

  postData = (e) => {
    e.preventDefault();

    // Hantera felaktig inmatning (validering)

    const url = 'http://nackowskis.azurewebsites.net/api/Auktion/2150';
    const auktionData = {
      "Titel": e.target.titel.value,
      "Beskrivning": e.target.description.value,
      "StartDatum": e.target.start_date.value,
      "SlutDatum": e.target.end_date.value,
      "Gruppkod": "2150",
      "Utropspris": e.target.start_bid.value,
      "SkapadAv": e.target.created_by.value
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(auktionData),
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then((data) => {
      console.log('Request success:');
    })
  }

  componentDidMount() {
    this.getData();
  }

  // Sök callback funktion som hanterar sökning
  onSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.search.value;

    let newData = this.state.AuctionInfo.filter(x => {
      return x.Titel.toLowerCase().includes(searchValue.toLowerCase());
    });

    this.setState({
      SearchAuction: newData
    });
  }

  render() {
    const searchValue = this.state.SearchAuction !== undefined ? (
      <Route exact path="/" render={(props) => <AuctionTable {...props} auctions={this.state.SearchAuction} search={true} />} />
    ) :
      (
        <Route exact path="/" render={(props) => <AuctionTable {...props} auctions={this.state.AuctionInfo} search={false} />} />
      )
    return (
      <Router>
        <div className="App" >
          <Navigation onSearch={this.onSearch} />
          <NewAuction postData={this.postData} />
          {searchValue}
          <Route path="/:bid_id" component={Bid}></Route>
        </div>
      </Router>
    );
  }
}
