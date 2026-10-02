const mongoose = require('mongoose');

const sourceSchema = new mongoose.Schema({
  source_name: { type: String, required: true, trim: true },
  source_type: { type: String },
  author: { type: String },
  publication_date: { type: Date },
  url: { type: String },
  description: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Source', sourceSchema);
