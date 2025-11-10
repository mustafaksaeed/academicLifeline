import React, { useState } from "react";
import auth from "../firebaseClient/firebaseClient.config.js";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../contexts/AuthContext";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  // const { setIsLoggedIn } = useContext(AuthContext);

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
  //change to react-cookie

  const onSubmit = async (data) => {
    const { email, password } = data;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const idToken = await userCredential.user.getIdToken();

      const csrfToken = getCookie("csrfToken");

      const response = await fetch("http://localhost:8000/api/login", {
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: idToken,
          csrfToken: csrfToken,
        }),
      });

      if (!response.ok) {
        // Log the status code and try to read the body as text for debugging
        const errorText = await response.text();
        console.error(`HTTP Error: ${response.status} ${response.statusText}`);
        console.error("Server returned:", errorText);

        // Throw an error to jump to the catch block
        throw new Error(`Server login failed with status ${response.status}`);
      }
      await auth.signOut();

      const data = await response.json();
      console.log("data", data);
      console.log("hi");
      setLoading(true);
      // setIsLoggedIn(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login Error:", error);

      // setLoading(false);
    }
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
        </Card>
      </form>
    </div>
  );
};

export default Login;
