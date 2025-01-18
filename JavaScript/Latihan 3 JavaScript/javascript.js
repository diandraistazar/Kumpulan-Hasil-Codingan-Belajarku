// Pengkodisian
// Pengkondisian atau percabangan adalah kondisi dimana program dapat menjalankan statement yang berbeda sesuai kondisi yang diberikan.
// Jadi maksudnya gimana, aku membuat 2 statement yang berbeda sesuai kondisi yang akan terjadi menggunakan pengkondisian atau percabangan.
// Statement yang pertama menjalankan alert('Nama kamu mengandung huruf D')
// Statement yang kedua menjalankan alert('Nama kamu mengandung angka')
// Nah, Ketika aku memasukkan namaku "Diandra", maka statement yang dijalankan program adalah statement pertama, karena kondisinya sesuai "Diandra" mengandung huruf D.
// Nah, Ketika aku memasukkan nama "diandra25", maka statement yang dijalankan oleh program adalah statement kedua, karena kondisinya sesuai "diandra25" mengandung angka 25.
// Kesimpulannya, Program akan menjalankan statement yang kita buat sesuai kondisi yang kita atur sebelumnnya, jika nama mengandung huruf D, maka statement yang dijalnkan adalah statement alert('Nama kamu mengandung huruf D'), sebaliknya, jika nama kamu mengandung angka, maka statement yang dijalankan oleh program adalah statement alert('Nama kamu mengandung angka')
// Begitu

// Contoh 1:
var usia = prompt("Masukkan Usia Mu:")
    if ( usia < 18 ) {
        // Statement akan dijalankan ketika usia dibawah 18 tahun
        alert("Usiamu " + usia + ", artinya kamu masih kecil :3")
    }
    else {
        // Statement akan dijalankan ketika usia diatas 18 tahun
        alert("Usiamu " + usia + ", artinya sudah dewasa :)")
    }

// Contoh 2:
var angka = prompt("Masukkan Angka Lo:")
    if ( angka % 2 === 0) {
        // Statement yang dijalankan ketika True
        alert(angka + " merupakan bilangan genap")
    }
    else {
        // Statement yang dijalankan ketika False
        alert(angka + " merupakan bilangan ganjil")
    }

// Pengulangan

// Catatan: Perulangan akan terhenti jika kondisinya false, sebaliknya perulangan terus berlanjut ketika kondisinya true.

// 1. While
// Selagi kondisinya true atau benar, maka akan terus terjadi pengulangan, sebalikinya jika kondisinya false atau salah, maka akan keluar dari pengulangan tersebut

// Contoh:
var mita = true
// Variabel yang berisi nilai boolean true

// while () adalah kondisinya, kondisinya true atau false, jika true maka akan di ulang, sementara jika false maka tidak akan ada pengulangan dan lanjur ke statement berikutnya
while (mita) {
    var nama = prompt('Siapa Namalu?')
    alert('Oh, Hai' + ' ' + nama + '. ' + 'Sepertinya, kamu sedang mengalami suatu masalah')
    var mita = confirm('Ingin Mencoba Lagi?')
}

// While hanya perlu satu kondisi saja didalam tanda kurung () yang menghasilkan nilai boolean true or false, jika lebih maka tidak akan bekerja

// While: merupakan jenis Loop Perulangan JavaScript, untuk mengulang statement yang sama, selama kondisi tertentu terpenuhi

// (Mita): merupakan kondisi perulangan while, terdapat true dan false
// True: Maka statement tersebut akan selesai, dan melanjutkan statement selanjutnya
// False: Maka statement tersebut akan diulang kembali, sampai kondisinya true
// {}: merupakan statement-statement yang akan dilakukan pengulangan

// ----------------------------------------------------------------

// 2. For
// Sintaks ini memungkin kita untuk mengulang statement yang sama lebih dari satu kali.

alert('Nama saya Diandra');
alert('Saya seorang Progammer');

for(var i = 0; i < 5; i++) {
    alert('Wibu');
}

alert('Terima Kasih :3');

// For harus memiliki lebih dari satu kondisi, jika hanya satu maka akan terjadi error

// For: Jenis Loop di Perulangan JavaScript yang digunakan untuk menjalankan statement yang sama lebih dari satu kali

// (var = i; i < 5; i++): kondisi perulangan for

// var i = 0: sebagai penanda awal, berapa kali melakukan pengulangan (Loop)

// i < 5: Merupakan syarat yang mengatakan "Periksa apakah i masing kurang dari 5", sebelumnnya i diisi angka 0, jadi 0 masing kurang dari angka 5 atau "0 lebih sedikit dari angka 5 = true", sampai nilainya menjadi false 5 < 5 = false

// i++: Setiap kali perulangan selesai, var i akan menambah 1, misalnya diawal kita mengatur var i nya 0, maka setiap perulangan selesai var i akan ditambah angka 1, maka selanjutnya var i bukan lagi berisi 0 melainkan bertambah menjadi 1.
// i++ sama saja dengan i += 1, jadi jika kamu pernah belajar penugasan sebelumnnya pasti mengerti :3

// alert('wibu'): statement yang akan terjadinya pengulangan lebih dari satu kali sesuai yang telah ditentukan

// Mengapa Pengulangannya harus menggunakan sintaks for?, mengapa tidak langsung saja di tulis tanpa sintaks for?
// Karena, sintaks for telah menyediakan tempat untuk kita melakukan pengulangan statement lebih dari satu kali, tanpa sintaks for, program akan menjalankan statement sesuai urutan statement yang kita tulis.
// Jadi JavaScript telah menyediakan tempat untuk kita melakukan penggulangan statement lebih dari satu kali, tanpa sintaks tersebut kita tidak bisa melakukan penggulangan, kecuali kita menulis statement yang sama lebih dari satu kali, maka akan menghasilkan pengulangan yang sama dengan sintaks for.