import express from 'express';
import './database';


const app = express();


app.get('/', (request, response) => {
    return response.json({ message: 'Manassés LIXO!' })
})

app.listen(5000, () => { console.log('Server is running') });