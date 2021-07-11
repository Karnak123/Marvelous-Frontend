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

function Cardmade(props) {
  return(
    
  <Card bg={"danger"} text={'white'} className="m-3">
    <Card.Img variant="top" src={props.source} />
    <Card.Body>
      <Card.Title>{props.name}</Card.Title>
    </Card.Body>
  </Card>
  );
}
export default Cardmade;