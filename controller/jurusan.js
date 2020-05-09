'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL JURUSAN
exports.jurusan= function(req, res) {
    connection.query('SELECT * FROM tb_jurusan',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var kode_jurusan = req.body.kode_jurusan;
    var nama_jurusan = req.body.nama_jurusan;
    connection.query('INSERT INTO `tb_jurusan` VALUES (?,?)',
    [kode_jurusan,nama_jurusan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data Jurusan!", res)
        }
    });
};

exports.read = function(req, res) {
    var kode_jurusan = req.param.kode_jurusan;
    connection.query('SELECT * FROM `jurusan` WHERE kode_jurusan = ?',
    [kode_jurusan], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var kode_jurusan = req.body.kode_jurusan;
    var nama_jurusan = req.body.nama_jurusan;

    connection.query('UPDATE `tb_jurusan` SET nama_jurusan=? WHERE kode_jurusan=?',
    [nama_jurusan,kode_jurusan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data Jurusan!", res)
            }
        });
};

exports.delete= function(req, res) {
    var kode_jurusan = req.body.kode_jurusan;
    connection.query('DELETE FROM `tb_jurusan` WHERE kode_jurusan=?',
    [kode_jurusan], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data Jurusan!", res)
        }
    });
};