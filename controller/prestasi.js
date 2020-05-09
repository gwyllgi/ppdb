'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL prestasi
exports.prestasi= function(req, res) {
    connection.query('SELECT * FROM tb_prestasi',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var kode_prestasi = req.body.kode_prestasi;
    var prestasi = req.body.prestasi;
    var sertifikat = req.body.sertifikat;
    
    connection.query('INSERT INTO `tb_prestasi` VALUES (?,?,?)',
    [kode_prestasi,prestasi,sertifikat], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data prestasi!", res)
        }
    });
};

exports.read = function(req, res) {
    var kode_prestasi = req.param.kode_prestasi;
    connection.query('SELECT * FROM `tb_prestasi` WHERE kode_prestasi = ?',
    [kode_prestasi], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var kode_prestasi = req.body.kode_prestasi;
    var prestasi = req.body.prestasi;
    var sertifikat = req.body.sertifikat;

    connection.query('UPDATE `tb_prestasi` SET prestasi=?, sertifikat=? WHERE kode_prestasi=?',
    [prestasi,sertifikat,kode_prestasi], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data prestasi!", res)
            }
        });
};

exports.delete= function(req, res) {
    var kode_prestasi = req.body.kode_prestasi;
    connection.query('DELETE FROM `tb_prestasi` WHERE kode_prestasi=?',
    [kode_prestasi], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data prestasi!", res)
        }
    });
};