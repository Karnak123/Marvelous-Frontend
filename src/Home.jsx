import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Cardmade from "./card";
import Cardlist from "./Cardlist";
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepages from './Homepages';


class Randoms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let temp = [React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": series[index]["title"], "source": series[index]["thumbnail"]["path"] + '/portrait_uncanny.jpg' })]
    return React.createElement("h1", null, "adsfs");
  }
    
}

function Home() {
  return (
    <div>
      <Navigation />
      <br />
      <div>
        <h2>Popular Heroes</h2>
      </div>
      <div>
        <h2>Random Suggestions</h2>
      </div>
      <Randoms />
    </div>
  );
}

export default Home;