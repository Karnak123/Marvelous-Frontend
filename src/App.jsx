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
import CreatorsList from './CreatorsList.json';
import CharactersList from './CharactersList.json';


var cname = "Hulk";
var cid = CharactersList.characters.find(record => record.name === cname).id;
console.log(cid);

function Bio() {
  return (
    <h1>{cname}</h1>
  );
}

class CharacterSeries extends React.Component {
  constructor(props) {
    super(props);
    this.state = { "cid": props.character_id };
  }

  componentDidMount() {
    var component = this;

    fetch(`https://hacktoon.azurewebsites.net/Series/character/${component.state["cid"]}`, {
      "method": "GET",
      "headers": {
        "accept": "*/*"
      }
    })
      .then((resp) => resp.json())
      .then((resp) => {
        component.setState({ count: resp.count, series: resp.series });
      })
  }

  render() {
    var count = this.state.count || "";
    var series = this.state.series || "";

    if (typeof (count) === typeof (8)) {
      let temp = [];
      let index = 0;
      for (let i = 0; i < 2; ++i) {
        let temp1 = [];
        for (let j = 0; j < 6 && index < count; ++j, ++index) {
          temp1.push(React.createElement(Cardmade, { "bg": "danger", "text": 'white', "className": "m-3", "name": series[index]["title"], "source": series[index]["thumbnail"]["path"] + '/portrait_uncanny.jpg' }));
        }
        temp.push(React.createElement(CardDeck, { "className": "font " }, temp1));
      }
      return React.createElement("div", {"className": "container"}, temp);
    }
    return React.createElement("div", {"className": "container"}, React.createElement("img", { "src": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg" }));
  }
}

function App() {
  return (
    <div>
      <Navigation />
      <br />
      <div>
        <Bio />
      </div>
      <CharacterSeries character_id={cid} />
    </div>
  );
}

export default App;