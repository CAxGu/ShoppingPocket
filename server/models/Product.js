var mysql = require('../config/config.db');

var productModel= {};

/* Getting all the items for a determinate idmaincat, idcat and idsubcat */
exports.getAllProducts = function (maincatname,catname,subcatname,cb){
    mysql.connection.query("SELECT * from Products where maincategory like (select id_maincat from MainCategorias where maincat_name like '"+maincatname+"')"+
    "and category like (select id_cat from Categorias where cat_name like '"+catname+"') and subcategory like "+
    "(select id_subcat from Subcategorias where subcat_name like '"+subcatname+"')"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};

/* Getting an specific item by id */
exports.getProduct = function (idprod,cb){
    mysql.connection.query("SELECT id_prod,EAN,prod_name,color,size,prize,stock,location,prod_pic,description,repo_date,Marcas.brand_name,maincategory,"+
    "category,subcategory FROM Products INNER JOIN Marcas ON id_brand=brand where id_prod like '"+idprod+ "'"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};