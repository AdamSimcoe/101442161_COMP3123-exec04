const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
})

// GET /user - default "Pritesh Patel"
app.get('/user', (req, res) => {
    const first_name = req.query.first_name || 'Adam';
    const last_name = req.query.last_name || 'Simcoe';
    res.json({ first_name, last_name });
})

// POST /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { first_name, last_name } = req.params;
    res.json({ first_name, last_name });
}) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})