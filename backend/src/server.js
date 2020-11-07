const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

/***CONFIGURATIONS***/
app.use(cors())

/***MIDDLEWARES***/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/***ROUTES***/
// app.use('/pokemon', pokemonRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`);
});

