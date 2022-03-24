import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom'
import axios from 'axios';
import {Container, FormControl, Button,  Form  } from 'react-bootstrap'


const Login = () => {

   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

  const navigate = useNavigate();

  const userData = {
    email,
    password,
  }

  const login = () => {
    
    axios.post('http://localhost:3000/users/login', userData)
   
  }



  return (
    <div className="login">
      
       
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
          />
        </Form.Group>
 
        <Button variant="primary" type="button"
        onClick={ () => {
          login()
          navigate('/createcv')
        }}
        >
          Submit
        </Button>
        <br />
        <br />
        <Button variant="primary"
        onClick={ () => navigate('/register')}
        >
          register
        </Button>
      </Form>

      
    </div>
  )
}

export default Login