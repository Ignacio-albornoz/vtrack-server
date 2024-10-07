const express = require('express');
const app = express();
const port = 3001;

const archsResponse = require('./mock-response/get_archs.json');
const archResponse = require('./mock-response/get_arch.json');
const nsResponse = require('./mock-response/get_ns-id.json');
const nsComponentResponse = require('./mock-response/get_ns-id_component-id');
const archivedResponse = require('./mock-response/post_archived.json');
const getNsIdComponentsBuild = require('./mock-response/get_ns-id_components-build');
const postNsResponse = require('./mock-response/post_ns-id_components-build');
const patchNsResponse = require('./mock-response/post_ns-id_components-build');

app.get('/archs', (req, res) => {
    res.json(archsResponse);
});

//GET /archs/{arch-id}
app.get('/archs/:id', (req, res) => {
    const id = req.params.id;
    res.json(archResponse);
});

//GET /ns/{ns-id}/components
app.get('/ns/:nsId/components', (req, res) => {
    res.json(nsResponse);
});

//GET /ns/{ns-id}/components/{component-id}
app.get('/ns/:nsId/components/:componentId', (req, res) => {
    res.json(nsComponentResponse);
});

/*  POST /ns/{ns-id}/components/{component-id}:restoreComponent
    Service to mark a component as archived. 
*/
app.post('/ns/:nsId/components/:componentId:restoreComponent', (req, res) => {
    res.json(archivedResponse);
});

/*  PATCH /ns/{ns-id}/components/{component-id}
    Service to update some fields of a Component.   
*/
app.patch('/ns/:nsId/components/:componentId', (req, res) => {
    res.json(nsComponentResponse);
});

/*  GET /ns/{ns-id}/components/{component-id}/builds/{build-id}/deploys
    Service for listing all deploys of a build.  
*/
app.get('/ns/:nsId/components/:componentId/builds/:buildId/deploys', (req, res) => {
    res.json(getNsIdComponentsBuild);
});

/*  POST /ns/{ns-id}/components/{component-id}/builds/{build-id}/deploys
    Service to deploy a component.   
*/
app.post('/v0/ns/:nsId/components/:componentId/builds/:buildId/deploys', (req, res) => {
    res.json(postNsResponse);
});

/*  PATCH /ns/{ns-id}/components/{component-id}/builds/{build-id}/deploys/{deploy-id}
    Service to update a deploy.   
*/
app.patch('/v0/ns/:nsId/components/:componentId/builds/:buildId/deploys/:deployId', (req, res) => {
    res.json(patchNsResponse);
});
// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});