import '../config/db.js';
import { CarritoModels } from '../modules/carrito.modules.js';

//* -------------- CREATE -----------------
export async function createCarrito() {
	try {
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		hoy.toUTCString();
		const tiempo = hoy.toUTCString();
		const response = await CarritoModels.create({ fecha: tiempo });
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
}

//* -------------- READ -----------------
export async function readCarrito() {
	try {
		const response = await CarritoModels.find();
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
}

//* -------------- DELETE    -----------------
export async function deleteCarrito(id) {
	try {
		const response = await CarritoModels.deleteOne({ _id: id });
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
