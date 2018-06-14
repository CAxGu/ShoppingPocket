var mysql = require('../config/config.db');

var categoriesModel= {};

/* We get all the list of categories related to the parent main category */
exports.getAllCategories = function (catname,cb){
     mysql.connection.query("select * from Categorias where id_cat in (select id_categoria from MainCategorias_Categorias where id_maincategoria like (SELECT id_maincat FROM MainCategorias where maincat_name like '"+catname+"'))"
    ,function (err, rows, fields) {
        cb(err, rows);
    });
};