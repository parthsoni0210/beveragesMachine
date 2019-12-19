var mysql = require('mysql');
var cnn = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'nestaway'
});

module.exports = cnn;