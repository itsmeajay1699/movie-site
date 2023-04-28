const routerAuth = require("express").Router();
const {
  registerController,
  loginController,
} = require("../controllers/authController");
const {
  requireSignIn,
} = require("../middlewares/authMiddleware");
routerAuth
  .post("/register", registerController)
  .post("/login", loginController)
  .get("/test", requireSignIn, (req, res) => {
    res.json({ ok: true });
  })

module.exports = { routerAuth };
 