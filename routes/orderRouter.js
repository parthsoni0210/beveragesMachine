var express=require('express');
var router=express.Router();
var product=require('../modules/ProductModule');
var stock=require('../modules/stockmodule');
router.get('/:id/:sugar',function(req,res){
        product.getIngredients(req.params.id,function(err,rows){
            Console.log(rows);
            if(err)
            {
                res.json(err);
            }  
            else 
            {
                
              

                var milk=rows[0].Milk;
                var water=rows[0].Water;
                var coffee=rows[0].Coffee;
                var sugar=req.params.sugar;
                stock.getstock(function(err,rows){
                    if(err)
                    {
                        res.json(err);
                       // console.log(err);
                    }
                    else
                    {
                        var msg="success";
                        //console.log(rows);
                         if(rows[0].Quantity-milk<0)
                         {
                             msg="";
                            msg="milk ";
                         }
                         if(rows[1].Quantity-water<0)
                         {
                             msg+="water "
                         }
                         if(rows[2].Quantity-coffee<0)
                         {
                             //console.log("coffee neeed to fill");
                            msg+="Coffee "
                         }
                         if(rows[3].Quantity-sugar<0)
                         {
                             msg+="sugar "
                         }
                        if(msg=="success")
                        {
                           
                            stock.updateStock("Milk",rows[0].Quantity-milk,function(err){
                                    
                                if(err)
                                {
                                    console.log(err);
                                    res.json({"error":"erro in update milk stock"});
                                }
                            });
                            stock.updateStock("water",rows[1].Quantity-water,function(err){
                                    
                                if(err)
                                {
                                    console.log(err);
                                    res.json({"error":"erro in update Water stock"});
                                }
                            });
                            stock.updateStock("Coffee",rows[2].Quantity-coffee,function(err){
                                    
                                if(err)
                                {
                                    console.log(err);
                                    res.json({"error":"erro in update Coffee stock"});
                                }
                            });
                            stock.updateStock("Sugar",rows[3].Quantity-sugar,function(err){
                                    
                                if(err)
                                {
                                    console.log(err);
                                    res.json({"error":"erro in update Sugar stock"});
                                }
                            });
                            res.json({"success":"order successfully placed"});
                        }
                        else
                        {
                            console.log(msg);
                            res.json({'result':'need to update stock'});
                        }

                    }  
                });
            }
        });

});
module.exports=router;
