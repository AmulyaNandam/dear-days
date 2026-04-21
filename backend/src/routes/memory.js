const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

const {
  createMemory,
  getMemories,
  updateMemory,
  deleteMemory,
} = require("../controllers/memoryController");

// Routes
router.post("/", auth, upload.array("media"), createMemory);
router.get("/", auth, getMemories);
router.patch("/:id", auth, updateMemory);
router.delete("/:id", auth, deleteMemory);

module.exports = router;