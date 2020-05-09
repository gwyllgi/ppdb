'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL daftarulang
exports.daftarulang= function(req, res) {
    connection.query('SELECT * FROM tb_daftarulang JOIN tb_daftar ON tb_daftar.no_daftar=tb_daftarulang.no_daftar JOIN tb_panitia ON tb_panitia.id_panitia=tb_daftarulang.id_panitia',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var no_daftarulang = req.body.no_daftarulang;
    var no_daftar = req.body.no_daftar;
    var tgl_daftarulang = req.body.tgl_daftarulang;
    var id_panitia=req.body.id_panitia;
   
    
    connection.query('INSERT INTO `tb_daftarulang` VALUES (?,?,?,?)',
    [no_daftarulang,no_daftar,tgl_daftarulang,id_panitia], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data !", res)
        }
    });
};

exports.read = function(req, res) {
    var no_daftarulang = req.param.no_daftarulang;
    connection.query('SELECT * FROM `tb_daftarulang` WHERE no_daftarulang = ?',
    [no_daftarulang], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var no_daftarulang = req.body.no_daftarulang;
    var no_daftar = req.body.no_daftar;
    var tgl_daftarulang = req.body.tgl_daftarulang;
    var id_panitia=req.body.id_panitia;
    
    connection.query('UPDATE `tb_daftarulang` SET no_daftar=?, tgl_daftarulang=? id_panitia=? WHERE no_daftarulang=?',
    [no_daftar,tgl_daftarulang,id_panitia,no_daftarulang], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data !", res)
            }
        });
};

exports.delete= function(req, res) {
    var no_daftarulang = req.body.no_daftarulang;
    connection.query('DELETE FROM `tb_daftarulang` WHERE no_daftarulang=?',
    [no_daftarulang], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data daftarulang!", res)
        }
    });
};