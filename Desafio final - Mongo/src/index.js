import express from 'express';
import {
	createCarrito,
	deleteCarrito,
	readCarrito,
} from './DataBase/CRUD/crudCarrito.js';
import {
	addProdCar,
	deleteCarProd,
	deleteProdId,
	readProd,
} from './DataBase/CRUD/crudProdCar.js';
import {
	createProducto,
	deleteProducto,
	readOneProducto,
	readProducto,
	updateProducto,
} from './DataBase/CRUD/crudProducto.js';
const app = express();

app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerProductos = express.Router();
const routerCarrito = express.Router();

const perfil = true;

//* --------------- PRODUCTOS ---------------------

//* ------ Enlistar productos -------
routerProductos.get('/', async (req, res) => {
	try {
		res.status(200).json(await readProducto());
	} catch (error) {
		console.log(error);
	}
});
//* ------ Enlistar producto por id -------
routerProductos.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		res.status(200).json(await readOneProducto(id));
	} catch (error) {
		console.log(error);
	}
});
//* ------ Incorporar productos -------
routerProductos.post('/', (req, res) => {
	try {
		if (perfil == true) {
			const { body } = req;
			createProducto(body);
			res.status(200).send('Producto creado');
		} else {
			res.status(401).send('No autorizado');
		}
	} catch (error) {
		console.log(error);
	}
});
//* ------ Actualizar productos -------
routerProductos.put('/:id', (req, res) => {
	try {
		if (perfil == true) {
			const { id } = req.params;
			const { body } = req;
			updateProducto(id, body);
			res.status(200).send('Producto actualizado');
		} else {
			res.status(401).send('No autorizado');
		}
	} catch (error) {
		console.log(error);
	}
});
//* ------ Borrar productos -------
routerProductos.delete('/:id', (req, res) => {
	try {
		if (perfil == true) {
			const { id } = req.params;
			deleteProducto(id);
			res.status(200).send('Producto borrado');
		} else {
			res.status(401).send('No autorizado');
		}
	} catch (error) {
		console.log(error);
	}
});

//* --------------- CARRITO ---------------------

//* -------- Crear carrito y devuelve id -----------
routerCarrito.post('/', async (req, res) => {
	try {
		res.status(200).json(await createCarrito());
	} catch (error) {
		console.log(error);
	}
});
//* -------- Ver todos los carritos -----------
routerCarrito.get('/', async (req, res) => {
	try {
		res.status(200).json(await readCarrito());
	} catch (error) {
		console.log(error);
	}
});
//* -------- Vaciar carrito y lo elimina -----------
routerCarrito.delete('/:id', (req, res) => {
	try {
		const { id } = req.params;
		deleteCarProd(id);
		deleteCarrito(id);
		res.status(200).send('Carrito vacio y eliminado 😢');
	} catch (error) {
		console.log(error);
	}
});
//* -------- Enlistar productos guardados -----------
routerCarrito.get('/:id/productos', async (req, res) => {
	try {
		const { id } = req.params;
		if ((await readProd(id)) === false) {
			res.status(200).send('No existe productos guardados 😶‍🌫️');
		} else {
			res.status(200).json(await readProd(id));
		}
	} catch (error) {
		console.log(error);
	}
});
//* -------- Incorporar productos por id -----------
routerCarrito.post('/:id/productos/:id_prod', (req, res) => {
	try {
		const { id, id_prod } = req.params;
		addProdCar(id, id_prod);
		res.status(200).send('Producto agregado ❤️');
	} catch (error) {
		console.log(error);
	}
});
//* -------- Eliminar producto por id -----------
routerCarrito.delete('/:id/productos/:id_prod', async (req, res) => {
	try {
		const { id, id_prod } = req.params;
		if ((await deleteProdId(id, id_prod)) === false) {
			res.status(200).send('No existe productos guardados 😢');
		} else {
			res.status(200).send('Producto eliminado 💕');
		}
	} catch (error) {
		console.log(error);
	}
});

app.use('/api/producto', routerProductos);
app.use('/api/carrito', routerCarrito);

const PORT = 8080;
const server = app.listen(PORT, () => {
	console.log(`Server started on http://localhost:8080 ✨`);
});
server.on('error', (err) => console.log(err));
