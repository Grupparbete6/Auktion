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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AuctionInfo: [],
      IsLoaded: false,
      CurrentUser: ''
    }
  }

  getData = async () => {
    const url = 'http://nackowskis.azurewebsites.net/api/auktion/2150';
    const response = await fetch(url)
      .then(result => result.json());
    this.setState({
      AuctionInfo: response,
      IsLoaded: true
    })
    console.log(this.state.AuctionInfo)
  }

  componentDidMount() {
    this.getData();
  }



  // stateSet = (data) => {
  //   this.setState = ({
  //     AuctionInfo: data
  //   })
  // }

  // FUNCTIONS

  // componentDidMount()
  // GET from API
  // this.setState({ todos: res.data })

  // placeBid()
  // PUT

  // updateAuction()
  // PUT

  // createAuction()
  // POST

  // getAuctions()
  // GET


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
