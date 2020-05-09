'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL AGAMA
exports.agama= function(req, res) {
    connection.query('SELECT * FROM tb_agama',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_agama = req.body.id_agama;
    var agama = req.body.agama;
    
    connection.query('INSERT INTO `tb_agama` VALUES (?,?)',
    [id_agama,agama], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Agama!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_agama = req.param.id_agama;
    connection.query('SELECT * FROM `tb_agama` WHERE id_agama = ?',
    [id_agama], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_agama = req.body.id_agama;
    var agama = req.body.agama;

    connection.query('UPDATE `tb_agama` SET agama=? WHERE id_agama=?',
    [agama,id_agama], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Agama!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_agama = req.body.id_agama;
    connection.query('DELETE FROM `tb_agama` WHERE id_agama=?',
    [id_agama], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Agama!", res)
        }
    });
};
