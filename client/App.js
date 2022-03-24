import React, { useEffect, useState } from 'react'
import './App.css'
import CvTemplates from './cvTemplates'
import Login from './login'
import Register from './register'
import CreateCv from './createCv'
import {BrowserRouter, Routes, Route, NavLink} from 'react-router-dom'
import {Container, FormControl, Button, Navbar,Offcanvas,Nav, NavDropdown, Form  } from 'react-bootstrap'



const App = () => {

  return (
    <div className="App">
        <BrowserRouter>
        <Navbar bg="light" expand={false}>
          <Container fluid>
            <Navbar.Brand href="">Create your Cv</Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" />
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink to='/'>home</NavLink>
                <NavLink to='/login'>login</NavLink>
                <NavLink to='/register'>register</NavLink>
                <NavLink to='/createcv'>Create cv</NavLink>
                </Nav>
          
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        
          <Routes>
            <Route  path='/' element={ <CvTemplates />}></Route>
            <Route  path='/login' element={<Login />}></Route>
            <Route  path='/register' element={< Register/>}></Route>
            <Route  path='/createcv' element={<CreateCv />}></Route>
          </Routes>
        </BrowserRouter>
    
     

      </div>
    
  )
}

export default App