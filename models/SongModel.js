const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songsSchema = new Schema({
  title: {
    type: String,
  },
  artist: {
    type: String,
  },
  album: {
    type: String,
  },
  generes: {
    type: String,
  },
});
const Song = mongoose.model("Song", songsSchema);
module.exports = Song;