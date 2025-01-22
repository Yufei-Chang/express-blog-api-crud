const dataElem = require('../data');
const connection = require("../db");

const index = (req, res) => {
    // faccio la query
    const sql = "SELECT * FROM posts";
    connection.query(
        sql, (err, resp) => {
            if (err) {
                return res.status(500).json({
                    message: "Errore interno, non cagare il cazzo"
                })
            } else if (resp.length === 0) {
                return res.status(500).json({
                    message: "No ce so post ok"
                })
            } else {
                return res.status(200).json({
                    message: "eddaje cazzo siuuummm",
                    data: resp
                })
            }
        }
    )
}

const show = (req, res) => {
    // Questo è l'id passato come parametro tramite la chiamata http, lo trasformo in un numero
    const elemId = parseInt(req.params.id);
    // faccio la query
    const sql = "SELECT * FROM posts WHERE id=?";
    connection.query(
        sql,
        [elemId],
        (err, resp) => {
            if (err) {
                return res.status(500).json({
                    message: "Errore interno, non cagare il cazzo"
                })
            } else if (resp.length === 0) {
                return res.status(500).json({
                    message: "Non è stato trovato nessun risultato richiesto"
                })
            } else {
                return res.status(200).json({
                    message: "eddaje cazzo siuuummm",
                    data: resp[0]
                })
            }
        }
    )
}

const create = (req, res) => {
    // console.log(req.body);
    // Cerco l'indice dell'ultimo elemento dell'array
    const lastElemIndex = dataElem.length - 1;
    // Recupero l'ultimo elemento grazie all'indice trovato prima
    const lastElem = dataElem[lastElemIndex];
    // Estraggo l'id dell'ultimo elemento
    const lastElemId = lastElem.id;
    // Calcolo il nuovo id, incrementando di 1 all'id dell'ultimo elemento
    const newId = lastElemId + 1;
    // Creo un nuovo elemento che include l'id calcolato prima
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }
    dataElem.push(newPost);
    res.statusCode = (201);
    res.json(newPost);
}

const update = (req, res) => {
    // Trasformo in numero l'input dell'utente
    const elemId = parseInt(req.params.id);
    // Prendo i dati modificati
    const updateElem = req.body;
    // Addo l'id al coso nuovo
    updateElem.id = elemId;
    // Cerco l'index del vecchio elemento da modificare
    const indexToUpdate = dataElem.findIndex((curItem) => curItem.id === elemId);
    // Se lo trovo quello che vuole, faccio quello che vuole
    // Sostituisco il vecchio elemento con quello nuovo
    dataElem[indexToUpdate] = updateElem;
    res.json(dataElem);
}

const destroy = (req, res) => {

    const elemId = parseInt(req.params.id);
    // faccio la query
    const sql = "DELETE FROM posts WHERE id=?";
    connection.query(
        sql,
        [elemId],
        (err, resp) => {
            if (err) {
                return res.status(500).json({
                    message: "Errore interno, non cagare il cazzo"
                })
            } else if (resp.length === 0) {
                return res.status(500).json({
                    message: "Non è stato trovato nessun risultato richiesto"
                })
            } else {
                return res.status(200).json({
                    message: "Bersaglio eliminato, rientriamo nella base",
                })
            }
        }
    )
}

const modify = (req, res) => {
    const elemId = req.params.id;
    res.json("Modifichiamo alcuni parametri dell'elemento" + elemId);
}


module.exports = { index, show, create, update, destroy, modify } 