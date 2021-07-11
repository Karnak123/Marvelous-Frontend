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

function Homepage() {
  return(
    
    <CardDeck className="font ">
  <Cardmade />
    <Cardmade name="Avengers" source ="https://parade.com/wp-content/uploads/2020/03/avengers-marvel.jpg"/>
    <Cardmade />
    <Cardmade name="Black Widow" source ="https://parade.com/wp-content/uploads/2020/03/avengers-marvel.jpg"/>
    <Cardmade />
    <Cardmade />
</CardDeck>
  );
}
export default Homepage;