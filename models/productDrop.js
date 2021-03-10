const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productDrop = new Schema({
  sku: String,
  name: String,
  price: Number,
  category: String,
  vendor: String,
  model: String,
  gallery: Array,
  color: String,
  weight: String,
  country: String,
  sizes: Array,
});

module.exports = mongoose.model('ProductDrop', productDrop);
