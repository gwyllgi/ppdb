'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL PANITIA
exports.panitia= function(req, res) {
    connection.query('SELECT * FROM tb_panitia',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_panitia = req.body.id_panitia;
    var nama_panitia = req.body.nama_panitia;
    var jk_panitia = req.body.jk_panitia;
    var nohp_panitia = req.body.nohp_panitia;
    
    connection.query('INSERT INTO `tb_panitia` VALUES (?,?,?,?)',
    [id_panitia,nama_panitia,jk_panitia,nohp_panitia], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data panitia!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_panitia = req.param.id_panitia;
    connection.query('SELECT * FROM `tb_panitia` WHERE id_panitia = ?',
    [id_panitia], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil(rows, res)
            }
        });
};

exports.update = function(req, res) {
    var id_panitia = req.body.id_panitia;
    var nama_panitia = req.body.nama_panitia;
    var jk_panitia = req.body.jk_panitia;
    var nohp_panitia = req.body.nohp_panitia;

    connection.query('UPDATE `tb_panitia` SET nama_panitia=?, jk_panitia=?, nohp_panitia=? WHERE id_panitia=?',
    [nama_panitia,jk_panitia,nohp_panitia,id_panitia], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data panitia!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_panitia = req.body.id_panitia;
    connection.query('DELETE FROM `tb_panitia` WHERE id_panitia=?',
    [id_panitia], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data panitia!", res)
        }
    });
};