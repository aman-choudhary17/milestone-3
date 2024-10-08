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
            .input('ImageURL', sql.NVarChar, Product.ImageUrl)
            .execute('addproduct');
        return insterProduct.rowsAffected;
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

async function addSales(Sales) {
    try {
        let pool = await sql.connect(config);
        let insterSales = await pool.request()
            // .input('id', sql.Int, Product.Id)
            .input('product_id', sql.Int, Sales.product_id)
            .input('quantity', sql.Int, Sales.quantity)
            .input('total_price', sql.Decimal(10, 2), Sales.total_price)
            .input('sale_date', sql.DateTime, Sales.sale_date)
            .execute('addsales');
        return insterSales.rowsAffected;
    } catch (error) {
        console.log(error);
        return String(error);
    }
}

async function addOrders(Orders) {
    try {
        let pool = await sql.connect(config);
        Orders.country = "";
        Orders.city = "";
        Orders.zip = "";
        let insterOrder = await pool.request()
            // .input('id', sql.Int, Product.Id)
            .input('first_name', sql.VarChar, Orders.customerName)
            .input('last_name', sql.VarChar, Orders.customerName)
            .input('email', sql.VarChar, Orders.emailId)
            .input('address', sql.VarChar, Orders.address1)
            .input('address2', sql.VarChar, Orders.address2)
            .input('country', sql.VarChar, Orders.country)
            .input('city', sql.VarChar, Orders.city)
            .input('zip', sql.VarChar, Orders.zip)
            .input('payment_method', sql.VarChar, Orders.payment_method)
            .input('amount', sql.Decimal(10, 2), Orders.total)
            .input('order_date', sql.DateTime, Orders.order_date)
            .execute('addorder');
        return insterOrder.rowsAffected;
    } catch (error) {
        console.log(error);
        return String(error);
    }
}

module.exports = {
    checkConnectionToDB: checkConnectionToDB,
    getProducts: getProducts,
    getSingleProducts: getSingleProducts,
    addProduct: addProduct,
    updateProduct: updateProduct,
    deleteProducts: deleteProducts,
    addSales: addSales,
    addOrders: addOrders,
}