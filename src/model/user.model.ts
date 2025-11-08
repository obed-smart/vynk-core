import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, min: [8, 'Password must be at least 8 characters long'] },
  publicKey: { type: String },
  privateKey: { type: String },
  accountAddress: { type: String },
  deployed: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
