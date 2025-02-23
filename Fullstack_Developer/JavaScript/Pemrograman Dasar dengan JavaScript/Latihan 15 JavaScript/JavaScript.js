// Latihan 15: Dilatihan kali ini, kita akan belajar mengenai namanya Variabel Scope.
// Variabel Scope adalah lingkup penggunaan variabel diakses.

// Dalam bahasa Pemogramman terdapat 2 jenis Variabel Scope, jadi semua bahasa pemogramman tidak pasti memiliki variabel scope yang sama masing-masing berbeda
// Ada Block Scope dan Function Scope


// 1. Block Scope:
// Block Scope digunakan oleh bahasa pemogramman seperti Java dan C. Bahasa Pemogramman yang menggunakan Block Scope tidak dapat mengakses variabel yang sedang berada di dalam block atau biasanya berada didalam kurung kurawal {}. Seperti didalam Pengkondisian dan Pengulangan For, While, If, Else dll. Variabel yang berada didalam {} tidak dapat diakses dari luar, namun jika dari dalam blok yang sama dengan variabelnya itu baru bisa. 

// 2. Function Scope:
// Berbeda dengan Block Scope, Function Scope dapat menggunakan atau mengakses variabel meskipun sedang berada didalam blok kode. Contoh bahasa pemogramman yang menggunakan Function Scope adalah JavaScript yang sedang kita gunakan sekarang.



// Dalam Bahasa Pemogramman terdapat namanya Windows Scope atau bisa Global Scope dan Local Scope yang cukup penting dibahas

// Ini adalah Windows/Global Scope:
var i = 1;

// Variabel tersebut termasuk kedalam Windows Scope atau Global Scope karena dapat diakses dan digunakan dimanapun didalam program. Jadi meskipun kita mengaksesnya dari dalam blok kode hal itu masih dapat dilakukan


// Sekarang aku akan membuat variabel yang berada didalam blok kode {}
function apaSaja() {
    var s = 1;
}
// Lalu aku ingin mengaksesnya dari luar blok kode {}
console.info(s);

// Maka hasilnya akan error, mengapa karena variabel tersebut berada didalam blok kode {}.
// Kalau sebelumnya variabel yang dibuat diluar itu Window/Global Scope, kalau Variabel yang dibuat didalam blok kode disebut sebagai Local Scope variabel bagian dari blok.

// Untuk memanggil variabel Window/Global Scope menggunakan window.variabel. Jadi, dengan window. kalian dapat memanggil variabel yang berada di global scope meskipun kalian memanggilnya dari dalam blok yang terdapat variabel yang memiliki nama yang sama





// A. Local Scope dan Windows/Global Scope:
// Mengakses atau menggunakan Variabel yang berada di dalam blok kode biasanya disebut Local Scope. Local Scope dan Windows/Global scope berbeda, meskipun keduanya mengacu lingkup penggunaan variabel, terdapat perbedaan dari dimana variabel tersebut diakses

// Global / Windows Scope adalah lingkup variabel yang dapat diakses oleh semua yang berada didalam program tersebut, jadi meskipun mengakses variabelnya dari dalam blok kode hal itu tetap bekerja.

// Local Scope adalah lingkup variabel yang hanya dapat diakses jika berada di blok kode yang sama. Jika mengakses variabelnya dari blok kode lain maka tidak akan bekerja, karena mereka berbeda blok kode. 

// Kurang lebih begitu


// Membuat Faktorial dari function
function faktorial(n) {
    if(n === 0) {return 1}
    return n * faktorial(n-1);
}

console.info(faktorial(5));

// Maka akan menghasilkan nilai 120.

// Berikut apa yang terjadi;
faktorial(5)

// return 5 * faktorial(4) = 5 * 24 = 120
//      return 4 * faktorial(3) 4 * 6 = 24
//          return 3 * faktorial(2) = 3 * 2 = 6
//              return 2 * faktorial(1) = 2 * 1 = 2
//                  return 1 * faktorial(0) = 1 * 1 = 1