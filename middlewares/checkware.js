// In primis, devo prendere i dati da analizzare, per poter poi fare il confronto
const posts = require('../data');

// Creo un middleware per il controllo parametro
const checkId = (req, res, next) => {
    // Prendo il parametro richiesto dall'utente
    const userQueryId = parseInt(req.params.id);
    // Cerco lo stesso parametro con lo stesso valore nell'array e lo confronto con la richiesta dell'utente
    const curParam = posts.find((curItem) => curItem.id === userQueryId);
    console.log(userQueryId);
    // Stipulo la condizione se non si trova la corrispondenza con "if"
    if (curParam) {
        // Se trova corrispondenza, l'operazione passa alla fase successiva
        next();
    } else {
        // Se non trova, inviare il messaggio di errore (permesso insultare l'utente)
        res.statusCode = 404;
        res.json({
            error: true,
            message: "Elemento non trovato, idiota, scrivi come mangi",
        })
    }
};

// Creo un middleware per gestione errori
const reqError = (err, req, res, next) => {
    res.statuCode = 500;
    res.json({
        error: true,
        message: "Errore interno, non cagare il cazzo, siamo nervosi di nostro",
    })
}

module.exports = {checkId, reqError};