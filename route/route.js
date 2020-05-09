'use strict';

module.exports = function(app) {
    var tb_agama = require('../controller/agama');
    var tb_jurusan = require('../controller/jurusan');
    var tb_panitia = require('../controller/panitia');
    var tb_prestasi = require('../controller/prestasi');
    var tb_siswa = require('../controller/siswa');
    var tb_daftar = require('../controller/daftar');
    var tb_daftarulang = require('../controller/daftar_ulang');

// AGAMA  
    app.route('/') // index
        .get(tb_agama.index);

    app.route('/agama')
        .get(tb_agama.agama);
        
    app.route('/agama/:id_agama')
        .get(tb_agama.read);

    app.route('/agama')
        .post(tb_agama.create);
    
    app.route('/agama')
        .put(tb_agama.update); 

    app.route('/agama')
        .delete(tb_agama.delete); 

// JURUSAN  
    app.route('/') // index
        .get(tb_jurusan.index);

    app.route('/jurusan')
        .get(tb_jurusan.jurusan);
        
    app.route('/jurusan/:kode_jurusan')
        .get(tb_jurusan.read);

    app.route('/jurusan')
        .post(tb_jurusan.create);

    app.route('/jurusan')
        .put(tb_jurusan.update); 

    app.route('/jurusan')
        .delete(tb_jurusan.delete); 

// PANITIA  
    app.route('/') // index
    .get(tb_panitia.index);

    app.route('/panitia')
    .get(tb_panitia.panitia);

    app.route('/panitia/:id_panitia')
    .get(tb_panitia.read);

    app.route('/panitia')
    .post(tb_panitia.create);

    app.route('/panitia')
    .put(tb_panitia.update); 

    app.route('/panitia')
    .delete(tb_panitia.delete); 

// PRESTASI  
    app.route('/') // index
    .get(tb_prestasi.index);

    app.route('/prestasi')
    .get(tb_prestasi.prestasi);

    app.route('/prestasi/:kode_prestasi')
    .get(tb_prestasi.read);

    app.route('/prestasi')
    .post(tb_prestasi.create);

    app.route('/prestasi')
    .put(tb_prestasi.update); 

    app.route('/prestasi')
    .delete(tb_prestasi.delete); 

// SISWA
    app.route('/') // index
    .get(tb_siswa.index);

    app.route('/siswa')
    .get(tb_siswa.siswa);

    app.route('/siswa/:id_siswa')
    .get(tb_siswa.read);

    app.route('/siswa')
    .post(tb_siswa.create);

    app.route('/siswa')
    .put(tb_siswa.update); 

    app.route('/siswa')
    .delete(tb_siswa.delete); 

// DAFTAR 
    app.route('/') // index
    .get(tb_daftar.index);

    app.route('/daftar')
    .get(tb_daftar.daftar);

    app.route('/daftar/:no_daftar')
    .get(tb_daftar.read);

    app.route('/daftar')
    .post(tb_daftar.create);

    app.route('/daftar')
    .put(tb_daftar.update); 

    app.route('/daftar')
    .delete(tb_daftar.delete); 

// DAFTAR ULANG 
    app.route('/') // index
    .get(tb_daftarulang.index);

    app.route('/daftarulang')
    .get(tb_daftarulang.daftarulang);

    app.route('/daftarulang/:no_daftarulang')
    .get(tb_daftarulang.read);

    app.route('/daftarulang')
    .post(tb_daftarulang.create);

    app.route('/daftarulang')
    .put(tb_daftarulang.update); 

    app.route('/daftarulang')
    .delete(tb_daftarulang.delete); 

};