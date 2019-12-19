var express = require('express');
var router = express.Router();
var product = require('../modules/ProductModule');
router.get('/:id?', function (req, res) {
    if (req.params.id) {
        product.getIngredients(req.params.id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
    else {
        product.getProduct(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });

    }
});
router.post('/',function(req,res){
    product.addProduct(req.body,function(err,rows){
        if(err)
        {
             res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
router.delete('/:id',function(req,res){
    product.deleteProduct(req.params.id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json({"Result":"Success"});
        }
    });
});
router.put('/:id',function(req,res){
    console.log("enter");
    product.updateProduct(req.params.id,req.body,function(err,rows){
            if(err)
            {
                console.log(err);
                res.json(err);
            }
            else
            {
                console.log(rows);
                res.json(rows);
            }
    });
})
module.exports=router;

