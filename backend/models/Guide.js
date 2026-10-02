const mongoose = require('mongoose');

const guideSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String },
  expertise: { type: String },
  experience_years: { type: Number, default: 0 },
  language: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  price_per_day_np: { type: Number },
  municipality: { type: String },
  available: { type: String, default: 'Yes' },
  description: { type: String },
  certified: { type: String, default: 'No' },
}, { timestamps: true });

module.exports = mongoose.model('Guide', guideSchema);
