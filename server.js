const express = require('express');
const app = express();
const port = 3000;

const archsResponse = require('./mock-response/get_archs.json');
const archResponse = require('./mock-response/get_arch.json');
const nsResponse = require('./mock-response/get_ns-id.json');
const nsComponentResponse = require('./mock-response/get_ns-id_component-id');

app.get('/archs', (req, res) => {
    res.json(archsResponse);
});

//GET /archs/{arch-id}
app.get('/archs/:id', (req, res) => {
    const id = req.params.id;
    res.json(archResponse);
});

//GET /ns/{ns-id}/components
app.get('/ns/:id/components', (req, res) => {
    res.json(nsResponse);
});

//GET /ns/{ns-id}/components/{component-id}
app.get('/ns/:id/components/:id', (req, res) => {
    res.json(nsComponentResponse);
});


// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});