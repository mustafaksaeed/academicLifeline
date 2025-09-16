import React, { useRef } from "react";
import { Form, Button, Card } from "react-bootstrap";
import useAuth from "../contexts/AuthContext";
const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordconRef = useRef();
  const { signup } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          <Form handleSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef}></Form.Control>
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                required
              ></Form.Control>
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordconRef}
                required
              ></Form.Control>
            </Form.Group>
            <Button type="submit" className="w-100 mt-4">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an Account? Log in
      </div>
    </>
  );
};

export default Signup;
