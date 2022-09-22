const express = require("express");


const app = express();
const PORT = process.env.PORT || 8080;




const conectedServer = app.listen(PORT, () =>{
    console.log(`Servidor activo y escuchando en el puerto ${PORT}`)
})

conectedServer.on("error", (error) =>{
    console.log(error.message)
})