const mongoose = require('mongoose');

const tripRequestSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  subject: { type: String, default: 'general', trim: true },
  tripDates: { type: String, trim: true },
  destination: { type: String, trim: true },
  travelers: { type: String, default: '2' },
  message: { type: String, required: true, trim: true },
}, { timestamps: true });

module.exports = mongoose.model('TripRequest', tripRequestSchema);