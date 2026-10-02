const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
  route_name: { type: String, required: true, trim: true },
  start_point: { type: String, required: true },
  end_point: { type: String, required: true },
  distance_km: { type: Number, required: true },
  duration_days: { type: Number, required: true },
  difficulty: { type: String, enum: ['easy', 'moderate', 'hard', 'very_hard'], required: true },
  elevation_gain: { type: Number },
  description: { type: String },
  best_season: { type: String },
  permit_required: { type: String, default: 'No' },
  rating: { type: Number, min: 1, max: 5 },
}, { timestamps: true });

module.exports = mongoose.model('Route', routeSchema);
