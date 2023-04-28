const jwt = require("jsonwebtoken");
const requireSignIn = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(302).json({ error: "Invalid token" });
  }
};

module.exports = { requireSignIn };
