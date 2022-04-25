import mongoose from 'mongoose';

export const establishConnection = () => {
    mongoose.connect(process.env.MONGODB_URL)
}
