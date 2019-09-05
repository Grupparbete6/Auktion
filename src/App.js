import React from 'react';

import './App.css';
import Header from './components/layout/Header';
import Search from './components/Search';
import AuctionList from './components/AuctionList';
import Login from './components/Login';
import AuctionDetails from './components/AuctionDetails';
import CreateAuction from './components/CreateAuction';

function App() {
  /*
  state = {
    AuctionInfo: [],
    CurrentUser: ''
  }
  */

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

export default App;
