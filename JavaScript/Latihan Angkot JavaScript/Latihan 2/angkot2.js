// Latihan 2: membuat pengulangan For, mirip seperti materi sebelumnyya

// Pemanasan
// var noAngkot = 1
// while( noAngkot < 7 ) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
// noAngkot += 1

//     for( noAngkot; noAngkot >= 7 && noAngkot <= 10; noAngkot += 1 ) {
//         console.log("Angkot No. " + noAngkot + " tidak sedang beroperasi.")      
//     }
// }

// Jadi, Gw ngebuat dua pengulangan menggunakan for
// Gw, taruh variabel bernama noAngkot diluar dari semua itu


// Latihan 2 dimulai (1):
// tambahkan variabel jumlahAngkot, angkotberoperasi, dan noAngkot
// Buat 2 pengulangan menggunakan keyword yang berbeda yakni while dan for, while digunakan untuk angkot yang beroperasi dengan baik, sementara for digunakan untuk angkot yang sedang tidak beroperasi
// Fakta: while didalamnya bisa memuat pengulangan keyword lain seperti for, dan juga for juga bisa memuat while didalamnya. Yang tidak bisa adalah keyword yang sama, seperti for memuat for, maka itu tidak akan bisa, begitu juga sebaliknya.

// Hanya kedua variabel ini saja diatur
// var jumlahAngkot = 10;
// var angkotBeroperasi = 1;
// // ----------------
// var noAngkot = 1;
// // Nilai Awal pengulangan, tidak perlu diubah

// while( noAngkot <= angkotBeroperasi ) {
//     console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
// noAngkot += 1;
// // console akan menampilkan dari No. 1 - No. 6

// }
// for( noAngkot; noAngkot > angkotBeroperasi && noAngkot <= jumlahAngkot; noAngkot+= 1 ) {
//     console.log("Angkot No. " + noAngkot + " tidak sedang beroperasi.");
// // Console akan menampilkan dari No. 7 - No. 10.
// }

// Hasilnya mengulang

// Latihan 2 dimulai (2):
var jumlahAngkot2 = 10
var angkotBeroperasi2 = 9
var angkotNoLanjutan = (angkotBeroperasi2 + 1)

//  ---------------
// Nggak perlu di atur, sebagai nilai awal saja
var noAngkot2 = 1

while ( noAngkot2 <= angkotBeroperasi2 ) {
    console.log( "Angkot No. " + noAngkot2 + " beroperasi dengan baik." )
noAngkot2 += 1
}

for ( noAngkot2 = angkotNoLanjutan; noAngkot2 <= jumlahAngkot2; noAngkot2 += 1 ) {
    console.log( "Angkot No. " + noAngkot2 + " tidak sedang beroperasi." )
}