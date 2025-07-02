import mongoose from 'mongoose';
import { DatabaseName } from '../constants';

const connectToDatabase = async () => {
  try {
    const url = process.env.MONGODB_URL || `mongodb://localhost:27017`;

    const connectionInstance = await mongoose.connect(`${url}/${DatabaseName}`);
    console.log('Connected to the database:', connectionInstance.connection.name);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectToDatabase;