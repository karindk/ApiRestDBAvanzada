const express = require("express")
const mongoose = require("mongoose") 
const router = require('./routes')
const app = express()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://127.0.0.1:27017/Mimbral',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', console.error.bind(console,'conection error:'));
db.once('open',()=>{
    console.log('[*] Conectado a MongoDB\n')
});

app.use(express.json())

app.use('/api',router)

app.listen(port,()=>console.log('[*] Servidor escuchando en el puerto '+port))