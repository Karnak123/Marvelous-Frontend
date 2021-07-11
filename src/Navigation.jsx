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



function Navigation(props) {
  return (

    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">MARVEL</Navbar.Brand>
        <Nav className="mr-auto">

        </Nav>
        <Form inline className="p-3" action="https://dutifulknowledgeableequations.sagnikmazumdar.repl.co/character.html" target="_blank">
          <FormControl type="text" placeholder="Search by Character" className="mr-sm-2" />
          <Button onclick="window.location.href = 'https://website.com/my-account';" variant="danger">Search </Button>
        </Form>
        <Form inline className="p-3">
          <FormControl type="text" placeholder="Search by Creator" className="mr-sm-2" />
          <Button variant="danger">Search</Button>
        </Form>
        <Form inline className="p-3">
          <FormControl type="text" placeholder="Search by Comics" className="mr-sm-2" />
          <Button variant="danger">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}
export default Navigation;