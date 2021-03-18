const express = require("express");
const app = express();

const cors = require("cors");

const connectDB = require("./config/db");

const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());

connectDB();

// CORS
const corsOptions = {
  // origin: process.env.ALLOWED_CLIENTS.split(',')
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// Template engine
app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

// Routes
app.use("/api/files", require("./routes/files"));

app.use("/files", require("./routes/show"));

app.use("/files/download", require("./routes/download"));

app.listen(PORT, () => {
  console.log("Listening on port: ", PORT);
});
