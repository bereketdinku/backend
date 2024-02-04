const express = require("express");
const router = express.Router();
const {
  createSong,
  getAllSongs,
  getRecordById,
  updateRecordById,
  deleteRecordById,
} = require("../controllers/SongController");

// Create a new record
router.post("/", createSong);

// Get all records
router.get("/", getAllSongs);

// Get a single record by ID
router.get("/:id", getRecordById);

// Update a record by ID
router.put("/:id", updateRecordById);

// Delete a record by ID
router.delete("/:id", deleteRecordById);

module.exports = router;
