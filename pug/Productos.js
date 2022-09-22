class Productos {
	productos = [
		{
		  id: 1,
		  name: 'Escuadra',
		  price: 323.45,
		  thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Squadra_45.jpg'
		},
		{
		  id: 2,
		  name: 'Calculadora',
		  price: 234.56,
		  thumbnail: 'https://micalculadoracientifica.com/wp-content/uploads/2021/01/TI-Nspire-CX-Amazon.jpg'
		},
		{
		  id: 3,
		  name: 'Globo Terráqueo',
		  price: 45.67,
		  thumbnail: 'https://panamericana.vteximg.com.br/arquivos/ids/256800-600-690/globo-terraqueo-politico-40-cm-7701016736787.jpg?v=636381897120030000'
		},
		{
		  id: 4,
		  name: 'Paleta Pintura',
		  price: 456.78,
		  thumbnail: 'https://www.botiga.com.uy/media/catalog/product/cache/1/image/600x600/0dc2d03fe217f8c83829496872af24a0/p/a/paleta_pintora_tempera_infantozzi_materiales.jpg'
		},
		{
		  id: 5,
		  name: 'Reloj',
		  price: 67.89,
		  thumbnail: 'https://us.123rf.com/450wm/monticello/monticello1911/monticello191100379/135078958-reloj-de-pared-aislado-sobre-fondo-blanco-nueve-.jpg?ver=6'
		},
		{
		  id: 6,
		  name: 'Agenda',
		  price: 78.90,
		  thumbnail: 'https://cloudfront-eu-central-1.images.arcpublishing.com/prisa/AGYRBXKZQH6C4KYQU6IGD2BDIE.jpg'
		},
		{
		  id: 7,
		  name: 'Escudo caballero templario',
		  price: 456.78,
		  thumbnail: 'https://www.tienda-medieval.com/blog/wp-content/uploads/2010/09/escudo_templario1.jpg'
		},
		{
		  id: 8,
		  name: 'Escorpión de juguete',
		  price: 1000.87,
		  thumbnail: 'https://sc04.alicdn.com/kf/H5794a667d8844b0592a7a76e8724842bt.jpg'
		},
	  ];

	generateId() {
		const lastProduct = this.productos[this.productos.length - 1];
		console.log(lastProduct);
		let id = 1;
		if (lastProduct) {
			id = lastProduct.id + 1;
		}

		return id;
	}

	addProduct(newData) {
		newData.id = this.generateId();

		this.productos.push(newData);

		return this.productos;
	}

	getById(id) {
		return this.productos.find(product => product.id === parseInt(id));
	}

	update(id, data) {
		let updatedProduct;

		const updatedProducts = this.productos.map(product => {
			if (product.id === parseInt(id)) {
				product = Object.assign(product, data);

				updatedProduct = product;
			}
			return product;
		});

		this.productos = updatedProducts;

		return updatedProduct;
	}

	getAll() {
		return this.productos;
	}

	deleteById(id) {
		const newProducts = this.productos.filter(
			product => product.id !== parseInt(id)
		);

		this.productos = newProducts;

		return this.productos;
	}
}

module.exports = Productos;
