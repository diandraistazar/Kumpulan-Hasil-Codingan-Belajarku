// Latihan 15: Rest Parameter
// Rest Parameter mirip dengan Spread Operator yaitu menggunakan ... pada iterables seperti Array untuk memecah dan menggambungkan Array, string memecah kata per-kata string menjadi Array, dan lain-lain.

// Sekarang kita akan menggunakan ... pada parameter terutama parameter function.

// Apa itu Rest Parameter? "Memperesentasikan argument pada function dengan jumlah yang tidak terbatas menjadi sebuah Array". Sesuai namanya "REST" artinya sisa dari parameter, jadi sisa parameter akan disimpan dalam bentuk Array.

// function myFungsi(a,b, ...sisa) {
//     return `a = ${a}, b = ${b}, sisa = ${sisa}`
// }

// console.info(myFungsi(1,2,3,4,5,6)) // = a = 1, b = 2, sisa = 3,4,5,6

// ...sisa, rest parameter hanya bisa digunakan diakhir parameter, jika kita menggunakannya diawal maka semua argument akan disimpan dalam rest parameter ini, meski setelah menulis rest parameter terdapat parameter yang lain seprti a, atau b


// function jumlahkan(...angka) {
//     // Cara 1
//     // let hasil = 0;
//     // angka.forEach(e => hasil += e);
//     // return hasil;

//     // Cara 2
//     return angka.reduce((a,b) => a + b, 0);

//     // Cara 3
//     // let hasil = 0;

//     // for ( i of angka ) {
//     //     hasil += i
//     // }
// }

// console.info(jumlahkan(1,2,3,4,5,6,7,8,9))


// Array Destructuring
const kelompok1 = ["Diandra","Mita","Cappie","Kind Mita"];
[ketua, wakilKetua, ...anggota] = kelompok1;


// Object Destructuring
// const team1 = {
//     ketua: "Diandra",
//     wakilKetua: "Mita",
//     anggota: ["Cappie", "Kind Mita"]
// };

// ({ketua: wibu, wakilKetua: wow, anggota} = team1);
// console.info(anggota)


// function filterBy(type, ...values) {
//     // Cara 1 (Kepanjangan)
//     // if ( type == 'number') return values.filter(e => typeof(e) === 'number');
//     // if ( type == 'boolean' ) return values.filter(e => typeof(e) == 'boolean');
//     // if ( type == 'string' ) return values.filter(e => typeof(e) == 'string');
//     // if ( type == 'array' ) return values.filter(e => typeof(e) == 'array');
//     // if ( type == 'object' ) return values.filter(e => typeof(e) == 'object');

//     // return `...tipe data ${type} tidak ada`

//     // Cara 2 (singkat ey)
//     return values.filter(e => typeof(e) === type);
// };

// console.info(filterBy('number', 1,2,3,"Mita", 'What', 60, false, 4, true))


// Yaitu udah si begitu aja