import React, { useContext } from "react";
import { Form, Button, Card, Container, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebaseClient/firebaseClient.config";
import AuthContext from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  console.log("currentUser", currentUser);
  // const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const token = await credentials.user.getIdToken();
      const response = await fetch("http://localhost:8000/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: token,
        }),
      });

      const responseData = await response.json();
      console.log("Success:", responseData);

      // setLoading(true);
    } catch (error) {
      // setLoading(false);
      <Navigate to="/signup" />;
      console.log("error", error);
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

                <Button type="submit" className="w-100 mt-4">
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

//  fetch(endpoint, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(bookData),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("Book added successfully:", data);
//       event.target.reset(); // Reset the form after successful submission
//       navigate("/"); // Navigate back to the home page
//     })
//     .catch((error) => {
//       console.error("Error adding book:", error);
//     });
// };
