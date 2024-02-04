const Song = require("../models/SongModel");
const createSong = async (req, res) => {
  try {
    const newSong = await Song.create(req.body);
    res.status(201).json({ song: newSong });
  } catch (error) {
    console.error("Error creating record:", error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the record" });
  }
};
const getAllSongs = async (req, res) => {
  try {
    const songs = await Song.find();
    res.json({ songs });
  } catch (error) {
    console.error("Error fetching records:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching records" });
  }
};
const getRecordById = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.id);
    if (!song) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json({ song });
  } catch (error) {
    console.error("Error fetching record by ID:", error);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the record" });
  }
};
const updateRecordById = async (req, res, next) => {
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedSong) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json({ record: updatedSong });
  } catch (error) {
    console.error("Error updating record by ID:", error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the record" });
  }
};
const deleteRecordById = async (req, res, next) => {
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    if (!deletedSong) {
      return res.status(404).json({ message: "Record not found" });
    }
    res.json({ message: "Record deleted successfully" });
  } catch (error) {
    console.error("Error deleting record by ID:", error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the record" });
  }
};
module.exports = {
  createSong,
  getAllSongs,
  getRecordById,
  updateRecordById,
  deleteRecordById,
};
