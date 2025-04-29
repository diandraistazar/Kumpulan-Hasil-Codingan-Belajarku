//  Destructuring Assignment
// ---EZ
// Soal 1: Array Destructuring (Dasar)
// const warna = ["Merah","Hijau","Biru"];
// const [pertama, kedua, ketiga] = warna
// console.info(pertama) // Merah
// console.info(kedua) // Hijau
// console.info(ketiga) // Biru


// Soal 2: Array Destructuring dengan Default Value
// const angka = [5,10];
// const [a, b, c = 20] = angka;
// console.info(a) // 5
// console.info(b) // 10
// console.info(c) // 20


// Soal 3: Object Destructuring (Dasar)
// const siswa = {
//     nama: 'Budi',
//     umur: 16,
//     kelas: '10A'
// };
// const {nama, umur, kelas} = siswa;
// console.info(nama); // 'Budi'
// console.info(umur); // 16
// console.info(kelas); // '10A


// Soal 4: Object Destructuring dengan Alias
// const produk = {
//     namaProduk: 'Laptop',
//     harga: 7500000
// };
// const {namaProduk: nama, harga: biaya} = produk;
// console.info(nama); // 'Laptop'
// console.info(biaya); // 7500000


// Soal 5: Destructuring dalam Parameter Fungsi
// const buku = {judul: 'Harry Potter', penulis: 'J.K. Rowling'}
// tampilkanBuku(buku)

// function tampilkanBuku({judul, penulis}) {
//     return console.info(`Buku: ${judul}, ditulis oleh ${penulis}`);
// }



// ---EZZ keatas
// Tantangan 1: Swap Variabel dengan Destructuring
// let x = 10;
// let y = 20;

// [x, y] = [y, x]

// console.info(x) // 20
// console.info(y) // 10


// Tantangan 2: Nested Destructuring (Destructuring Bersarang)
// const user = {
//     nama: "Rudi",
//     alamat: {
//         kota: "Jakarta",
//         negara: "Indonesia"
//     }
// };

// const {nama, alamat: {kota, negara}} = user
// console.info(nama) // "Rudi"
// console.info(kota) // "Jakarta"
// console.info(negara) // "Indonesia"


// Tantangan 3: Destructuring dengan Rest Operator
// const angka = [1,2,3,4,5,6];
// const [pertama, kedua, ...lainnya] = angka;

// console.info(pertama) // 1
// console.info(kedua) // 2
// console.info(lainnya) // [3,4,5,6]


// Tantangan 4: Destructuring dengan Default Value & Alias
// const data = {
//     id: 101,
//     username: 'cool_dev'
// };
// const {id, username: user, email = "email@example.com"} = data

// console.info(id) // 101
// console.info(user) // 'cool_dev'
// console.info(email) // "email@example.com"


// Tantangan 5: Destructuring dalam Function Return
// const user = {
//     nama: 'Adit',
//     usia: 25,
//     pekerjaan: 'Programmer'
// };

// function getUser({nama, usia, pekerjaan}) {
//     return {nama, usia, pekerjaan}
// }
// const {nama, pekerjaan, usia} = getUser(user);

// console.info(nama) // 'Adit'
// console.info(usia) // 25
// console.info(pekerjaan) // 'Programmer'

