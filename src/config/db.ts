import mongoose from 'mongoose';
import config from '../config/env';


export async function connectDB() {
  try {
    await mongoose.connect(config.db.uri);
    console.log('MongoDB connected successfully');
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('MongoDB connection failed:', error.message);
    } else {
      console.error('MongoDB connection failed:', error);
    }
    process.exit(1);
  }
}
