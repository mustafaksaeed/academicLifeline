import React, { useState } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
// import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { login, currentUser } = useAuth();
  const [fireError, setFireError] = useState("");
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      // navigate("/dashboard");
      console.log("currentUser", currentUser);
      setLoading(true);
    } catch (error) {
      console.log("error", error);
      setFireError(error.message);
      setLoading(false);
      console.log("currentUser");
    }
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>

              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                        message: "Invalid email address",
                      },
                    })}
                  >
                    {errors.email && <span>{errors.email.message}</span>}
                  </Form.Control>
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    {...register("password", {
                      required: "password is required",
                    })}
                  >
                    {errors.password && <span>{errors.password.message}</span>}
                  </Form.Control>
                </Form.Group>
                <span>{fireError}</span>
                <Button disabled={loading} type="submit" className="w-100 mt-4">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Dont have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
