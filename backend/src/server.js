const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pokemonRouter = require('./routes/pokemons')
const path = require('path')
const app = express();

/***CONFIGURATIONS***/
app.use(cors())

/***MIDDLEWARES***/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/***ROUTES***/
app.use('/pokemon', pokemonRouter);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`App listening at port: ${PORT}`);
});

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static(path.join(__dirname, '../../frontend/build')))

    app.get('*', (request, response) => {
        response.sendFile(path.join(__dirname + '../../frontend/build/index.html'))
    });
}