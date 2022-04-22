import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	fecha: {
		type: String,
		required: true,
		max: 30,
	},
});

export const CarritoModels = mongoose.model('carrito', Schema);
