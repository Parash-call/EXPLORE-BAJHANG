const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use('/api/destinations', require('./routes/destinationRoutes'));
app.use('/api/routes', require('./routes/routeRoutes'));
app.use('/api/culture', require('./routes/cultureRoutes'));
app.use('/api/hotels', require('./routes/hotelRoutes'));
app.use('/api/guides', require('./routes/guideRoutes'));
app.use('/api/facilities', require('./routes/facilityRoutes'));
app.use('/api/photos', require('./routes/photoRoutes'));
app.use('/api/sources', require('./routes/sourceRoutes'));
app.use('/api/contact', require('./routes/contactRoutes'));

app.get('/api', (req, res) => {
  res.json({ message: 'Explore Bajhang API is running' });
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
