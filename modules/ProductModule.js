var db=require('../connection');
var product={
    getProduct:function(callback)
    {
        return db.query("select Name from product",callback);
    },
    getIngredients:function(id,callback)
    {
        return db.query("select * from product where Name=?",[id],callback);
    },
    addProduct:function(product,callback)
    {
        return db.query("insert into product values(?,?,?,?)",[product.Name,product.Water,product.Milk,product.Coffee],callback);
    },
    deleteProduct:function(id,callback)
    {
        return db.query("delete from product where Name=?",[id],callback);
    },
    updateProduct:function(id,product,callback)
    {
        console.log("enter query");
        return db.query("update product set Name=?,Water=?,Milk=?,Coffee=? where Name=?",[product.Name,product.Water,product.Milk,product.Coffee,id],callback);
    }
     
}
module.exports=product;