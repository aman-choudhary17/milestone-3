const config = require("./db");
const sql = require('mssql');

async function checkConnectionToDB() {
    try {
        let pool = await sql.connect(config);
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function getProducts() {
    try {
        let pool = await sql.connect(config);
        // let product = await pool.request().query("USE DatabaseName");
        let product = await pool.request().query("SELECT * from product");
        return product.recordsets;
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    checkConnectionToDB: checkConnectionToDB,
    getProducts: getProducts
}