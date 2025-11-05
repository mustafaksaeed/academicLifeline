import * as React from "react";

import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/AuthProvider";
// import { useForm } from "react-hook-form";
// import { FirebaseError } from "firebase/app";
// import { NavLink, useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Signup = () => {
  // const [loading, setLoading] = React.useState(false);
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();

  // const navigate = useNavigate();

  // const onSubmit = async () => {
  //   const { email, password } = data;
  //   try {
  //     const response = await fetch("http://localhost:8000/api/signup", {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         email: email,
  //         password: password,
  //       }),
  //     });

  //     const responseData = await response.json();
  //     console.log("Success:", responseData);
  //     setLoading(true);

  //     navigate("/login");

  //     return responseData;
  //   } catch (error) {
  //     setLoading(false);
  //     console.log("error", error);
  //   }
  //   console.log("hi");
  // };

  // const password = watch("password", "value");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100%",
      }}
    >
      <Card variant="outlined" style={{ width: "400px" }}>
        <CardContent
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "2.5rem",
          }}
        >
          <h1 style={{ textAlign: "center" }}>Sign up</h1>
          <Typography variant="h7">Email</Typography>
          <TextField
            id="outlined-helperText"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <Typography variant="h7 ">Password </Typography>
          <TextField
            id="outlined-helperText"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <Typography variant="h7"> ConfirmPassword </Typography>
          <TextField
            id="outlined-helperText"
            defaultValue="Default Value"
            helperText="Some important text"
          />
          <Button variant="contained" style={{ width: "50%" }}>
            Submit
          </Button>
          {/* <div className="w-100" style={{ maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>
        <Typography variant="h6">Email</Typography>
        <Typography variant="h6">Password </Typography>
        <Typography variant="h6"> ConfirmPassword </Typography> */}
          {/*         
            <h2 className="text-center mb-4">Sign Up</h2>

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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must have uppercase, lowercase, number, and special character",
                    },
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                />
                {errors.password && <span>{errors.password.message}</span>}
              </Form.Group>

              <Form.Group id="password-confirm">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  {...register("passwordConfirm", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                />
                {errors.passwordConfirm && (
                  <span>{errors.passwordConfirm.message}</span>
                )}
              </Form.Group>
              <Button disabled={loading} type="submit" className="w-100 mt-3">
                Sign Up
              </Button>
            </Form>
          </Card.Body>
        </Card>



        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
      </div> */}
          {/* </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default Signup;
