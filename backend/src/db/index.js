import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        if (!process.env.DATABASE_URI) {
            throw new Error("DATABASE_URI is missing in .env file");
        }
        const ConnectionInstance = await mongoose.connect(`${process.env.DATABASE_URI}/${DB_NAME}`);

        console.log(`Database connected !! DB Host : ${ConnectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error : ", error);
        process.exit(1);
    }
}

export default connectDB;