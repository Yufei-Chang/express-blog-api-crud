const express = require('express');
const app = express();
const port = 3001;
const posts = require('./data');
const routers = require('./routers/posts');

app.get('/', (req, res) => {
    res.send('Questo è il mio server');
});

app.use('/posts', routers);
app.use(express.static('public'));

// AVVIO IL SERVER
app.listen(port, () => {});