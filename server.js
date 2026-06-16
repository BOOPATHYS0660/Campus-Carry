require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const userRoutes = require("./routes/userRoutes");
const requestRoutes = require("./routes/requestRoutes");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/requests", requestRoutes);

app.get("/", (req, res) => {
  res.send("CampusCarry Backend Running");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port 5000");
});