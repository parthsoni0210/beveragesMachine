var db=require('../connection');
var stock={
    getstock:function(callback)
    {
        return db.query("select * from stock",callback);
    },
    getStockById:function(id,callback)
    {
       return  db.query("select * from stock where Name=?",[id],callback);
    },
    updateStock:function(id,qty,callback)
    {
        return db.query("update stock set Quantity=? where name=?",[qty,id],callback);
    },
    
    deleteStockByid:function(id,callback)
    {
        return db.query("delete from stock where Name=?",[id],callback);
    },
    addStock:function(stock,callback)
    {
        return db.query("insert into stock values(?,?)",[stock.Name,stock.Quantity],callback);
    }

    
}
module.exports=stock;