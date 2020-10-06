import React from 'react';
import './Header.css';
import {Navbar}  from 'react-bootstrap';

export default function Header() {
    return (

      <Navbar>
      <Navbar.Brand className="menageTags" href="/api/tags">Manage Tags</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text className="navBarTitle">
       <div className="main"><a className="mainTitle"href="/api">Seavus Notes</a></div>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    )
 
}