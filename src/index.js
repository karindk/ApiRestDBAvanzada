const express = require("express")
const mongoose = require("mongoose") 
const router = require('./routes')
const app = express()
const port = process.env.PORT || 3000


//conexión con mongodb
mongoose.connect('mongodb://127.0.0.1:27017/Mimbral',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.on('error', console.error.bind(console,'conection error:'));
db.once('open',()=>{
    console.log('[*] Conectado a MongoDB\n')
});

//se declara que se usará formato json
app.use(express.json())

app.use('/api',router)
//se abre el servidor de la api
app.listen(port,()=>console.log('[*] Servidor escuchando en el puerto '+port))