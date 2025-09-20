import React from "react";
import { Form, Button, Card, Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useForm } from "react-hook-form";

const Signup = () => {
  const { signup } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
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
              {errors.name && errors.multipleErrorInput.type === "required" && (
                <span>This is required</span>
              )}
              {errors.name &&
                errors.multipleErrorInput.type === "maxLength" && (
                  <span>Max length exceeded</span>
                )}
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control {...register("email")}></Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    id="password"
                    {...register("multipleErrorInput", {
                      required: "This is required.",
                      pattern: {
                        value:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                        message:
                          "password must have at least one uppercase letter, one lowercase letter, one number and one special character",
                      },
                      minLength: {
                        value: 10,
                        message: "input must be atleast 8 characters",
                      },
                    })}
                  ></Form.Control>
                  <span>hi</span>
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password-confirm", {
                      required: true,
                      pattern: {
                        pattern:
                          "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$",
                        message:
                          "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character",
                      },
                    })}
                  ></Form.Control>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an Account? <Link to="/login">Log In</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;

/*
Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:

      
        

*/
