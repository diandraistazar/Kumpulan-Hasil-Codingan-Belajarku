// Latihannya, membuat console menampilkan teks "Angkot No. 1 beroperasi dengan baik.", bagian No-nya diganti sesuai jumlah pengulangannya
// Contoh latihan tampilan nya:
// Angkot No. 1 beroperasi dengan baik.
// Angkot No. 2 beroperasi dengan baik.
// Angkot No. 3 beroperasi dengan baik.
// Angkot No. 4 beroperasi dengan baik.
// Angkot No. 5 beroperasi dengan baik.
// Angkot No. 6 beroperasi dengan baik.
// Angkot No. 7 beroperasi dengan baik.
// Angkot No. 8 beroperasi dengan baik.
// Angkot No. 9 beroperasi dengan baik.
// Angkot No. 10 beroperasi dengan baik.
// Buat sama seperti itu, menggunakan caramu sendiri yang pernah dipelajari!

// Hasil dari source code ini, menampilkan teksnya dari no paling besar sampai no paling kecil dari 10 - 1
var noAngkot = 10;
while( noAngkot >= 1 ) {
    console.log("Angkot No. " + noAngkot + " beroperasi dengan baik.");
    noAngkot = noAngkot -= 1;
}

// Hasil dari source code ini, menampilkan teksnya dari no paling kecil sampai no paling besar dari 1 - 10
var noAngkot2 = 1;
while( noAngkot2 <= 10 ) {
    console.log("Angkat No. " + noAngkot2 + " beroperasi dengan baik.");
    noAngkot2 = noAngkot2 += 1;
}

// Hasil kembangan orang
var nilaiAwal = 1;
var nilaiAkhir = 2;
while( nilaiAwal <= 20 ) {
    console.log("Angkot No. " + nilaiAwal + " membawa penumpang dengan jumlah= " + nilaiAkhir)
    nilaiAwal += 3
    nilaiAkhir += 3
}

// ${}: memungkinkan kita untuk menambah variabel kedalam string, yang padahal seharusnya dipisah. ( Mungkin )