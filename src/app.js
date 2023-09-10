/* Express server */

const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3001;


/* Configurar la carpeta de archivos estaticos usando path.join y __dirname */

app.use(express.static(path.join(__dirname, "../public/")));

app.listen(PORT, ()=>{
    console.log(`Server is on in ${PORT}`);
});

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
})