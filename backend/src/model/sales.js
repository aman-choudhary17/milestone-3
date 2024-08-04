class Sales {
    constructor(Id, ProductId, Quantity, TotalPrice, SalesDate) {
        this.Id = Id;
        this.ProductId = ProductId;
        this.Quantity = Quantity;
        this.TotalPrice = TotalPrice;
        this.SalesDate = SalesDate;
    }
}

module.exports = Sales;