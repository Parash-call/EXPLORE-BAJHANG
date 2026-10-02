const Destination = require('../models/Destination');

exports.getAll = async (req, res, next) => {
  try {
    const { type, difficulty, municipality, search } = req.query;
    let filter = {};
    if (type) filter.type = type;
    if (difficulty) filter.difficulty = difficulty;
    if (municipality) filter.municipality = municipality;
    if (search) filter.name = { $regex: search, $options: 'i' };
    const items = await Destination.find(filter);
    res.json(items);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Destination.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Destination.create(req.body);
    res.status(201).json(item);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Destination.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Destination.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
