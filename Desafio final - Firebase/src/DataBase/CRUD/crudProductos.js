import { query } from '../config/db.js';

export async function createProducto(prod) {
	try {
		const doc = query.doc();
		await doc.create(prod);
	} catch (error) {
		console.log(error);
	}
}

export async function readAllProducto() {
	try {
		let response = await query.get();
		response = response.docs.map((doc) => {
			return {
				id: doc.id,
				descripcion: doc.data().descripcion,
				fecha: doc.data().fecha,
				nombre: doc.data().nombre,
				precio: doc.data().precio,
				stock: doc.data().stock,
				url: doc.data().url,
			};
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function readOneProducto(id) {
	try {
		const doc = query.doc(id);
		const item = await doc.get();
		const response = item.data();
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function updateProducto(id, body) {
	try {
		const doc = query.doc(id);
		const item = await doc.update(body);
		const response = item.data();
		response.id = doc.id;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteProducto(id) {
	try {
		const doc = query.doc(id);
		const item = await doc.delete();
		console.log(item);
	} catch (error) {
		console.log(error);
	}
}
