// Latihan 5: Arrow Function

// Biasanya kita membuat function itu dengan cara-cara seperti ini
// - Function Decleration
function nama(nama) {
    console.info(nama);
}
nama('Diandra');

// - Function Expression
let sayHi = function(nama) {
    console.info(`Nama saya adalah ${nama}`);
}
sayHi('Mita');


// Selain 2 cara diatas, kita dapat melakukan-nya dengan Arrow Function. Apa sih itu Arrow Function? Arrow Function adalah bentuk lain dari Function Expression yang lebih ringkas
// Contoh-nya seperti ini
let sayHi2 = (nama) => { 
    console.info(`Hai saya ${nama}`) 
}
sayHi2('Cappie');

// Meskipun bentuk-nya lebih ringkas dari Function Expression terdapat perbedaan dari Arrow Function ini

// Jika parameter-nya hanya satu di Arrow Function kalian tidak perlu menggunakan (), jadi bentuk-nya gini, maka akan tetap berjalan seperti biasa, tapi ingat jika parameter-nya lebih dari satu wajib menggunakan ().
let sayHi3 = nama => { 
    console.info(`Hai saya ${nama}`) 
}
sayHi3('Cappie');


// Bahkan nih, jika statement-nya hanya satu baris seperti yang aku tulis, kalian tidak perlu menulis return-nya, bahkan juga kurung kurawal-nya {}, ini disebut dengan Implisit Return, jadi return-nya nggak usah ditulis secara implisit (terkandung).Ya jika statement lebih dari satu baris wajib pakai return dan kurung kurawal {}. Contoh-nya seperti ini
let sayHi4 = nama => console.info(`Hai saya ${nama}`)
sayHi4('Kind Mita');


// Jika menuliskan Arrow Function tapi tanpa parameter, wajib menuliskan (), meskipun tanpa kurung kurawal {} dan return
let pagi = () => console.info('Hari ini pagi yang cerah');
pagi()

// Melakukan penghitungan jumlah huruf pada string setiap element pada Array siswa
let siswa = ['Diandra','Cappie','Mita'];
let siswaLength = siswa.map( e => e.length )
console.info(siswaLength);

// Jika ingin mengembalikkan dalam bentuk object, agar tidak dikira sebagai blok kode {}, kurung kurawal- nya dibungkus dengan (), sehingga menjadi seperti ini
let waifu = ['Mita','Cappie','Kind Mita'];
let waifuLength = waifu.map( (nama) => ({ nama: nama, waifuLength: nama.length }) );
console.table(waifuLength);

// Kalian juga dapat menghapus nama: , dan jika diliat hasilnya sama dengan nama: nama.


// Ya segitu aja semoga bermanfaat :3
// 22:38 | 27 Januari 2025 . sedang duduk dikamar menghadap laptop dan mengetik ini 