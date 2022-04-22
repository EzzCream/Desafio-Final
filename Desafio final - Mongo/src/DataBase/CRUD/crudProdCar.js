import '../config/db.js';
import { CarrProdModels } from '../modules/ProdCarr.modules.js';

//* Add producto a carrito
export async function addProdCar(idCarr, idProd) {
	try {
		const response = await CarrProdModels.create({
			productoId: idProd,
			carritoId: idCarr,
		});
		console.log(response);
	} catch (error) {
		console.log(error);
	}
}
//* Delete todos los productos con un id
export async function deleteCarProd(idCarr) {
	try {
		const response = await CarrProdModels.deleteMany({ carritoId: idCarr });
		console.log(response);
		return response;
	} catch (error) {
		console.log(error);
	}
}
//* Enlistar productos por el id de carrito
export async function readProd(idCarr) {
	try {
		const value = await CarrProdModels.findOne({ carritoId: idCarr });
		if (!value) {
			console.log('No existe el carrito');
			return false;
		} else {
			const response = await CarrProdModels.find({
				carritoId: idCarr,
			});
			console.log(response);
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}

//* Borrar producto por id
export async function deleteProdId(idCarr, idProd) {
	try {
		const value = await CarrProdModels.findOne({
			productoId: idProd,
			carritoId: idCarr,
		});
		if (!value) {
			console.log('No existe el producto en el carrito');
			return false;
		} else {
			const response = await CarrProdModels.deleteOne({
				productoId: idProd,
				carritoId: idCarr,
			});
			console.log(response);
			return response;
		}
	} catch (error) {
		console.log(error);
	}
}
