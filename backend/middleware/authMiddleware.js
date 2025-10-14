import { authenticateToken } from "../db/functions.js";

const authorize = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      error: "Unauthorized - Missing or invalid authorization header",
    });
  }

  const token = authHeader.replace("Bearer ", "");
  console.log("token", token);

  try {
    await authenticateToken(token);
    next();
  } catch (error) {
    console.log("middleware error", error);
  }
};

export default authorize;
