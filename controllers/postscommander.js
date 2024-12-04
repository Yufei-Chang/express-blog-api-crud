const dataElem = require('../data');

const index = (req, res) => {res.json(dataElem);};

const show = (req, res) => {
    // Questo è l'id passato come parametro tramite la chiamata http, lo trasformo in un numero
    const elemId = parseInt(req.params.id);
    // Per eseguire il comando verso un elemento specifico, devo leggere l'array, per leggere mi serve il ciclo for
    for (let i = 0; i < dataElem.length; i++) {
        // Inserisco nella variabile ogni singolo elemento letto
        const curItem = dataElem[i];
        // Confronto l'id dell'elemento corrente(curItem) con l'input(parametro) dell'utente(elemId)
        if (curItem.id === elemId) {
            // Restituisco in Json l'elemento chiamato
            res.json(curItem);
        }
    }
}

const create = (req, res) => {
    res.json("Creiamo un elemento");
}

const update = (req, res) => {
    const elemId = req.params.id;
    res.json("Con questo aggiorniamo tutti i dati di un elemento" + elemId);
}

const destroy = (req, res) => {
    // Faccio sincronizzare l'indice con la lunghezza array con il -1 (es attuale: lunghezza array 5 e index max 4)
    const elemId = req.params.id -1;
    // Splice è una funzione che rimuove l'elemento specificato
    dataElem.splice(elemId, 1);
    console.log(dataElem);
    // sendStatus è una funzione che manda lo stato della risposta, il 204 indica una risposta positiva ma senza contenuto
    res.sendStatus(204);
        }

const modify = (req, res) => {
    const elemId = req.params.id;
    res.json("Modifichiamo alcuni parametri dell'elemento" + elemId);
}


module.exports = {index, show, create, update, destroy, modify} 