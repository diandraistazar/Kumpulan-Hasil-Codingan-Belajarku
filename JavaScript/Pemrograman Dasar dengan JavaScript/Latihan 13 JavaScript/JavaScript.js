// Latihan 13: Di latihan kali ini kita akan membahas Parameter dan Argument
// Parameter adalah tempat untuk bahan menjalankan fungsi, biasanya berada di pembuatan functionnya namaFunction(a, b) ....
// Sementara Argument adalah bahan yang dikirim ke function untuk di fungsikan, bentuknya namaFunction(18, 5) ...

// Coba kamu tebak, mana yang termasuk Parameter dan Argument?

function namaFunction(a, b) {
    return a + b;
}

// - - - DAN - - -

alert("Hasilnya adalah" + namaFunction(5,5));

// Jawabannya adalah yang diatas bagian (a, b) adalah parameter, dan yang dibawah bagian (5,5) adalah Argument
// Gimana udah ngerti? Pasti ini gampang aja kok :3

// Contoh aku buat sendiri:
function kali(a, b) {
    return a * b
}

function tambah(a, b) {
    return a + b
}

var a = parseInt(prompt("Masukkan Nilai-1 :"));
var b = parseInt(prompt("Masukkan Nilai-2 :"));
var c = parseInt(prompt("Masukkan Nilai-3 :"));
var d = parseInt(prompt("Masukkan Nilai-4 :"));

alert(`Hasilnya, (${a} + ${b}) x (${c} + ${d}) adalah ${kali(tambah(a,b), tambah(c, d))}`)


// Bagaimana jika Parameter dan Argument tidak sesuai, misalnya Parameter nya 3, Argumentnya cuman 2, sebaliknya Parameter nya 2, Argumentnya 3.

// Karakteristiknya khusus JavaScript, kalau untuk bahasa Pemogramman lagi mungkin tidak akan sama perilakunya dengan JavaScript:

// "Jika Parameter-nya lebih sedikit dari Argument, maka Argument yang kelebihan akan diabaikan"
// Namun "Jika Argument-nya lebih sedikit dari Parameter, maka Parameter yang kelebihan akan diisi dengan nilai Undefined (Nilai yang tidak diketahui)"



// Sebenarnya kata Sandhika Galih, pembelajaran dasar pemogramman Parameter dan Argument cuman sampai sini
// Namun, Khusus di JavaScript, terdapat sebuah Variabel Khusus. Keywordnya adalah Arguments, Argument dengan s dibelakangnya. 
// Arguments | Array yang berisi nilai yang dikirimkan saat fungsi dipanggil
// Secara Default itu adalah variabel Arguments, itu biasanya disebut Sudo Variabel
// Sudo: Istilah merunjuk pada sesuatu yang keberadaanya tidak ada, tetapi kebenarannya ada
// Variabel: Sebuah wadah untuk menampung nilai didalamnya.

// Array? belum pernah belajar kan?
// Array secara singkat merupakan sebuah Variabel, namun sedikit lebih hebat atau sakti, karena Array dapat menampung lebih dari satu nilai
