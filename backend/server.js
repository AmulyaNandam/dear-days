const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./src/config/db");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ FIXED PATHS
app.use("/api/auth", require("./src/routes/auth"));
app.use("/api/memories", require("./src/routes/memory"));

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));