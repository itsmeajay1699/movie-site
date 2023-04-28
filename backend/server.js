const app = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const { connectDB } = require("./config/db");
require("dotenv").config();
const { routerAuth } = require("./routes/userRoutes");
const server = app();

// connect to database
connectDB();

server.use(morgan("dev")); 
server.use(app.json());
server.use(cors()); 

// routes
server.use("/api/v1/auth", routerAuth);
var PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
