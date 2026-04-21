const Memory = require("../models/Memory");
const cloudinary = require("../utils/cloudinary");

// Upload helper
const uploadToCloudinary = (buffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "auto" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    );
    stream.end(buffer);
  });
};

// CREATE MEMORY
const createMemory = async (req, res) => {
  try {
    let mediaArray = [];

    // Upload files
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await uploadToCloudinary(file.buffer);

        mediaArray.push({
          url: result.secure_url,
          type: result.resource_type,
        });
      }
    }

    // Parse sentences safely
    let sentences = [];
    if (req.body.sentences) {
      try {
        sentences = JSON.parse(req.body.sentences);
      } catch (e) {
        console.log("Sentence parse error:", e);
      }
    }

    const memory = new Memory({
      user: req.user?.id,
      text: req.body.text,
      sentences: sentences,
      mood: req.body.mood,
      media: mediaArray,
      date: req.body.date ? new Date(req.body.date) : new Date(),
    });

    await memory.save();

    res.status(201).json(memory);

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};

// GET MEMORIES
const getMemories = async (req, res) => {
  try {
    const memories = await Memory.find({ user: req.user?.id })
      .sort({ createdAt: -1 });

    res.json(memories);

  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE MEMORY (ADDED)
const updateMemory = async (req, res) => {
  try {
    const updated = await Memory.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updated);

  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE MEMORY
const deleteMemory = async (req, res) => {
  try {
    await Memory.findByIdAndDelete(req.params.id);
    res.json({ msg: "Deleted" });

  } catch (err) {
    res.status(500).json(err);
  }
};

// EXPORT
module.exports = {
  createMemory,
  getMemories,
  updateMemory,
  deleteMemory,
};