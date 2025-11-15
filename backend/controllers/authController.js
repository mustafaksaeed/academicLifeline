import passport from "passport";
import LocalStrategy from "passport-local";
import crypto from "crypto ";

export const register = async (req, res) => {
  const { email, password } = req.body;

  //check if user exists => res.send error
  //if not create new user
  //hashpassword btw too
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  //check if user exists
  //if user exists check if password is correct
  //create new session
  //res.send any errors
};
