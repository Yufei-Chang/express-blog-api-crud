const express = require('express');
console.log(typeof(express));
const app = express();
const port = 3001;
const routers = require('./routers/posts');
const reqErr = require('./middlewares/checkware');

app.get('/', (req, res) => {
    res.send('Questo è il mio server');
});


app.use(express.json());
app.use(reqErr.reqError);
app.use('/posts', routers);
app.use(express.static('public'));

// AVVIO IL SERVER
app.listen(port, () => {});