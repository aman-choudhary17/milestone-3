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

async function getSingleProducts(Id) {
    try {
        let pool = await sql.connect(config);
        // let product = await pool.request().query("USE DatabaseName");
        let product = await pool.request()
            .input('id', sql.Int, Id)
            .query("SELECT * from product where id = @id");
        return product.recordsets;
    } catch (error) {
        console.log(error);
        return error;
    }
}

async function addProduct(Product) {
    try {
        let pool = await sql.connect(config);
        let insterProduct = await pool.request()
            // .input('id', sql.Int, Product.Id)
            .input('name', sql.VarChar(120), Product.Name)
            .input('description', sql.VarChar(500), Product.Descritpion)
            .input('price', sql.Decimal(10, 2), Product.Price)
            .input('stock', sql.Int, Product.Stock)
            .execute('addproduct');
        return insterProduct.recordsets;
    } catch (error) {
        console.log(error);
        return String(error);
    }
}

async function updateProduct(Product) {
    try {
        let pool = await sql.connect(config);
        let product = await pool.request()
            .input('id', sql.Int, Product.Id)
            .input('name', sql.VarChar(120), Product.Name)
            .input('description', sql.VarChar(120), Product.Descritpion)
            .input('price', sql.Decimal(10, 2), Product.Price)
            .input('stock', sql.Int, Product.Stock)
            .query("UPDATE product SET name = @name, description = @description, price = @price, stock = @stock WHERE id = @id");
        return product.rowsAffected[0];
    } catch (error) {
        console.log(error);
        return String(error);
    }
}

async function deleteProducts(Id) {
    try {
        let pool = await sql.connect(config);
        // let product = await pool.request().query("USE DatabaseName");
        let product = await pool.request()
            .input('id', sql.Int, Id)
            .query("DELETE FROM product WHERE id = @id");
        return product.rowsAffected[0];
    } catch (error) {
        console.log(error);
        return error;
    }
}

module.exports = {
    checkConnectionToDB: checkConnectionToDB,
    getProducts: getProducts,
    getSingleProducts: getSingleProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProducts: deleteProducts,
}