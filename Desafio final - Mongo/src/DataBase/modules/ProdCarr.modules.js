import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	productoId: {
		type: String,
		required: true,
		max: 30,
	},
	carritoId: {
		type: String,
		required: true,
		max: 30,
	},
});

export const CarrProdModels = mongoose.model('prodcar', Schema);
