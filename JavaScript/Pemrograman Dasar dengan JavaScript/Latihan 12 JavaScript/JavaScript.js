// Latihan 12: Di latihan kali ini, kita akan membahas Cara Membuat dan Menjalankan Function lebih detail.
// Sebelum itu, kita harus mengetahui terlebih dahulu bagaimana function JavaScript bekerja.

// Ketika kita bekerja dengan sebuah Function, biasanya kita akan memiliki Input atau sebuah nilai yang biasanya akan menjadi material atau bahan ke dalam function, setelah itu Function akan melakukan sesuatu kepada bahan yang kita berikan tadi, sehingga nanti hasilnya akan menghasilkan sebuah nilai baru Output.

// Function yang baik adalah function yang hanya mengerjakan 1 hal saja secara spesifik

// Function:
// - Blok kode yang dibuat untuk melakukan tugas spesifik
// - Dapat "dipanggil" berulang kali
// - Memudahkan penelusuran
// - Reusability (Kemampuan untuk digunakan kembali di bagian lagi program)

// Studi Kasus (Membuat tugas menyelesaikan soal menjumlah 2 volume kubus)

// Dalam Matematika
// 1. Terdapat 2 kubus, kubus pertama disebut a dan kubus kedua disebut b. Kubus pertama memiliki sisi-sisi 8, sementara Kubus Kedua memiliki sisi-sisi 3. Hitunglah hasil dari penjumlahan volume kedua kubus tersebut:
// Jawaban:
// a = 8
// b = 3
// 
// volume kedua kubus tersebut ? (v)
// 
// a = 8x8x8 = 8^3
// b = 3x3x3 = 3^3
// 
// a = 512
// b = 27
// 
// v = a + b
// v = 512 + 27
// v = 539
// Jadi, volume kedua kubus tersebut jika dijumlahkan adalah 539


// Dalam Pemograman

// Tanpa Function
var c = 8;
var d = 3;

var hasil = (c*c*c) + (d*d*d);

console.info("Jadi, Volume kedua kubus tersebut jika dijumlah adalah " + hasil + " (TANPA FUNCTION)");




// Dengan Function:
var a = 8;
var b = 3;

console.info("Jadi, Volume kedua kubus tersebut jika dijumlahkan adalah " + angkaS(a, b) + " (DENGAN FUNCTION)")

// Fungsi Penjumlahan RIBET
function angka(a, b) {
    var angka1;
    var angka2;

    angka1 = (a*a*a);
    angka2 = (b*b*b);

    return angka1 + angka2;
}

// Fungsi Penjumlahan Simpel
function angkaS(a, b) {
    return (a*a*a) + (b*b*b)
}

