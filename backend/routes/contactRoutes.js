const express = require('express');
const router = express.Router();
const TripRequest = require('../models/TripRequest');

router.post('/', async (req, res, next) => {
  const { name, email, subject, tripDates, destination, travelers, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const request = await TripRequest.create({
      name,
      email,
      subject: subject || 'general',
      tripDates,
      destination,
      travelers,
      message,
    });
    res.status(201).json({ success: true, id: request._id, message: 'Trip request received' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
