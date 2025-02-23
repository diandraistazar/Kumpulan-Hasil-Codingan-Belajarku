// Latihan 4: Menggunakan If, else, dan else if
// Sama seperti latihan sebelumnnya, cuman bedannya Angkot No. 8 itu buat "sedang lembur"
// Jadi sama saja, buat Angkot Mo 1-6 beroperasi dengan baik, dan Angkot No. 7-10 tidak sedang beroperasi. Nah kecuali Angkot No. 8 dibuat menjadi Sedang Lembur

// Atur 1: Mengatur Angkot
var jmlhAngkot = 10,
    angkotops = 6,
    noAngkotLmbr = 8;

// Atur 2: Mengatur Log yang ditampilkan di console
var operasiEnable = 'sedang beroperasi',
    operasiDisable = 'tidak sedang beroperasi',
    operasiDEADLINE = 'sedang lembur';

var noAngkot = 1; // Tidak perlu diatur

// Konversi string menjadi huruf kecil semua
operasiEnable = operasiEnable.toLowerCase();
operasiDisable = operasiDisable.toLowerCase();
operasiDEADLINE = operasiDEADLINE.toLowerCase();

// sintaks pengulangan
for ( noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ) {

    // Untuk Angkot yang lembur
    if ( noAngkot == noAngkotLmbr) {
        console.log('Angkot No. ' + noAngkotLmbr + ' ' + operasiDEADLINE);
    }

    // Untuk Angkot yang beroperasi baik-baik saja
    else if ( noAngkot <= angkotops ) {
        console.log('Angkot No. ' + noAngkot + ' ' + operasiEnable);
    }

    // Untuk Angkot yang sedang tidak beroperasi
    else {
        console.log('Angkot No. ' + noAngkot + ' ' + operasiDisable);
    }
}
// Ingat! Source Code kita di jalankan oleh Program dari atas ke bawah atau dari kiri ke kanan