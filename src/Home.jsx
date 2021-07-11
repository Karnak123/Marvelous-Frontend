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
    let temp = [React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": "Ant-Man (2003) #3", "source": 'http://i.annihil.us/u/prod/marvel/i/mg/d/70/4bc69c7e9b9d7' + '/portrait_uncanny.jpg' }),
    React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": "Official Handbook of the Marvel Universe (2004) #13 (TEAMS)", "source": 'http://i.annihil.us/u/prod/marvel/i/mg/f/20/4bc63a47b8dcb' + '/portrait_uncanny.jpg' }),
    React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": "ULTIMATE X-MEN VOL. 5: ULTIMATE WAR TPB (Trade Paperback)", "source": 'http://i.annihil.us/u/prod/marvel/i/mg/2/f0/4bc6670c80007' + '/portrait_uncanny.jpg' }),
    React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": "Official Handbook of the Marvel Universe (2004) #11 (X-MEN - AGE OF APOCALYPSE)", "source": 'http://i.annihil.us/u/prod/marvel/i/mg/c/b0/4bc6494ed6eb4' + '/portrait_uncanny.jpg' }),
    ]
    return React.createElement(CardDeck, null, temp);
  }
    
}

function Home() {
  return (
    <div>
      <Navigation />
      <br />
      <div>
        <h2>Random Suggestions</h2>
      </div>
      <Randoms />
    </div>
  );
}

export default Home;