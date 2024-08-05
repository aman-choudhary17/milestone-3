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
        } else if (typeof (result) === "string") {
            response.status(500).json(error(result, response.statusCode));
        }
    });
});

router.route('/product/:id').get((request, response) => {
    dboperation.getSingleProducts(request.params.id).then((result) => {
        // console.log(result);
        if (Array.isArray(result)) {
            response
                .status(200)
                .json(success("OK", Object.assign({}, ...result[0]), response.statusCode));
        } else if (typeof (result) === "string") {
            response.status(500).json(error(result, response.statusCode));
        }
    });
});

router.route('/addproduct').post((request, response) => {
    let product = { ...request.body };
    dboperation.addProduct(product).then((result) => {
        // console.log(result);
        if (Array.isArray(result)) {
            response
                .status(200)
                .json(success("OK", result.length != 0 ? Object.assign({}, ...result[0]) : "Data Inserted", response.statusCode));
        } else if (typeof (result) === "string") {
            response.status(500).json(error(result, response.statusCode));
        }
    });
});

router.route('/updateproduct').post((request, response) => {
    let product = { ...request.body };
    dboperation.updateProduct(product).then((result) => {
        // console.log(result);
        if (Number.isInteger(result)) {
            response
                .status(200)
                .json(success("OK", `Data updated ${result}`, response.statusCode));
        } else if (typeof (result) === "string") {
            response.status(500).json(error(result, response.statusCode));
        }
    });
});

router.route('/deleteproduct/:id').get((request, response) => {
    dboperation.deleteProducts(request.params.id).then((result) => {
        // console.log(result);
        if (Number.isInteger(result)) {
            response
                .status(200)
                .json(success("OK", `${result} numbers of record deleted`, response.statusCode));
        } else if (typeof (result) === "string") {
            response.status(500).json(error(result, response.statusCode));
        }
    });
});

app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
    dboperation.checkConnectionToDB();

});