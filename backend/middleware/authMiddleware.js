import { authenticateToken } from "../db/functions.js";

const authorize = async (req, res, next) => {
  const { token } = req.body;
  try {
    await authenticateToken(token);
    next();
  } catch (error) {
    console.log("middleware error", error);
  }
};

export default authorize;
