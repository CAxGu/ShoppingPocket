var mysql = require('../config/config.db');

var userModel= {};

/* Looking for an existing user with email given */
exports.getOneUser = function (email,cb){
    mysql.connection.query("SELECT * from Users where email like '"+email+"'",function (err, rows, fields) {
        cb(err, rows);
    });
};

/* Looking for an user by id*/
exports.getById = function (id,cb){
    mysql.connection.query("SELECT * from Users where id_user like '"+id+"'",function (err, rows, fields) {
        cb(err, rows);
    });
};


/* Looking for an user by username*/
exports.getByUsername = function (username,cb){
    mysql.connection.query("SELECT * from Users where username like '"+username+"'",function (err, rows, fields) {
        cb(err, rows);
    });
};


/* Sign Up of a new user loged by our internal aplication login*/
exports.createUser = function (user,cb){
    /* Check if the user already exists */
    mysql.connection.query("SELECT * from Users where email like '"+user.email+"'",function (err, rows, fields) {
        if(err){
            cb(err, rows);
        }else{
            if(rows && rows.length !=0){
                cb("Email ya en uso",null);
            }else{
                mysql.connection.query("INSERT INTO Users (`email`,`token`,`username`,`hash`,`salt`) VALUES ('"+user.email+"','"+user.token+"','"+user.username+"','"+user.hash+"','"+user.salt+"')" 
                ,function (err, result) {
                    cb(err, result);
                });
            }
        }

    });
};


/* Sign Up of an user loged by social login */
exports.createSocialUser = function (user,cb){

    /* Check if the user already exists */
   mysql.connection.query("SELECT * from Users where email like '"+user.email+"'",function (err, rows, fields) {
        if(err){
            cb(err, rows);
        }else{
            if(rows && rows.length !=0){
                cb("Email ya en uso",null);
            }else{
                mysql.connection.query("INSERT INTO Users (`name`,`active`,`profile_pic`,`id_social`,`email`,`username`,`hash`,`salt`) VALUES ('"+user.name+"',"+1+",'"+user.profile_pic+"','"+user.id_social+"','"+user.email+"','"+user.username+"','"+user.hash+"','"+user.salt+"')" 
                ,function (err, result) {
                    cb(err, result);
                });
            }
        }

    });
};


/* Verification if the user given exist in our database of users */
exports.verifyExist = function (user,cb){

    /* Check if the user already exists and if its the same that wants access*/
    mysql.connection.query("SELECT * from Users where email like '"+user.email+"' and id_social like '"+user.id_social+"'",function (err, rows, fields) {
        cb(err, rows);
    });
};


/* Accounts user activation process */
exports.activateUser = function (data,cb){
    mysql.connection.query("UPDATE Users SET active=1 where token like '"+data+"'",
    function (err, rowsa, fields) {
        if(err){
            cb(err,null);
        }else{
            mysql.connection.query("select * from Users where token like '"+data+"'",
                function (err, rowsb, fields) {
                    if(err){
                        cb(err,null);
                    }else{
                        mysql.connection.query("UPDATE Users SET token='' where token like '"+data+"'",
                            function (err, rowsc, fields) {
                                if(err){
                                    cb(err,null);
                                }else{
                                    cb(err,rowsb);
                                }
                            });
                    }
                });
        }
    })
} 

/* Register of token recover password*/
exports.createTokenPwd = function (user,cb){
    mysql.connection.query("Update Users set token_recover='"+user.token_recover+"' where email like '"+user.email+"'",function (err, rows, fields) {
        if(err){
            cb(err, null);
        }else{
            cb(err,rows);
        }

    });
};


/* Clear token recover password and update password*/
exports.changePassword = function (user,cb){
    mysql.connection.query("UPDATE Users SET token_recover='' WHERE email like '"+user.email+"' and token_recover like '"+user.token_recover+"'",
    function (err, rows, fields) {
        if(err){
            cb(err, null);
        }else{
            mysql.connection.query("UPDATE Users SET salt='"+user.salt+"', hash='"+user.hash+"' WHERE email like '"+user.email+"'",
                function (err, rowsb, fields) {
                    if(err){
                        cb(err,null);
                    }else{
                        mysql.connection.query("Select * from Users WHERE email like '"+user.email+"'",
                        function (err, rowsc, fields) {
                            if(err){
                                cb(err,null);
                            }else{
                                cb(err,rowsc);
                            }
                        });
                    }
                });
            }
    });
};

