const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello my Boss');
});

app.get('/test', (req, res) => {
    res.send('test abarrakadabra');
});

app.get('/html', (req, res) => {
    res.send(`<div>
<h1>HELLO</h1>
<p>test paragraph</p>
</div>`);
});


const port = process.env.PORT || 3000;

app.listen(port);
