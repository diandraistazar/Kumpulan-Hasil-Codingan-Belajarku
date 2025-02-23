// Latihan 12: Destructuring (Function)

// Destructuring pada Array
// function perjumlahPerkalian(a,b) {
//     return [a+b, a*b];
// }

// const [jumlah, kali] = perjumlahPerkalian(2,3)
// console.info(jumlah)
// console.info(kali)


// function kalkulasi(a,b) {
//     return [a+b,a-b,a*b,a/b];
// }

// const [tambah,kurang,kali,bagi = 'Tidak ada bro'] = kalkulasi(2,3)
// console.info(bagi)


// Destructuring pada Object
// function kalkulasiV(a,b) {
//     return ({
//         tambah: a+b,
//         kurang: a-b,
//         kali: a*b,
//         bagi: a/b
//     });
// }

// const {tambah, kurang, kali, bagi} = kalkulasiV(2,3)
// console.info(tambah)


// Destructuring pada Function arguments
const siswa = {
    nama: "Diandra",
    usia: 16,
    kelas: 10,
    mataPelajaranF: {
        informatika: {
            pelajaran: "Informatika",
            nilai: 100,
            uas: 99,
            praktek: `${100}+`
        },
        bahasa_Inggris: {
            pelajaran: "Bahasa Inggris",
            nilai: 50,
            uas: 50,
            praktek: 20
        }
    }
}

function cetakSiswa({nama, usia, kelas, mataPelajaranF: {informatika, bahasa_Inggris}}) {
    return `Hai, nama saya ${nama} yang berusia ${usia} dan duduk di bangku kelas ${kelas}. Pelajaran favorit saya ${informatika.pelajaran} yang memiliki nilai ${informatika.nilai} dan pelajaran ${bahasa_Inggris.pelajaran} yang memiliki nilai tercacat ${bahasa_Inggris.nilai}`
}

console.info(cetakSiswa(siswa))