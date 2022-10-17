// importing the dependencies
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

app.use(bodyParser.json());

app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    res.send({success: 'ok', message: 'Hello world...'});
});

app.post('/search/zone', async (req, res) => {
    try {
        const points = req.body.points;
        if (!points) {
            return res.status(400).json({success: false, message: 'points is mandatory'});
        }

        const response = await axios.post('https://carburanti.mise.gov.it/ospzApi/search/zone', {
            "points": points,
            "fuelType": null
        });
        console.log('response => ', response);
        res.json(response.data);

    } catch (error) {
        res.status(500).send(error);
    }
})

// starting the server
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
});