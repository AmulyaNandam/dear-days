const express = require("express");
const router = express.Router();

const { signup, login, getProfile } = require("../controllers/authController");
const auth = require("../middleware/auth"); // ✅ FIX

router.post("/register", signup);
router.post("/login", login);

// ✅ NEW ROUTE
router.get("/me", auth, getProfile);

module.exports = router;