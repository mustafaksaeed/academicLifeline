import { authenticateToken } from "../db/functions.js";
//sessions here
const authorize = async (req, res, next) => {
  if (req.session.isLoggedin) {
    next();
  } else {
    console.log("unauthorized");
    res.status(401).send("Unauthorized");
  }
};

export default authorize;
