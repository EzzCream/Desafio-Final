import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

mongoose.connect(process.env.MONGO_URI, () => {
	try {
		console.log('Conectados a Mongo 🧡');
	} catch (error) {
		console.log(error);
	}
});

export default mongoose;
