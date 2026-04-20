const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
  trackingId: { type: String, required: true, unique: true },
  origin: { type: String, required: true },
  destination: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'In Transit', 'Delayed', 'Delivered'], default: 'Pending' },
  estimatedDelivery: { type: Date },
  currentLocation: { type: String },
  weight: { type: Number },
}, { timestamps: true });

module.exports = mongoose.model('Shipment', shipmentSchema);
