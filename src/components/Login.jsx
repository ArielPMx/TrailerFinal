import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import {useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navegate = useNavigate();

  const Validacion = () => {
    localStorage.setItem("Entrada", "1")
    navegate("/Trailer");
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Usuario</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <button type="button" onClick={()=>Validacion()}>Login</button>
      </Form>
    </div>
  );
}