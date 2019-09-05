import React from 'react';

import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import AuctionList from './components/AuctionList';
import Login from './components/Login';
import AuctionDetails from './components/AuctionDetails';
import CreateAuction from './components/CreateAuction';

export default class App extends React.Component {
  state = {
    AuctionInfo: [],
    CurrentUser: ''
  }

  fetchApi = () => {
    fetch('http://nackowskis.azurewebsites.net/api/auktion/2150')
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      const myData = JSON.stringify(myJson);

      console.log(myData)

      

      console.log("I'm succesful!");
    });
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

    this.fetchApi()

    return (
    <div className="App">
        <div className="container">
          <Header />
          <Login />
          <Search />
          <AuctionList />
          <CreateAuction />
          <AuctionDetails />
        </div>
      </div>
    );
  }
}
