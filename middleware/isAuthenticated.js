const isAuthenticated = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
      return res.status(401).json({ message: "Missing Authorization header" });
    }

    const [type, token] = authHeader.split(" ");

    if (type !== "Bearer" || token !== process.env.HEADER_API_KEY) {
      return res
        .status(403)
        .json({ message: "Invalid or missing Bearer token" });
    }

    // Token is valid
    next();
  } catch (error) {
    console.log(`ERROR: isAuthenticated middleware failed: ${error}`);
    return res.status(403).json({ error: "Forbidden" });
  }
};
module.exports = { isAuthenticated };
