'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL daftar
exports.daftar= function(req, res) {
    connection.query('SELECT * FROM tb_daftar JOIN tb_siswa ON tb_siswa.id_siswa=tb_daftar.id_siswa JOIN tb_jurusan ON tb_jurusan.kode_jurusan=tb_daftar.kode_jurusan JOIN tb_panitia ON tb_panitia.id_panitia=tb_daftar.id_panitia',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var no_daftar = req.body.no_daftar;
    var id_siswa = req.body.id_siswa;
    var kode_jurusan = req.body.kode_jurusan;
    var id_panitia = req.body.id_panitia;
    var tgl_daftar = req.body.tgl_daftar;
   
    
    connection.query('INSERT INTO `tb_daftar` VALUES (?,?,?,?,?)',
    [no_daftar,id_siswa,kode_jurusan,id_panitia,tgl_daftar], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data !", res)
        }
    });
};

exports.read = function(req, res) {
    var no_daftar = req.param.no_daftar;
    connection.query('SELECT * FROM `tb_daftar` WHERE no_daftar = ?',
    [no_daftar], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var no_daftar = req.body.no_daftar;
    var id_siswa = req.body.id_siswa;
    var kode_jurusan = req.body.kode_jurusan;
    var id_panitia = req.body.id_panitia;
    var tgl_daftar = req.body.tgl_daftar;

    connection.query('UPDATE `tb_daftar` SET id_siswa=?, kode_jurusan=?, id_panitia=?, tgl_daftar=?',
    [id_siswa,kode_jurusan,id_panitia,tgl_daftar,no_daftar], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data!", res)
            }
        });
};

exports.delete= function(req, res) {
    var no_daftar = req.body.no_daftar;
    connection.query('DELETE FROM `tb_daftar` WHERE no_daftar=?',
    [no_daftar], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data!", res)
        }
    });
};