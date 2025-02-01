// Latihan 13: For In & For Of
// Didalam JavaScript yang baru terdapat Sintaks Looping yang baru yaitu For in & For of

// 1. For of
// "Creates a loop iterating over iterable Object"

// Kalau menurutku for of adalah kita melakukan pengulangan pada setiap element seperti string, array, dan lain-lain.

// Iterable Object
// - String
// - Array
// - Argument / Nodelist
// - TypedArray
// - Map
// - Set
// - User-defined Iterables


const waifu = ['Mita','Cappie','Kind Mita'];
// for
// for ( let i = 0; i < waifu.length; i++ ) {
//     console.info(waifu[i])
// }


// // ForEach
// waifu.forEach((e) => console.info(e))


// for of
// for ( let waifuKawaii of waifu ) {
//     const index = waifu.indexOf(waifuKawaii);
//     console.info(`${waifuKawaii} adalah waifu ke-${index+1}`)
// }

// for ( let [a, b] of waifu.entries() ) {
//     console.info(`${b} adalah waifu ke-${a+1}`)
// }
// .entries() mengakses element beserta index dalam bentuk array


// const liNama = document.querySelectorAll('.nama');

// liNama.forEach(e => console.info(e.textContent))


// // Arguments
// function jumlahAngka() {
//     let jumlah = 0;
//     for ( i of arguments ) {
//         jumlah += i
//     }
//     return console.info(jumlah)
// }

// jumlahAngka(1,2,3,4,5,6,7,8,9)



// For in
const nama = {
    nama: "Diandra",
    umur: 16,
    mataPelajaranF: "Informatika"
}

for ( i in nama ) {
    console.info(nama[i])
}