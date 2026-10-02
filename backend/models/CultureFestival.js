const mongoose = require('mongoose');

const cultureFestivalSchema = new mongoose.Schema({
  festival_name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  location: { type: String, required: true },
  month: { type: String },
  nepali_month: { type: String },
  season: { type: String },
  attendance: { type: Number, default: 0 },
  duration_days: { type: Number },
  tradition: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('CultureFestival', cultureFestivalSchema);
