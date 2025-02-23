// Latihan 5: Hanya memodifikasi latihan sebelumnya yang dimana kita membuat angkot yang lembur itu Angkot No. 8 dan 10
// Sekarang Angkot No. 5 yang beroperasi dengan baik menjadi sedang lembur juga.

// Atur Sendiri
var jmlhAngkot = 10,
    angkotOps = 6;

// !! Tidak Perlu Diatur
var noAngkot = 1;

// Sintaks Pengulangan For | Menggunakan Operator Logika OR
// for( noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ) {

//     // Akan dijalankan ketika noAngkotnya sama dengan angka 5, 8, dan 10
//     if ( noAngkot === 5 || noAngkot === 8 || noAngkot === 10 ) {
//         console.log("Angkot No. " + noAngkot + " sedang lembur.")
//     }

//     // Akan dijalankan ketika noAngkot berada dibawah AngkotOps
//     else if ( noAngkot <= angkotOps ) {
//         console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
//     }


//     // Akan dijalankan ketika 2 kondisi diatas tidak terpenuhi, maka else akan dijalankan
//     else {
//         console.log("Angkot No. " + noAngkot + " tidak beroperasi.")
//     }
// }


// Sintaks Pengulangan For | Menggunakan Operator Logika OR + Operator Perbandiganan !==
for( noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ) {
    if ( noAngkot <= angkotOps && noAngkot !== 5 ) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    }
    else if ( noAngkot === 8 || noAngkot === 5 || noAngkot === 10 ) {
        console.log("Angkot No. " + noAngkot + " sedang lembur")
    }
    else {
        console.log("Angkot No. " + noAngkot + " tidak beroperasi.")
    }
}

// Ilmu Baru!: operator logika bagian or bisa menggunakan 2 lebih operand, buktinya bisa kamu lihat
// Menggunakan Operator Perbandigan !==, fungsinya agar angka tidak sama dengan angka, jadi jika noAngkot !!== 5 = false, jadi selain angka 5 maka true.