const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true },
  address: { type: String },
  municipality: { type: String, required: true },
  latitude: { type: Number },
  longitude: { type: Number },
  price_range_np: { type: String, enum: ['budget', 'mid-range', 'luxury'] },
  rooms: { type: Number, default: 0 },
  capacity: { type: Number },
  rating: { type: Number, min: 1, max: 5 },
  description: { type: String },
  contact: { type: String },
  has_wifi: { type: String, default: 'No' },
  has_hot_water: { type: String, default: 'No' },
  has_parking: { type: String, default: 'No' },
  meals_available: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Hotel', hotelSchema);
