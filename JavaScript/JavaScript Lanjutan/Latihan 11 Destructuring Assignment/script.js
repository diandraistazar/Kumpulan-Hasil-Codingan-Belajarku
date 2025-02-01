// Latihan 11: Destructuring Assignment
// Apa itu Destructuring Assignment? Singkatnya, ini adalah fitur baru di JavaScript yang memungkinkan kita untuk menyimpanan Element Array atau Properti dalam Object ke dalam Variabel dengan cara yang lebih ringkas dan mudah dibaca

// Contohnya:
// const nama = ["Diandra","Mita","Cappie"] // Array berisi nama

// // Destructuring Assignment

// 1. Array
// const [a,b,c] = nama;
// // setelah deklerasi variabel diisi nama-nama variabel didalam [] (Array) sesuai kita mengambil-nya dari mana, setelah itu sama dengan = dan beri nama variabel Array-nya dari mana

// // Ketika ditampilkan
// console.info(a) // = "Diandra"
// console.info(b) // = "Mita"
// console.info(c) // = "Cappie"


// 2. Object
// Sedikit berbeda dengan Array, karena sebelumnnya Array tidak memiliki nama unik seperti Object jadi kita dapat bebas mengkostum namanya, jika di object kita menggunakan nama properti-nya
// const siswa = {
//     nama: "Diandra",
//     kelas: 10,
//     mataPelajaranF: "Informatika"
// };

// const {nama,kelas,mataPelajaranF} = siswa;

// console.info(nama)
// console.info(kelas)
// console.info(mataPelajaranF)


// Namun jika ingin bisa di costum (alias) kita bisa menggunakan cara ini
// const waifu = {
//     waifu1: 'Mita',
//     waifu2: 'Cappie',
//     waifu3: 'Kind Mita'
// };

// const {
//     waifu1: yandere,
//     waifu2: kawaii,
//     waifu3: wow
// } = waifu

// console.info(yandere); // = "Mita"
// console.info(kawaii) // = "Cappie"
// console.info(wow) // = "Kind Mita"

// Jadi kita masukkan nama properti-nya lalu diisi dengan variabel (nama terserah), sehingga kita dapat meng-kostum nama variabel yang menyimpan properti di waifu


// Di Destructuring Assignment, kita dapat memberi value default jika value-nya tidak berada di Object. Contohnya

// const data = {
//     nama: "Diandra"
// }
// const {nama, usia  = 16} = data
// // Menambahkan properti usia yang diisi dengan angka 15, sehingga hasilnya
// console.info(nama); // "Diandra"
// console.info(usia); // 15

// Ketika kita langsung akses usia langsung dari objectnya
// console.info(data.usia) // output undefined


// Hal lain yang bisa dilakukan oleh Destructuring Assignment itu ketika pada Array ingin mengambil element tertentu saja yang dimasukkan dalam variabel, caranya dengan menghilangkan nama variabel-nya dan menyisakan koma, contohnya aku ingin mengambil element "Satu" dan "Tiga"
// const angka = ["Satu","Dua","Tiga","Empat"];
// const [a, , c, ] = angka
// console.info(a) // = "Satu"
// console.info(c) // = "Tiga"


// Jika ingin menukar isi variabel, kita juga dapat melakukan-nya dengan Destructuring Assignment, yakni dengan memasukkan variabel kedalam [] lalu = dan menukar variabel-nya. Contoh aku ingin menukarkan isi variabel a dan b
// let a = 'variabel a';
// let b = 'variabel b';

// // Gunakan [] untuk menampung variabel-nya
// [a,b] = [b,a]

// // Ketika ditampilakan
// console.info(`Ini variabel a: ${a}`) // = 'Ini variabel a: variabel b'
// console.info(`Ini variabel b: ${b}`) // = 'Ini variabel b: variabel a'


// Destructuring Assignment dapat juga me-retrun value pada function, jadi nilai yang dikembalikan secara langsung akan dipetakan dalam Descructuring Variabel
// function angka() {
//     return [1,2,3]
// }

// const [a,b,c] = angka();
// console.info(a) // = 1
// console.info(b) // = 2
// console.info(c) // = 3


// Jika didalam Array itu kita tidak tahu berapa banyak element-nya, dan jika kita melakukan Assignment ini pasti malas ya menulis-kannya satu, dengan REST PARAMETER kita dapat menyimpan semua element tersebut dalam Array, Contohnya
// const [...angka] = [1,2,3,4,5,6,7,8,9,10]
// console.info(angka) // = output [1,2,3,4,5,6,7,8,9,10]



// const siswa = {
//     nama: "Diandra",
//     kelas: 10,
//     mataPelajaranF: "Informatika"
// };

// const {usia = 16,kelas,mataPelajaranF} = siswa
// console.info(usia)


// Assignment Dengan Deklerasi Object disimpan dalam let, const, atau var
// const {nama,kelas,mataPelajaranF,usia = 16} = {nama: "Diandra", kelas: 10, mataPelajaranF: "Informatika"};
// console.info(usia)


// Assignment Tanpa Deklerasi Object disimpan dalam ()
// ({ nama, mataPelajaranF } = { nama: 'Diandra', mataPelajaranF: 'Informatika' })
// console.info(nama)


// Sebelum-nya menggunakan Rest Parameter di Array , maka Rest Parameter akan berbentuk Array juga, jika di dalam Object {} maka Rest Parameter-nya berbentuk object juga
// const email = {
//     email1: 'email1@example.com',
//     email2: 'email2@example.com',
//     email3: 'email3@example.com',
//     email4: 'email4@example.com',
//     email5: 'email5@example.com'
// }

// const {email1: a, ...emails} = email
// console.info(emails)


// Jika hanya ingin mengambil id pada array atau object lalu dikirim ke function untuk di proses bisa dilakukan begini
// const data = {
//     id: "000",
//     nama: "diandra",
//     kelas: 10,
//     email: "diandra@example.com"
// }

// function getJustId({id}) {
//     return `Your id is ${id}`
// }

// console.info(getJustId(data)) // output "Your id is 000"

// Terima Kasih :)