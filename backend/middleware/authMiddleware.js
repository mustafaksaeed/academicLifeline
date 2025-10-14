import { authenticateToken } from "../db/functions";

const authToken = async (req, res, next) => {
  const { uid } = req.body;
  try {
    await authenticateToken(uid);
    next();
  } catch (error) {
    console.log("middleware error", error);
  }
};

export default authToken;
