import React from 'react';
import './App.css';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import Header from './components/layout/Header';
import Search from './components/Search';
import Login from './components/Login';
import AuctionDetails from './components/AuctionDetails';
import CreateAuction from './components/CreateAuction';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const url = 'http://nackowskis.azurewebsites.net/api/auktion/2150/';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AuctionInfo: [],
      IsLoaded: false,
      CurrentUser: ''
    }
  }

  // Såg så rörigt ut med denna, kanske finns en bättre lösning. La urlen längst upp så länge

  // url = () => {
  //   return "http://nackowskis.azurewebsites.net/api/auktion/2150/";
  // }

  // GET
  getData = async () => {
    const response = await fetch(url)
      .then(result => result.json());
    this.setState({
      AuctionInfo: response,
      IsLoaded: true
    })
    console.log(this.state.AuctionInfo)
  }

  // GET Auction by Id
  getAuctionById = async (id) => {
    const response = await fetch(url + id)
      .then(result => result.json())
    console.log(response)
  }

  // GET Bid by Auction Id
  getBidByAuctionId = async (id) => {
    var urlBid = url.replace("auktion", "bud")

    const response = await fetch(urlBid + id)
      .then(result => result.json())
    console.log(response)
  }

  // POST Auction
  createAuction = async () => {
    
    // Bör komma utifrån
    var dummyObject = {
      Titel: "TestAuktion",
      Beskrivning: "Test från 1700-talet",
      SkapadAv: "Test Exempelsson",
      Gruppkod: 2150,
      StartDatum: "2019-09-03T00:00:00",
      SlutDatum: "2019-09-13T00:00:00",
    };

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(dummyObject),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  // POST Bid
  placeBid = async (id) => {
    var urlBid = url.replace("auktion", "bud")
    // Bör komma utifrån
    var newBid = {
      AuktionId: id,
      Summa: 999
    }

    fetch(urlBid, {
      method: 'POST',
      body: JSON.stringify(newBid),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  // DELETE Auction
  deleteAuction = async (id) => {
    fetch(url + id, {
      method: 'DELETE',
    }).then(response => response.json())
      .then(response => console.log('Success:', JSON.stringify(response)))
      .catch(error => console.error('Error:', error));
  }

  componentDidMount() {
    this.getData();
    this.getAuctionById(4230);
    this.getBidByAuctionId(4230);

    // this.placeBid(4231);

    //this.createAuction();
    // this editAuction() <-- INTE IMPLEMENTERAD
    //this.deleteAuction(4349)
  }


  render() {
    return (
      <div className="App" >
        <div className="container">
          <Router>
            <Navigation />
            <Route exact path="/" render={(props) => <Home {...props} auctions={this.state.AuctionInfo} />} />
          </Router>

          <Header />
          <Login />
          <Search />
          <CreateAuction />
          <AuctionDetails />
        </div>
      </div>
    );
  }
}
