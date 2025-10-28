import { verifySession } from "../db/functions.js";
//sessions here
const authorize = async (req, res, next) => {
  const sessionCookie = req.cookies.session || "";

  try {
    await verifySession(sessionCookie);
    console.log("successful verifying cookie");
    res.status(200).send({ message: "successful verifying cookie" });
  } catch (error) {
    console.log("error", error);
    res.status(401).send({ message: "error validating session" });
  }
};

export default authorize;
