import React from 'react';
import './App.css';
import {Header, Menu, Promotions, Membership, Location, Footer} from './containers';
import { Navbar } from './components';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Menu />
      <Promotions />
      <Membership />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
