var mysql = require('../config/config.db');

var subcategoriesModel= {};

/* We get all the Subcategories related to the Category and Main Category previously chosen */
exports.getAllSubcategories = function (subcatname,cb){

    mysql.connection.query("Select * from Subcategorias where id_subcat in (select id_subcategoria from Categorias_Subcategorias where id_categoria like (select id_cat from Categorias where cat_name like '"+subcatname+"'))"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};