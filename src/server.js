const express = require('express');
const app = express();
const { engine } = require('express-handlebars');
app.use(express.static('public'));
const fs = require('fs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerProductos = express.Router();
const routerCarrito = express.Router();

const perfil = true;

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.engine(
	'hbs',
	engine({
		extname: '.hbs',
		defaultLayout: 'index.hbs',
		layoutsDir: __dirname + '/views/layout',
		partialsDir: __dirname + '/views/partials',
	}),
);

//* --------- Clase productos -------------
class Producto {
	constructor(producto) {
		this._producto = producto;
		this._producto = [
			{
				nombre: 'Producto1',
				descripcion: 'Descipcion producto1',
				codigo: 'url',
				precio: 50,
				stock: 50,
				fecha: 'fecha',
				id: 1,
			},
			{
				nombre: 'Producto2',
				descripcion: 'Descipcion producto2',
				codigo: 'url',
				precio: 50,
				stock: 50,
				fecha: 'fecha',
				id: 2,
			},
			{
				nombre: 'Producto3',
				descripcion: 'Descipcion producto3',
				codigo: 'url',
				precio: 50,
				stock: 50,
				fecha: 'fecha',
				id: 3,
			},
		];
	}

	get producto() {
		return this._producto;
	}
	async addProducto(producto) {
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		hoy.toUTCString();
		const tiempo = hoy.toUTCString();
		const producto1 = producto;
		let id = 1;
		this._producto.map(() => {
			return id++;
		});
		producto1.fecha = tiempo;
		producto1.id = id;
		this._producto.push(producto1);
		await fs.promises.writeFile(
			'DesafioFinal.txt',
			JSON.stringify(this._producto),
		);
	}
	getById(buscar) {
		return this._producto[buscar - 1];
	}
	async updateById(id, actualizar) {
		const actualizar1 = actualizar;
		let id2 = id - 1;
		let id3 = id2 + 1;
		actualizar1.id = id3;
		this._producto[id2] = actualizar;
		await fs.promises.writeFile(
			'DesafioFinal.txt',
			JSON.stringify(this._producto),
		);
	}
	async deleteById(id) {
		let id2 = id - 1;
		this._producto.splice(id2, 1);
		await fs.promises.writeFile(
			'DesafioFinal.txt',
			JSON.stringify(this._producto),
		);
	}
}

//* --------- Clase carrito ----------
class Carrito {
	static contador = 0;
	constructor(carrito) {
		this._carrito = carrito;
		this._carrito = [];
		this._id = ++Carrito.contador;
	}
	get id() {
		return this._id;
	}
	addProductoExistente(prod) {
		this._carrito.push(prod);
	}
	borrarProducto(borrar) {
		let contador = 0;
		this._carrito.map((a) => {
			contador++;
			if (borrar == a.id) {
				this._carrito.splice(contador - 1, 1);
			}
		});
	}
}

//* --------- Clase guardar ----------
class Guardar {
	constructor(guardarCarritos) {
		this._guardarCarritos = guardarCarritos;
		this._guardarCarritos = [];
	}
	get guardarCarritos() {
		return this._guardarCarritos;
	}
	ultimo() {
		let arr = this._guardarCarritos;
		let lastItem = arr[arr.length - 1];
		return lastItem;
	}
	async crearCarrito() {
		let carr = new Carrito();
		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
		hoy.toUTCString();
		const tiempo = hoy.toUTCString();
		carr.fecha = tiempo;
		this._guardarCarritos.push(carr);
		await fs.promises.writeFile(
			'DesafioFinalCarrito.txt',
			JSON.stringify(this._guardarCarritos),
		);
	}
	buscarCarrito(buscar) {
		return this._guardarCarritos[buscar - 1];
	}
	async eliminarCarrito(id) {
		let id2 = id - 1;
		this._guardarCarritos.splice(id2, 1);
		await fs.promises.writeFile(
			'DesafioFinalCarrito.txt',
			JSON.stringify(this._guardarCarritos),
		);
	}
}

const guardado = new Guardar();
const producto1 = new Producto();

//* --------------- PRODUCTOS ---------------------

//const pro = producto1.producto;

//* ------ Enlistar productos -------
routerProductos.get('/', (req, res) => {
	try {
		res.status(200).json(producto1.producto);
		//res.render('main', { pro });
	} catch (error) {
		console.log(error);
	}
});
//* ------ Enlistar producto por id -------
routerProductos.get('/:id', (req, res) => {
	try {
		const { id } = req.params;
		res.status(200).json(producto1.getById(id));
	} catch (error) {
		console.log(error);
	}
});
//* ------ Incorporar productos -------
routerProductos.post('/', (req, res) => {
	try {
		if (perfil == true) {
			const { body } = req;
			producto1.addProducto(body);
			res.status(200).send(
				//'<script type="text/javascript">alert("Producto agregado");window.location.href = "http://localhost:8080";</script>'
				'Producto agregado',
			);
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
			producto1.updateById(id, body);
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
			producto1.deleteById(id);
			res.status(200).send(
				//'<script type="text/javascript">alert("Producto eliminado");window.location.href = "http://localhost:8080";</script>',
				'Producto borrado',
			);
		} else {
			res.status(401).send('No autorizado');
		}
	} catch (error) {
		console.log(error);
	}
});

//* --------------- CARRITO ---------------------

//* -------- Crear carrito y devuelve id -----------
routerCarrito.post('/', (req, res) => {
	try {
		guardado.crearCarrito();
		res.status(200).json(guardado.ultimo());
	} catch (error) {
		console.log(error);
	}
});
//* -------- Ver todos los carritos -----------
routerCarrito.get('/', (req, res) => {
	try {
		res.status(200).json(guardado.guardarCarritos);
	} catch (error) {
		console.log(error);
	}
});
//* -------- Vaciar carrito y lo elimina -----------
routerCarrito.delete('/:id', (req, res) => {
	try {
		const { id } = req.params;
		guardado.eliminarCarrito(id);
		res.status(200).send('Carrito eliminado');
	} catch (error) {
		console.log(error);
	}
});
//* -------- Enlistar productos guardados -----------
routerCarrito.get('/:id/productos', (req, res) => {
	try {
		const { id } = req.params;
		res.status(200).json(guardado.buscarCarrito(id));
	} catch (error) {
		console.log(error);
	}
});
//* -------- Incorporar productos por id -----------
routerCarrito.post('/:id/productos/:id_prod', (req, res) => {
	try {
		const { id, id_prod } = req.params;
		guardado
			.buscarCarrito(id)
			.addProductoExistente(producto1.getById(id_prod));
		fs.writeFileSync(
			'DesafioFinalCarrito.txt',
			JSON.stringify(guardado.guardarCarritos),
		);
		res.status(200).send('Producto agregado al carrito');
	} catch (error) {
		console.log(error);
	}
});
//* -------- Eliminar producto por id -----------
routerCarrito.delete('/:id/productos/:id_prod', (req, res) => {
	try {
		const { id, id_prod } = req.params;
		guardado.buscarCarrito(id).borrarProducto(id_prod);
		fs.writeFileSync(
			'DesafioFinalCarrito.txt',
			JSON.stringify(guardado.guardarCarritos),
		);
		res.status(200).send('Borrar producto');
	} catch (error) {
		console.log(error);
	}
});

app.use('/api/productos', routerProductos);
app.use('/api/carrito', routerCarrito);

const PORT = 8080;
const server = app.listen(PORT, () => {
	console.log(`🥲 Server started on http://localhost:8080`);
});
server.on('error', (err) => console.log(err));
