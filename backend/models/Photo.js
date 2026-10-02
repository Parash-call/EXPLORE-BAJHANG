const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  destination_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Destination' },
  photographer: { type: String },
  caption: { type: String },
  file_name: { type: String },
  upload_date: { type: Date, default: Date.now },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

module.exports = mongoose.model('Photo', photoSchema);
