// Latihan 5: Mirip juga seperti latihan sebelumnnya, cuman sekarang untuk Angkot yang lembur tidak hanya No. 8 melainkan juga No. 10.
// Jadi terdapat 2 Angkot yang sedang lembur, sementara Angkot No. 1-6 sedang beroperasi dengan baik dan Angkot No. 7-10 kecuali 8 & 10 tidak sedang beroperasi.


var jmlhAngkot = 10,
    angkotOps = 6,

    noAngkot = 1;

// Menggunakan Operator Logika:
for( noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ) {
    if ( noAngkot == 8 || noAngkot == 10 ) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    }
    else if ( noAngkot <= angkotOps ) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    }
    else {
        console.log("Angkot No. " + noAngkot + " tidak sedang beroperasi.")
    }
}

// Menggunakan Dua kali else if:
for( noAngkot; noAngkot <= jmlhAngkot; noAngkot++ ) {

    // Untuk noAngkot 8, menjalankan sedang lembur 1
    if ( noAngkot === 8 ) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    }

    // Untuk noAngkot 10, menjalankan sedang lembur 2
    else if ( noAngkot === 10 ) {
        console.log("Angkot No. " + noAngkot + " sedang lembur.")
    }

    // Untuk noAngkot 1-6, menjalankan beroperasi dengan baik
    else if ( noAngkot <= angkotOps ) {
        console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.")
    }

    // Untuk Sisanya noAngkot 7-10, menjalankan tidak beroperasi
    else {
        console.log("Angkot No. " + noAngkot + " tidak sedang beroperasi.")
    }
}

// Benar keduannya, namun lebih efektif menggunakan Operator Logika untuk bagian "Sedang lembur", karena tidak perlu menggunakan else if lagi cukup sekali saja
// Ilmu Baru: else if bisa digunakan lebih dari sekali, jadi kalian bisa menggunakan 2, 4, 10, bahkan 10000, jika mau :3.