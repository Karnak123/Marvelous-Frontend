import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import Navbar from "react-bootstrap/Navbar"
import Nav from  "react-bootstrap/Nav"
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Cardmade from "./card";
//import Cardlist from "./Cardlist";
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Homepages from './Homepages';

// import './styles.css'

class Temp extends React.Component {
  render() {
    return React.createElement("h1", null, "asdfgAfdsgf");
  }
}

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {"cid": parseInt(props.character_id)};
  }

  componentDidMount() {
    var component = this;

    fetch(`https://hacktoon.azurewebsites.net/Series/character/${component.state["cid"]}`, {
      "mehtod": "GET",
      "headers": {
        "accept": "*/*"
      }
    })
    .then((resp) => resp.json())
    .then((resp) => {
      component.setState({count: resp.count, series: resp.series});
    })
  }

  render() {
    var count=this.state.count || "";
    var series = this.state.series || "";

    if (typeof(count)===typeof(8)) {
      let temp = [];
      let index = 0;
      for (let i=0; i<4; ++i) {
        let temp1 = [];
        for (let j=0; j<4 && index<count; ++j, ++index) {
          temp1.push(React.createElement(Cardmade, {"source": series[index]["thumbnail"]["path"]+'/portrait_uncanny.jpg'}));
        }
        temp.push(React.createElement(CardDeck, null, temp1));
      }
      return React.createElement("div", null, temp);
    }
    return React.createElement("div", null, React.createElement("img", {"src": "http://i.annihil.us/u/prod/marvel/i/mg/3/40/4bb4680432f73/portrait_uncanny.jpg"}));
  }
}

// ReactDOM.render(React.createElement(CharacterSeries, {character_id: 1017100}), document.getElementById("trial1"));

function App() {
  return (
    // <main>  
    // <h1>MARVEL</h1>
    <div>
  <Navigation />
  <br />
  <div><Temp/></div>
<Cardlist "character_id"="1017100"/>
<Cardlist "character_id"="1017100"/>

  </div>
  
    // </main>
  );
}

export default App;