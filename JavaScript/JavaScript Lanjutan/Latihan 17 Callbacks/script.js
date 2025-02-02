// Latihan 17: Callbacks

// Callback: "Function yang dikirimkan sebagai parameter function lain"
// Callback: "Function yand dieksekusi setelah function lain selesai dijalankan"

// // 1. Synchronous Callback
// function tampilkanPesan(callback) {
//     const nama = prompt('Masukkan Nama: ');
//     callback(nama)
// }

// tampilkanPesan(function sapa(nama) {alert(`Halo ${nama}!`);})


// const siswa = [
//     {
//         nama: "Diandra",
//         kelas: 10,
//         kelamin: "laki-laki"
//     },
//     {
//         nama: "Mita",
//         kelas: 10,
//         kelamin: "perempuan"
//     },
//     {
//         nama: "Cappie",
//         kelas: 10,
//         kelamin: "perempuan"
//     }
// ];

// console.info("Mulai")
// siswa.forEach(e => {
//     for ( let i = 0; i < 1000000; i++ ) {
//         let date = new Date()
//     }
//     console.info(e.nama)
// })
// console.info("Selesai")


// Asynchronous Callback
// 1. Vanilla JavaScript
function getName(link, sukses, error) {
    let data = new XMLHttpRequest;
data.open('get', link);
data.send();
    data.onreadystatechange = function() {
        if ( data.readyState === 4 ) {
            if ( data.status === 200 ) {
                sukses(data.response)
            }
        }
        
        else if ( data.status === 404 ) {
            error()
        }
    }
};

console.info("Mulai");
getName('data/waifu.json', (r) => {
    JSON.parse(r).forEach(e => {
        console.info(e.Nama)
    })
}, (e) => {
    console.info("Error cok")
});
console.info("Selesai")