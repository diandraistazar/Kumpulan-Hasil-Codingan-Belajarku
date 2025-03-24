// Practice 6: For in & For of

// A. For in
// const siswa = {
//     nama: "Budi",
//     umur: 15,
//     kelas: "10A"
// };
// for ( const e in siswa ) {
//     console.info(`${e}: ${siswa[e]}`)
// }; 
// // output
// nama: Budi
// umur: 15
// kelas: 10A


// const buah = ['Apple','Jeruk','Mangga'];

// for ( i in buah ) {
//     console.info(i);
// }
// output:
// 0
// 1
// 2


// // B. For of
// const angka = [10,20,30,40,50];

// for ( e of angka ) {
//     console.info(e)
// }
// output:
// 10
// 20
// 30
// 40
// 50


// const teks = "Hello";

// for ( let x of teks ) {
//     console.info(x)
// }
// output:
// H
// e
// l
// l
// o



// const unik = new Set(["Mita","Cappie","Mita","Diandra"]);

// for ( let i of unik ) {
//     console.info(i)
// }


// const angka = [5, 10, 15, 20, 10, 5, 25, 30, 15, 30];
// const newAngka = new Set(angka);

// for ( let i of newAngka ) {
//     console.info(i)
// }


// const set1 = new Set([1, 2, 3, 4]);
// const set2 = new Set([3, 4, 5, 6]);
// const set = new Set([...set1, ...set2])

// for ( a of set) {
//     console.info(a)
// }


const teks = "diandraistazarahman";
console.info(UniqueChars(teks))

function UniqueChars(teks) {
    const jumlah = Array.from(new Set(teks.split("")))
    return `Jumlah karakter unik adalah ${jumlah.length}`
}