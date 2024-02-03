const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const songsSchema = new Schema({
  title: {
    type: string,
  },
  artist: {
    type: string,
  },
  album: {
    type: string,
  },
  generes: {
    type: string,
  },
});
