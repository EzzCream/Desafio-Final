import { queryCarProd } from '../config/db.js';

export async function createCarProd(idCarr, idProd) {
	try {
		const doc = queryCarProd.doc();
		await doc.create({ id_carrito: idCarr, id_producto: idProd });
	} catch (error) {
		console.log(error);
	}
}

export async function listProdCar(id) {
	try {
		let response = await queryCarProd.get();
		response = response.docs.map((doc) => {
			return {
				id: doc.id,
				id_carrito: doc.data().id_carrito,
				id_producto: doc.data().id_producto,
			};
		});
		const elem = [];
		response.map((obj) => {
			if (id == obj.id_carrito) {
				elem.push(obj);
			}
		});
		return elem;
	} catch (error) {
		console.log(error);
	}
}

export async function deleteProdCar(id, id_prod) {
	try {
		let response = await queryCarProd.get();
		response = response.docs.map((doc) => {
			return {
				id: doc.id,
				id_carrito: doc.data().id_carrito,
				id_producto: doc.data().id_producto,
			};
		});
		response.map(async (obj) => {
			if (id == obj.id_carrito && id_prod == obj.id_producto) {
				const { id, id_carrito, id_producto } = obj;
				const doc = queryCarProd.doc(id);
				const item = await doc.delete();
				return item;
			}
		});
	} catch (error) {
		console.log(error);
	}
}

export async function vaciar(id) {
	try {
		let response = await queryCarProd.get();
		response = response.docs.map((doc) => {
			return {
				id: doc.id,
				id_carrito: doc.data().id_carrito,
				id_producto: doc.data().id_producto,
			};
		});
		response.map(async (obj) => {
			if (id == obj.id_carrito) {
				const { id, id_carrito, id_producto } = obj;
				const doc = queryCarProd.doc(id);
				const item = await doc.delete();
				return item;
			}
		});
	} catch (error) {
		console.log(error);
	}
}
