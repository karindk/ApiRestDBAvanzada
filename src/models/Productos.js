const {Schema, model} = require('mongoose')

//definimos el esquema que trendrá cada Doc de la Collection
const Productos = new Schema({
    nombreProducto: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true,
        unique: false
    },
    precio: {
        type: Number,
        required: true,
        unique: false,
    },
    categoria: {
        type: String,
        required: false,
        unique: false
    },
    SKU:{
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Productos',Productos)