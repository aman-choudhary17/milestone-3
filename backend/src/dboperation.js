const config = require("./db");
const sql = require('mssql');

async function checkConnectionToDB() {
    try {
        let pool = await sql.connect(config);
    } catch (error) {
        console.log(error);
    }
}

async function getProducts() {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request().query("SELECT * FROM PRODUCT");
        return product.recordsets;
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    checkConnectionToDB: checkConnectionToDB,
    getProducts: getProducts
}