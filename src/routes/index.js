const express = require('express')
const router = express.Router()
const Productos = require('../models/Productos')

router.route('/').get((req, res) => {
	res.status(200).send('Bienvenido a la API de productos')
})

router.route('/producto/:sku')
	.get((req, res) => {
		Productos.find({ SKU: req.params.sku })
			.then(resultado => {
				if(resultado === []){
					res.status(404).send('[?] Producto no encontrado')
				}else{
					res.status(200).json(resultado)
				}
				}).catch(err => {
				console.log(err)
				res.status(500).send('[x] Error al obtener producto')
			})
	})
	.delete((req, res) => {
		Productos.deleteOne({ SKU: req.params.sku })
			.then(resultado => {
				if(resultado.deletedCount == 0){
					res.status(404).send('[?] Producto no encontrado')
				}else{
					res.status(202).json(resultado)
				}
			})
	})
	.put((req, res) => {
		Productos.updateOne({ SKU: req.params.sku }, req.body)
			.then(resultado => {
				if(resultado.matchedCount == 0){
					res.status(404).send('[?] Producto no encontrado')
				}else{
					res.status(200).json(resultado)
				}
			}).catch(err => {
				console.log(err)
				res.status(500).send('[x] Error al modificar producto')
			})
	})
	.patch((req, res) => {
		Productos.updateOne({SKU: req.params.sku},{ $set:{ stock: req.body.stock}})
			.then(resultado => {
				if(resultado.matchedCount == 0){
					res.status(404).send('[?] Producto no encontrado')
				}else{
					res.status(200).json(resultado)
				}
			}).catch(err => {
				console.log(err)
				res.status(500).send('[x] Error al modificar stock')
			})
	})

router.route('/producto')
	.get((req, res) => {

		Productos.find({}).
			then(resultado => {
				console.log(resultado)
				res.status(200).json(resultado)
			}).catch(err => {
				console.log(err)
				res.status(500).send('[x] Error al obtener los productos')
			})
	})
	.post((req, res) => {
		console.log(req.body)
		const nuevoProducto = new Productos(req.body)

		nuevoProducto.save()
			.then(resultado => {
				console.log(resultado)
				res.status(201).json(resultado)
			}).catch(err => {
				console.log(err)
				res.status(500).send('[x] Error al ingresar producto')
			})
	})


module.exports = router