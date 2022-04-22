import '../config/db.js';
import { ProductoModels } from '../modules/productos.modules.js';

//* -------------- CREATE -----------------
export async function createProducto(data) {
	try {
		const response = await ProductoModels.create([data]);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

//* -------------- READ -----------------
export async function readProducto() {
	try {
		const response = await ProductoModels.find();
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
}
export async function readOneProducto(id) {
	try {
		const response = await ProductoModels.findOne({ _id: id });
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
}

//* -------------- UPDATE -----------------
export async function updateProducto(id, data) {
	try {
		const response = await ProductoModels.updateOne({ _id: id }, data);
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}

//* -------------- DELETE -----------------
export async function deleteProducto(id) {
	try {
		const response = await ProductoModels.deleteOne({ _id: id });
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
