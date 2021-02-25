const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const navStylesSchema = new Schema({
  width: String,
  height: String,
  flexFlow: String,
  minHeight: String,
  image: String,
  size: String,
  price: Number
});

module.exports = mongoose.model('Product', movieSchema);
