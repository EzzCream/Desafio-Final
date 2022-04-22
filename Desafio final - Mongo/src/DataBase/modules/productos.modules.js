import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
	fecha: {
		type: String,
		required: true,
		max: 30,
	},
	nombre: {
		type: String,
		required: true,
		max: 30,
	},
	descripcion: {
		type: String,
		required: true,
		max: 50,
	},
	codigo: {
		type: Number,
		required: true,
	},
	url: {
		type: String,
		required: true,
		max: 100,
	},
	precio: {
		type: Number,
		required: true,
	},
	stock: {
		type: Number,
		required: true,
	},
});

export const ProductoModels = mongoose.model('producto', Schema);
