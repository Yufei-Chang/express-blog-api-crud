const express = require('express');
const router = express.Router();
const dataElem = require('../data');

// INDEX
router.get('/', (req, res) => {
    // Lettura generale, dritti sul json
    res.json(dataElem);
});

// SHOW
router.get('/:id', (req, res) => {
    // Lettura mirata, buttiamo l'id in una variabile
    const elemId = req.params.id;
    res.json("Leggiamo l'elemento specifico" + elemId);
});

// CREATE
router.post('/', (req, res) => {
    // const elemId = req.params.id;
    res.json("Creiamo un elemento");
});

// UPDATE
router.put('/:id', (req, res) => {
    const elemId = req.params.id;
    res.json("Con questo aggiorniamo tutti i dati di un elemento" + elemId);
});

// DELETE
router.delete('/:id', (req, res) => {
    const elemId = req.params.id;
    res.json("Cancelliamo l'elemento" + elemId);
});

// FINITI I ROUTERS, LI ESPORTO
module.exports = router;