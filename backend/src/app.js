// IMPORT PACAKGES
const validator = require('validator');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// IMPORT OTHER FILES
const dboperation = require('./dboperation');
var Product = require('./model/product');
// Import the responseApi.js
const { success, error, validation } = require("./utils/responseApi");

// PUBLIC VARIABLE
const app = express();
var router = express.Router();
const port = process.env.PORT || 8090;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((request, response, next) => {
    console.log('midelware');
    next();
});

// FOR SUCESSFULL RESPONSE
// success(message, { data: "Some random data" }, statusCode)

// FOR ERROR RESPONSE
// error(message, statusCode)

router.route('/product').get((request, response) => {
    dboperation.getProducts().then((result) => {
        // console.log(result);
        if (Array.isArray(result)) {
            response
                .status(200)
                .json(success("OK", { data: result[0] }, response.statusCode));
        }
    });
});

app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
    dboperation.checkConnectionToDB();

});