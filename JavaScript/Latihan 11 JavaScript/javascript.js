// Latihan 11: Latihan kali ini kita akan mempelajari Function!

// Menurut Douglas Crockford: Function adalah kunci utama dalam JavaScript yang membuat JavaScript menjadi OP

// Dalam Function bahasa Pemograman lagi selain JavaScript, pasti kalian akan mengenal istilah Method, Class, Constructor, dan Module. Namun JavaScript di JavaScript kamu hanya mengenal Function saja

// Function:
// - Sebuah Sub-Program/Sub-Routine yang dapat 'dipanggil' di bagian lain pada program
// - Merupakan struktur dasar pembentuk JavaScript
// - Disebut juga sebagai prosedur (Kumpulan statement untuk melakukan tugas tertentu atau menghitung sebuah nilai)
// - Untuk dapat menggunakannya, terlebih dahulu "Membuat" functionya, lalu "Memanggilnya" nya
// - Termasuk dalam First-class Object

// Kenapa kita harus menggunakan Function?
// Reusability (DRY: Do not Repeat Yourself) artinya kita jangan menulis ulang secara terus menurut kode program yang sama secara berulang-ulang, kita cukup membuat satu function, dan digunakan atau dipanggil secara terus menerus.
// Dekomposisi / Abstraksi artinya dengan function dapat menyembunyikan kompleksitas kode program dengan membuat sub-program dari bagian lain dari program, sehinggga --v
// Modularitas artinya dengan menggunakan function, source code kita akan menjadi lebih rapi dan mudah dibaca. Hal ini dapat memudahkan kita untuk mencari masalah atau error yang terdapat didalam kode kita

// Terdapat 2 kategori Function (berdasarkan Pembuatannya)
// 1. Built-In Function (Function yang sudah ada atau telah dibuat oleh JavaScript)
// 2. User-Defined Function (Function yang dibuat sendiri)

// 1. Built-In Function
// Merupakan Function yang telah dibuat atau disediakan oleh JavaScript, jadi kita hanya perlu memanggilnya atau menggunakannya saja
// Contoh:
// alert()
// prompt()
// confirm()
// Number()
// dan masih banyak lagi
// Untuk lebih lengkap mengenai Function, dapat lihat di internet :3

// Built-In Function: String
// charAt():
// slice()
// split()
// toString()
// toLowerCase()
// toUpperCase()

// Contoh Penggunaan: charAt

 var nama = "Diandra";
 console.info(nama.charAt(5))

// Maka hasilnya akan menampilkan huruf r, karena 5 itu menghitung string yang berada di dalam variabel nama. Tapi INGAT! JavaScript bukan menghitung dari 1-5, melainkan 0-5. Itulah mengapa bukan huruf d tetapi r.

// Built-In Function: Math
// sin()
// cos()
// tan()
// random()
// round()
// floor()
// ceil()
// log()
// dan lain-lain


// 2. User-Defined Function
// Merupakan Function yang dibuat sendiri, baru setelah itu digunakan.
// Menggunakan Keyword Function
// Nama Function (Optional)
// Parameter / Argument (Bahan Baku)
//  - Parameter disimpan dalam ()
//  - Boleh ada boleh juga tidak ada, jika ada boleh lebih dari satu
//  - Dipisahkan oleh , (koma)
// Function Body, "Dibungkus" dengan {}, didalam kurung kurawal tersebut bakal terdapat statement-statement untuk menjalankan tugas tertentu.
// Dapat mengembalikan nilai yang dimasukkan kepada code yang memanggilnya menggunakan ("return" value) atau tidak

// Membuat User-Defined Function
// Dengan menggunakan Deklerasi | Function Decleration
// Dengan menggunakan Ekspresi | Function Expression

// 1. Function Decleration
// Contoh:
 function jumlahDuaBilangan(a, b) {
      var hasil;
      hasil = a + b;
 
      return hasil
 }
//

// 2. Function Expression
// Contoh:
 var jumlahDuaBilangan = function(a, b) {
      var hasil;
      hasil = a + b;
 
      return hasil
 } 
// 
// Berada didalm sebuah Variabel

// Memanggil dan Menjalankan Function cukup dengan memanggil nama Functionnya dan diikuti ()
// Contoh: jumlahDuaBilangan(), didalam kurungnya diisi dengan sebuah nilai yang ditugaskan ke function, dan setelah itu akan dikerjakan oleh function yang kita panggil.
// 
alert(jumlahDuaAngka(1, 2)) = 3
alet(jumlahDuaAngka(10, 10)) = 20

var angka1 = Number(prompt("Masukkan angka pertama :"))
var angka2 = Number(prompt("Masukkan angka kedua : "))

console.info("Hasilnya adalah " + hitung(angka1, angka2))


function hitung(a, b) {
    return a + b
}

// Topik Selanjutnya yang akan dipelajari:
// 
// Lebih Lanjut mengenai User-Defined Function
// Function Decleration vs Function Expression
// Lebih Lanjut mengenai Parameter / Argument
// Lebih Lanjut mengenai Return Value
// Scope atau Lingkup dari Function 
// Refactoring (Bagaimana cara menuliskan code program secara lebih efektif)
// Hoisting (Sebuah Konsep Bagaimana perilaku dari intrepeter JavaScript dalam membaca baris-baris program kita)
// Closure (terkait dengan Function Expression, dan bagaimana menggunakan Function Expression lebih Kompleks)
// Recursion artinya bagaimana sebuah Function memanggil dirinya sendiri (Topik yang cukup rumit dan membingungkan)

// Tetap semangat jangan menyerah Diandra❤, semoga kelak kamu menjadi Progammer yang hebat dan menghasilkan uang, pokoknya jalani terus ! ( 20:44 | 13 Januari 2025 )

// Asli lo yak diatas, udah aku tulis waktunya sesuai saat itu, jadi jangan berpikir itu tidak pernah terjadi!