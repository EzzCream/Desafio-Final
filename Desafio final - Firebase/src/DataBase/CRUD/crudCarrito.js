import { queryCar } from '../config/db.js';

export async function createCarrito() {
	try {
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		hoy.toUTCString();
		const tiempo = hoy.toGMTString();
		const doc = queryCar.doc();
		await doc.create({ fecha: tiempo });
		const { _path } = doc;
		return _path.segments;
	} catch (error) {
		console.log(error);
	}
}

export async function readAllCarrito() {
	try {
		let response = await queryCar.get();
		response = response.docs.map((doc) => {
			return {
				id: doc.id,
				fecha: doc.data().fecha,
			};
		});
		return response;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteCarrito(id) {
	try {
		const doc = queryCar.doc(id);
		const item = await doc.delete();
		console.log(item);
	} catch (error) {
		console.log(error);
	}
}
