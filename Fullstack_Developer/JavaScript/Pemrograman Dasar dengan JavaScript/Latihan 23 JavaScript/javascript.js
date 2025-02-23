// Latihan 23: Membuat Object

// Sebelumnnya, kita sudah pernah membuat object cuman masih sederhana. Ada beberapa cara dalam membuat Object ini
// 1. Object Literal, merupakan pembuatan object yang udah kita coba sebelumnya dengan menuliskan variabel yang berisi object
// 2. Function Decleration
// 3. Constructor Function ( keyword new ), cara yang inilah nanti cara yang paling sering digunakan
// 4. Object.create()


// a. Object Literal
// Cara ini udah kita pernah coba sebelumnnya, dengan mendeklerasikan sebuah variabel yang isinya sebuah object. Contohnya
var nama = {
    nama: 'diandra',
    kelas: 10,
    usia: 15
}
// Mendeklerasikan variabel nama yang isinya properti object nama, kelas, dan usia


// b. Function Decleration
// Cara ini menggunakan function yang didalamnnya terdapat kode untuk membuat object, jadi kita hanya perlu mengirimkan argument yang sesuai, maka secara otomatis function akan membuat kannya
function siswa(nama,usia,kelas) {
    var murid = {}; // Object yang isinya kosong, nanti akan dilakukan penugasan
    murid.nama = nama;
    murid.usia = usia;
    murid.kelas = kelas;
    return murid
}

var siswa1 = siswa('diandra', 15, 10);

// Aku membuat function decleration yang berisi pembuatan properti untuk object, 
//  murid.nama = nama;

// murid: nama variabel object yang kosong untuk dilakukan nantinya penugasan
// .nama: berfungsi untuk membuat properti didalam object murid, itulah mengapa menggunakan titik . sebagai penghubung
// = nama: value yang ditugaskan ke dalam properti nama yang telah dibuat tadi, contohnya aku menugaskan parameter nama, yang nantinya untuk 'diandra'.

// Jika, kamu paham function seharusnya penjelasan ku bisa kamu mengerti


// c. Constructor Function
// Cara ini mirip seperti function, jadi kita harus membuat function terlebih dahulu, cuman bedannya di isinya
function Siswa(nama,usia,kelas) {
    this.nama = nama;
    this.usia = usia;
    this.kelas = kelas;
}

var siswa2 = new Siswa('mita', 15, 10);

// Hampir mirip dengan function decleration yang baru saja kita buat tadi, hanya saja tanpa variabel object dan return.

// this.nama = nama
// hampir sama dengan sebelumnnya penjelasannya, hanya saja berbeda di this ini, jadi aku hanya akan menjelaskan this ini merunjuk kemana

// this: sebelumnnya disini adalah nama object yang dimaksud, sekarang menjadi this. This itu seperti variabel yang berisi object kosong yang belum dimuat apa pun, this ini ada tapi tidak keliatan aja, nah jika dibuat keliatan seprti ini (hanya ilustrasi)

// function Siswa1(nama,kelas,usia) {
//    var this = {};
//    this.nama = nama;
//    this.kelas = kelas;
//    this.usia = usia;
// }

// Jadi this merunjuk variabel object kosong yang dibuat oleh JavaScript secara Implisit. Kira-kira seperti itu


// Aku ingin membuat Object yang menampung data Mita
function userData(nama,kelamin,usia,game) {
    this.karakter = nama;
    this.kelamin = kelamin;
    this.usia = usia;
    this.game = game;
}

var dataMita = new userData('Mita', 'Perempuan', 15, 'Miside');



// 4. Object.create()
// *Nanti diupdate lagi, kata materi ini harus mempelajari constructor lebih dalam terlebih dahulu :)
