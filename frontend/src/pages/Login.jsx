import React, { useState, useContext } from "react";
import auth from "../firebaseClient/firebaseClient.config";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { setIsLoggedIn } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
    return null;
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const idToken = await userCredential.user.getIdToken();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "X-CSRFToken": getCookie("csrftoken"),
        },
        body: JSON.stringify({
          token: idToken,
          csrfToken: getCookie("csrftoken"),
        }),
      });

      await auth.signOut();

      // if (!response.ok) {
      //   const errorText = await response.text();
      //   throw new Error(errorText || `HTTP Error: Status ${response.status}`);
      // }
      const info = await response.json();
      console.log("response data", info);

      setLoading(true);
      setIsLoggedIn(true);
    } catch (error) {
      setLoading(true);
      setIsLoggedIn(false);
      console.log("error", error);
    }
  };

  return (
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
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && <span>{errors.email.message}</span>}
              </Form.Group>
              <Form.Group id="password">
                <Form.Label> Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Please put in a password",
                  })}
                />
                {errors.passwordConfirm && (
                  <span>{errors.passwordConfirm.message}</span>
                )}
              </Form.Group>
              <Button disabled={loading} type="submit" className="w-100 mt-3">
                Login
              </Button>
            </Form>
          </Card.Body>
        </Card>

        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="/login">Signup</Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;

/*







*/
