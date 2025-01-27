// Latihan 3: Membuat "Angkot No. 1-6 beroperasi dengan baik", lalu "Angkot No. 7-10 tidak beroperasi." 
// Membuatnya dari for, lalu didalam for terdapat Pengkondisian If dan Else.

// Bebas Diatur
var jumlahAngkot = 10;
var angkotBeroperasi = 6;

// - - - - - - - - - - - - - 

// Tidak Perlu Diatur
var noAngkot = 1;

// Sintaks For dengan If & Else

// for digunakan untuk mengulang pesan console.log() sebanyak 10 kali
for ( noAngkot; noAngkot <= jumlahAngkot; noAngkot += 1 ) {
    // Didalam for terdapat pengkondisian If dan Else

    // Awal-awal, if akan dijalankan terlebih dahulu karena kondisinya terpenuhi
    if ( noAngkot <= angkotBeroperasi ) {
        // menampilkan di console "Angkot No. ... beroperasi dengan baik."
        console.log("Angkot No. " + noAngkot + ' beroperasi dengan baik.')
    }

// Hingga, ketika if kondisinya tidak terpenuhi, maka else akan menggantikannya, karena else merupakan kondisi selain if
    else {
        // menampilkan di console "Angkot No. ... tidak beroperasi."
        console.log("Angkot No. " + noAngkot + " tidak beroperasi.")
    }
}

// If jika kondisinya terpenuhi, maka if terlebih dahulu yang akan dijalankan
// Ketika If kondisinya tidak terpenuhi karena sudah mencapai batas yang ditentukan, maka else akan menggantikannya.

// Mungkin simpel dari If dan Else, If() itu mengecek kondisi apakah true atau false, jika hasilnya true maka If akan dijalankan sementara Else tidak. Sebaliknya, jika If menghasilkan nilai false, maka yang dijalnkan adalah false. 

// Sederhananya, If() mengecek apakah kondisi true atau false, true dipegang oleh If, lalu untuk False diberikan If ke else, jadi If hanya menerima true, sementara Else hanya menerima false dari kondisinya.

// Hasil:
var jumlahAngkot0 = 10;
var angkotBeroperasi0 = 6;

var noAngkot0 = 1;
for ( noAngkot0; noAngkot0 <= jumlahAngkot0; noAngkot0 += 1 ) {
    if ( noAngkot0 <= angkotBeroperasi0 ) {
        console.log("Angkot No. " + noAngkot0 + " beroperasi dengan baik.")
    }

    else {
        console.log("Angkot No. " + noAngkot0 + " tidak beroperasi dengan baik.")
    }
}
// Begitulah hasil dari latihan ku pada angkot3.js semoga benar :3