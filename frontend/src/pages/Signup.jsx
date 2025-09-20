import React from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom"; // <-- ADD THIS IMPORT
import { useAuth } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { signup } = useAuth();
  const { register, handleSubmit } = useForm();

  // async function handleSubmit(e) {
  //   e.preventDefault();

  //   try {
  //     setError("");
  //     setLoading(true);
  //     await signup(emailRef.current.value, passwordRef.current.value);
  //   } catch {
  //     setError("failed to create an account");
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>

              {/* FIXED: 'handleSubmit' changed to 'onSubmit' */}
              <Form
                onSubmit={handleSubmit((data) => {
                  console.log(data);
                })}
              >
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
                <Button disabled={loading} type="submit" className="w-100 mt-4">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an Account?{" "}
            {/* ADDED: The Link component to wrap "Log in" */}
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
