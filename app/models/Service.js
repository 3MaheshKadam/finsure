// models/Service.js
import mongoose from 'mongoose';

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
}, { _id: true });

const serviceSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  subtitle: { type: String },
  description: { type: String, required: true },
  amount: { type: String, required: true },
  rate: { type: String, required: true },
  tenure: { type: String },
  processingTime: { type: String },
  color: { type: String, required: true },
  minRate: { type: Number, required: true },
  maxAmount: { type: Number, required: true },
  minAmount: { type: Number, required: true },
  features: [String], // Store as array of strings
  eligibility: [String],
  documents: [String],
  benefits: [String],
  faqs: [faqSchema],
  useCases: [String],
}, { 
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  },
  toObject: {
    virtuals: true,
    transform: function(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

// Prevent Overwrite model issue in watch mode
if (mongoose.models.Service) {
  delete mongoose.models.Service;
}

const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);

export default Service;