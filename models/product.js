const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  name: String,
  description: String,
  quantity: Number,
  image: String,
  size: String,
  price: Number
});

module.exports = mongoose.model('Product', movieSchema);
