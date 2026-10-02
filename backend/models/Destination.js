const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  district: { type: String, default: 'Bajhang' },
  municipality: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  altitude_m: { type: Number },
  area_sq_km: { type: Number },
  difficulty: { type: String, enum: ['easy', 'moderate', 'hard', 'very_hard'] },
  best_season: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Destination', destinationSchema);
