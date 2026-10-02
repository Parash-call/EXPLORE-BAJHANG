const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true },
  address: { type: String },
  municipality: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  phone: { type: String },
  operating_hours: { type: String },
  available_days: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Facility', facilitySchema);
