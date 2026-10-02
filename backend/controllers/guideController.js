const Guide = require('../models/Guide');

exports.getAll = async (req, res, next) => {
  try {
    const { expertise, municipality, certified, search } = req.query;
    let filter = {};
    if (expertise) filter.expertise = { $regex: expertise, $options: 'i' };
    if (municipality) filter.municipality = municipality;
    if (certified) filter.certified = certified;
    if (search) filter.name = { $regex: search, $options: 'i' };
    const items = await Guide.find(filter);
    res.json(items);
  } catch (err) { next(err); }
};

exports.getById = async (req, res, next) => {
  try {
    const item = await Guide.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { next(err); }
};

exports.create = async (req, res, next) => {
  try {
    const item = await Guide.create(req.body);
    res.status(201).json(item);
  } catch (err) { next(err); }
};

exports.update = async (req, res, next) => {
  try {
    const item = await Guide.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json(item);
  } catch (err) { next(err); }
};

exports.remove = async (req, res, next) => {
  try {
    const item = await Guide.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Not found' });
    res.json({ message: 'Deleted' });
  } catch (err) { next(err); }
};
