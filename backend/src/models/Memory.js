const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    text: {
      type: String,
      required: true,
    },

    // ✅ MULTI-LINE CONTENT
    sentences: {
      type: [String],
      default: [],
    },

    mood: {
      type: String,
    },

    // 🔥 ADD THIS
    date: {
      type: Date,
      default: Date.now,
    },

    media: [
      {
        url: {
          type: String,
        },
        type: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Memory", memorySchema);