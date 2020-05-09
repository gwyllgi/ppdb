'use strict';

var connection = require('../config/database.js');
var response = require('../config/json_response.js');


// INDEX
exports.index = function(req, res) {
        response.hasil("Selamat Datang!", res)
};

// CRUD TABEL SISWA
exports.siswa= function(req, res) {
    connection.query('SELECT * FROM tb_siswa LEFT JOIN tb_agama ON tb_agama.id_agama=tb_siswa.id_agama LEFT JOIN tb_prestasi ON tb_prestasi.kode_prestasi=tb_siswa.kode_prestasi',function (error, rows, fields){
       if(error){
               console.log(error)
       } else{
               response.hasil(rows, res);
               }
   });
};

exports.create = function(req, res) {  
    var id_siswa = req.body.id_siswa;
    var nama_siswa = req.body.nama_siswa;
    var jk_siswa = req.body.jk_siswa;
    var ttl_siswa = req.body.ttl_siswa;
    var id_agama = req.body.id_agama;
    var alamat_siswa = req.body.alamat_siswa;
    var ortu = req.body.ortu;
    var asal_sekolah = req.body.asal_sekolah;
    var kode_prestasi = req.body.kode_prestasi;
    
    connection.query('INSERT INTO `tb_siswa` VALUES (?,?,?,?,?,?,?,?,?)',
    [id_siswa,nama_siswa,jk_siswa,ttl_siswa,id_agama,alamat_siswa,ortu,asal_sekolah,kode_prestasi], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil Menambahkan data siswa!", res)
        }
    });
};

exports.read = function(req, res) {
    var id_siswa = req.param.id_siswa;
    connection.query('SELECT * FROM `tb_siswa` WHERE id_siswa = ?',
    [id_siswa], 
        function (error, rows, fields){
            if(error){
                console.log(error)
            } else{
                response.hasil("Berhasil MENEMUKAN data!", res)
            }
        });
};

exports.update = function(req, res) {
    var id_siswa = req.body.id_siswa;
    var nama_siswa = req.body.nama_siswa;
    var jk_siswa = req.body.jk_siswa;
    var ttl_siswa = req.body.ttl_siswa;
    var id_agama = req.body.id_agama;
    var alamat_siswa = req.body.alamat_siswa;
    var ortu = req.body.ortu;
    var asal_sekolah = req.body.asal_sekolah;
    var kode_prestasi = req.body.kode_prestasi;

    connection.query('UPDATE `tb_siswa` SET nama_siswa=?, jk_siswa=?, ttl_siswa=?, id_agama=?, alamat_siswa=?, ortu=?, asal_sekolah=?, kode_prestasi=? WHERE id_siswa=?',
    [nama_siswa,jk_siswa,ttl_siswa,id_agama,alamat_siswa,ortu,asal_sekolah,kode_prestasi,id_siswa], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil UPDATE data siswa!", res)
            }
        });
};

exports.delete= function(req, res) {
    var id_siswa = req.body.id_siswa;
    connection.query('DELETE FROM `tb_siswa` WHERE id_siswa=?',
    [id_siswa], 
    function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            response.hasil("Berhasil MENGHAPUS data siswa!", res)
        }
    });
};