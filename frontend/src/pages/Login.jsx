import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import AuthContext from "../contexts/AuthContext";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Login = () => {
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();
  // const { setIsLoggedIn } = useContext(AuthContext);
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const responseData = await response.json();
      console.log("Success:", responseData);
      setLoading(true);

      // navigate("/login");

      setServerMessage(responseData);
    } catch (error) {
      setLoading(false);
      console.log("error", error);
    }
    console.log("hi");
  };

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
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card variant="outlined" style={{ width: "400px" }}>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "2.5rem",
            }}
          >
            <h1 style={{ textAlign: "center" }}>Login</h1>
            <Typography variant="h7">Email</Typography>
            <TextField
              id="outlined-helperText"
              defaultValue=""
              helperText={errors.email && errors.email.message}
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <Typography variant="h7 ">Password </Typography>
            <TextField
              id="outlined-helperText"
              defaultValue=""
              helperText={errors.password && errors.password.message}
              type="password"
              {...register("password", {
                required: "Please put in a password",
              })}
            />
            <Button
              disabled={loading}
              variant="contained"
              style={{ width: "50%" }}
              type="submit"
            >
              Submit
            </Button>
          </CardContent>
          <span>{serverMessage}</span>
        </Card>
      </form>
    </div>
  );
};

export default Login;
