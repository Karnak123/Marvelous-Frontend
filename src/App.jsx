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
import Cardlist from "./Cardlist";
import Navigation from './Navigation';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import Homepages from './Homepages';

// import './styles.css'

class Temp extends React.Component {
  render() {
    return React.createElement("h1", null, "asdfgAfdsgf");
  }
}

function App() {
  return (
    // <main>  
    // <h1>MARVEL</h1>
    <div>
  <Navigation />
  <br />
  <div><Temp/></div>
<Cardlist />
<Cardlist />

  </div>
  
    // </main>
  );
}

export default App;