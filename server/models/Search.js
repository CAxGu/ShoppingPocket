var mysql = require('../config/config.db');

var searchModel= {};

/*We will search recursively in all the product database fields until we found some result*/
exports.searchProds = function (data,cb){

    /* If the user searched with a concat string, we will search just with the last tiped word */
    let dataarray = data.split(" ");
    let tosearch ='';

    preparerows(dataarray,searchintoDB);

  /*   let datalast=dataarray[dataarray.length-1];
    let searchdata=datalast; */

/* 
    let sql= "Select id_prod,EAN,prod_name,color,size,prize,prod_pic,description,brand_name,maincat_name,cat_name,subcat_name from Products "+
    "inner Join (Marcas ,MainCategorias ,Categorias ,Subcategorias) "+
    "where Products.brand=Marcas.id_brand and Products.maincategory=id_maincat and Categorias.id_cat=category and "+
    "Products.subcategory=Subcategorias.id_subcat and "; */


   /*  mysql.connection.query(sql+"lower(EAN) like '%"+searchdata+"%'",function (err, rows, fields) {
        if(err){
            console.log("1");
            cb(err, null);
        }else{
            console.log("1.1")
            if(rows && rows.length !=0){
               cb(err, rows);
            }else{
                mysql.connection.query(sql+"lower(prod_name) like '%"+searchdata+"%'",function (err, rows, fields) {
                    if(err){
                        console.log("2")
                        cb(err, null);
                    }else{
                        console.log("2.1")
                        if(rows && rows.length !=0){
                            cb(err, rows);
                        }else{
                            mysql.connection.query(sql+"lower(color) like '%"+searchdata+"%'",function (err, rows, fields) {
                                if(err){
                                    console.log("3")
                                    cb(err, null);
                                }else{
                                    console.log("3.1")
                                    if(rows && rows.length !=0){
                                        cb(err, rows);
                                    }else{
                                        mysql.connection.query(sql+"lower(size) like '%"+searchdata+"%'",function (err, rows, fields) {
                                            if(err){
                                                console.log("4")
                                                cb(err, null);
                                            }else{
                                                console.log("4.1")
                                                if(rows && rows.length !=0){
                                                    cb(err, rows);
                                                }else{
                                                    mysql.connection.query(sql+"lower(description) like '%"+searchdata+"%'",function (err, rows, fields) {
                                                        if(err){
                                                            console.log("5")
                                                            cb(err, null);
                                                        }else{
                                                            console.log("5.1")
                                                            if(rows && rows.length !=0){
                                                                cb(err, rows);
                                                            }else{
                                                                mysql.connection.query(sql+"lower(brand_name) like '%"+searchdata+"%'",function (err, rows, fields) {
                                                                    if(err){
                                                                        console.log("6")
                                                                        cb(err, null);
                                                                    }else{
                                                                        console.log("6.1")
                                                                        if(rows && rows.length !=0){
                                                                            console.log("estoy en brands");
                                                                            console.log(rows);
                                                                            cb(err, rows);
                                                                        }else{
                                                                            mysql.connection.query(sql+"lower(maincat_NAME) like '%"+searchdata+"%'",function (err, rows, fields) {
                                                                                if(err){
                                                                                    console.log("7")
                                                                                    cb(err, null);
                                                                                }else{
                                                                                    console.log("7.1")
                                                                                    if(rows && rows.length !=0){
                                                                                        cb(err, rows);
                                                                                    }else{
                                                                                        mysql.connection.query(sql+"lower(cat_name) like '%"+searchdata+"%'",function (err, rows, fields) {
                                                                                            if(err){
                                                                                                console.log("8")
                                                                                                cb(err, null);
                                                                                            }else{
                                                                                                console.log("8.1")
                                                                                                if(rows && rows.length !=0){
                                                                                                    cb(err, rows);
                                                                                                }else{
                                                                                                    mysql.connection.query(sql+"lower(subcat_name) like '%"+searchdata+"%'",function (err, rows, fields) {
                                                                                                        if(err){
                                                                                                            console.log("9")
                                                                                                            cb(err, null);
                                                                                                        }else{
                                                                                                            console.log("9.1")
                                                                                                            cb(err, rows);
                                                                                                        }
                                                                                                    });
                                                                                                }
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }   
                                }
                            });
                        }
                    }
                });
            }
        }
    }); */

    function preparerows(dataarray,cback){
        let counter = 0;
    
        dataarray.forEach(element => {
            counter++;
    
            tosearch+=" lower(tosearch) like ('%"+element+"%') ";
            if(dataarray.length > counter){
                tosearch+=' and ';
            }
        });
    
        cback(tosearch);
    }
    
    function searchintoDB(tosearch){
    
        let sql= "select * from Products where id_prod in (select id_prod from (SELECT id_prod,EAN,concat_ws(' ',prod_name,color,size,brand_name,maincat_name) as tosearch, "+
            "prize,prod_pic,description,cat_name,subcat_name  FROM  Products AS p INNER JOIN (Marcas AS m, MainCategorias AS mc, Categorias AS c, "+
            "Subcategorias AS sc) WHERE p.brand = m.id_brand AND p.maincategory = mc.id_maincat AND c.id_cat = p.category AND p.subcategory = sc.id_subcat)as p "+
            "where "+tosearch+" )";
    
        mysql.connection.query(sql,function (err, rows, fields) {
            if(err){
                cb(err, null);
            }else{
                cb(err, rows);
            }
        });
    }

};
