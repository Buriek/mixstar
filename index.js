//Llamamos a las librerias
const express = require('express');
const path = require('path');
const hbs = require('hbs');

//Ejecutamos express y guardamos el puerto
const PORT = 4000;
const app = express();

//Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

//Configuraciones
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, 'views/partials'));

//Rutas
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/productos', (req, res) => {
    res.render('productos');
});

app.get('/catalogo', (req, res) => {
    res.render('catalogo');
});

app.get('/nosotros', (req, res) => {
    res.render('nosotros');
});

app.get('/contacto', (req, res) => {
    res.render('contacto');
});

//Aplicacion en escucha
app.listen(PORT, () => {
    console.log(`Aplicacion funcionando correctamente ${PORT}`);
})

//Error en la pagina
app.on('error', (err) => {
    console.log(`Error en la pagina`);
});



