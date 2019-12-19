var express = require('express');
var router = express.Router();
var stock = require('../modules/stockmodule');
router.get('/:id?', function (req, res) {
    if (req.params.id) {
        stock.getStockById(req.params.id,function(err,rows){
                if(err)
                {
                    res.json(err);
                }
                else{
                    res.json(rows);
                }
        });
    }
    else {
        stock.getstock(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    }
});
router.delete('/:id',function(req,res){
    stock.deleteStockByid(req.params.id,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });

});
router.put('/:id/:qty',function(req,res){
    if(req.params.id)
    {
    stock.updateStock(req.params.id,req.params.qty,function(err,rows){
            if(err)
            {
                res.json(err);
            }
            else{
                res.json(rows);
            }
    });
}

});
router.post('/',function(req,res)
{
    stock.addStock(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
module.exports=router;