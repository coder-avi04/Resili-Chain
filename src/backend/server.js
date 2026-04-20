require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
// By default we use an in-memory or fallback URI if not specified.
// For local testing without MongoDB installed, you could mock this or provide a MongoDB Atlas URI.
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/resilichain';

/* 
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch(err => console.log('MongoDB connection error: ', err));
*/

// Routes
const shipmentsRouter = require('./routes/shipments');
const alertsRouter = require('./routes/alerts');
const analyticsRouter = require('./routes/analytics');
const routeOptimizationRouter = require('./routes/routeOptimization');
const aiPredictionsRouter = require('./routes/aiPredictions');

app.use('/api/shipments', shipmentsRouter);
app.use('/api/alerts', alertsRouter);
app.use('/api/analytics', analyticsRouter);
app.use('/api/route-optimization', routeOptimizationRouter);
app.use('/api/ai-predictions', aiPredictionsRouter);

// Demo Requirements Endpoints
app.post('/login', (req, res) => {
  res.json({ token: 'dummy.jwt.token.login.123' });
});

app.post('/signup', (req, res) => {
  res.json({ token: 'dummy.jwt.token.signup.123', message: 'User created successfully' });
});

app.get('/dashboard', (req, res) => {
  res.json({
    shipments: 1284,
    delays: 24,
    efficiency: 92
  });
});

app.post('/optimize-route', (req, res) => {
  res.json({
    timeSaved: "42 min",
    fuelSaved: "12%"
  });
});

// Root-level mounts for Demo APIs to match exact path requirements
app.use('/shipments', shipmentsRouter);
app.use('/alerts', alertsRouter);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'ResiliChain API is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
