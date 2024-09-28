const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// GET /hello
app.get('/hello', (req, res) => {
    res.send('Hello Express JS');
})

// GET /user - default "Adam Simcoe"
app.get('/user', (req, res) => {
    const firstname = req.query.firstname || 'Adam';
    const lastname = req.query.lastname || 'Simcoe';
    res.json({ firstname, lastname });
})

// POST /user
app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    res.json({ firstname, lastname });
}) 

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})