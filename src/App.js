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
    // Används inte just nu, men bör finnas med så vi vet när data har hämtats
    IsLoaded = false,
    CurrentUser: ''
  }

  componentDidMount() {
    fetch('http://nackowskis.azurewebsites.net/api/auktion/2150')
      .then(res => res.json())
      .then(json => {
        this.setState({
          AuctionInfo: json,
        })
      })
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
    console.log(this.state.AuctionInfo)
    return (
      <div className="App" >
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
