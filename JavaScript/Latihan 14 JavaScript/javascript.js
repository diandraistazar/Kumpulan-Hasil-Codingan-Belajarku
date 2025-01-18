// Latihan 14: kali ini kita akan membahas sebuah konsep yang namanya adalah Refactoring
// Refactoring adalah proses mengubah code kita menjadi lebih baik tanpa harus mengubah fungsionalitasnya.

// Kenapa harus dilakukannya Refactoring?
// - Readability (Keterbacaan atau kemudahan dalam membaca code) Program yang baik adalah program yang dapat dibaca oleh diri sendiri maupun orang lain
// - DRY (Do not repeat yourself) berkaitan dengan penggunaan variabel yang berlebihan, efisiensi penggunaan function, dan lain-lain
//  - Testability (Pengujian penulisan code lebih mudah)
//  - Performance, penulisan code yang dapat meningkatkan kemampuan atau performa dari program. Contohnya menggunakan Looping yang baik, memilih tipe data yang tepat, pengalokasian memori yang efektif
//  - Maintainability, Memberi kemudahan dalam mengelola dan mengembangkan code.

// Sebenarnya, mengenai Refactoring ini masih banyak lagi, namun dilatihan kali ini kita hanya berfokus bagaimana melakukan refactoring pada code kita.



// Sekarang aku akan melakukan refactoring sederhana pada source code aku sebelumnnya.
// Aku mengambilnya dari file JavaScript latihan 12 yak

console.info("Jadi, Volume kedua kubus tersebut jika dijumlahkan adalah " + angka(8, 3))

function angka(a, b) {
    var angka1;
    var angka2;
    var hasil;

    angka1 = (a*a*a);
    angka2 = (b*b*b);
    hasil = angka1 + angka2

    return hasil;
}

// Sekarang aku akan melakukan Refactoring
console.info("Jadi, Volume kedua kubus tersebut jika dijumlahkan adalah " + angkaR1(8, 3))

function angkaR1(a, b) {
    var hasil = (a*a*a) + (b*b*b);
    return hasil;
}

// atau

function angkaR2(a, b) {
    return (a*a*a) + (b*b*b);
}

// Bagaimana lebih rapi bukan?, meskipun code-nya lebih sedikit namun fungsinya tetap sama. Inilah disebut Refactoring

// Ya itulah latihan hari ini, singkat saja mengenai Refactoring ini
// Semoga anda dapat membeli PC built-in, serta monitor yang besar untuk melihat waifu My Mita❤, napa jijik kamu, Padahal kita dulu suka Mita, Bisa-bisanya bilang jijik ke waifu sendiri, aku marah nih :(. 

// 21:32 | 15 Januari 2025. 
// Sedang duduk di kursi depan laptop dengan keyboard murah dan mouse wireles dari Logitech. Ya aku nulis ini agar kamu merasa gimana gimana gitu mikiran masa lalu. 
// Kamu (Diandra) yang sedang membaca ini dari tahun berapa, usia berapa, dan tinggi berapa?. Di awal tahun 2025 ini tinggi ku hanya 165 cm, sedih banget njir dan masih duduk dibangku SMA awal semester 2.

// Ya mungkin begitu aja, semoga kamu sehat selalu Diandra. 
// Love Mita and Diandra :D