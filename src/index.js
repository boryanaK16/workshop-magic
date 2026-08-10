import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Express');
})

app.listen(5000, () => console.log('Servel is listening on http://localhost:5000...'))