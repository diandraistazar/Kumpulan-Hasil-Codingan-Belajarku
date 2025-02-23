// Latihan 6: Arrow Function lanjutan
// Sebelumnnya kita udah belajar apa itu Arrow Function, yakni function expression baru di JavaScript yang lebih ringkas dibanding yang lamanya. Meskipun begitu, terdapat perbedaan di Arrow Function ini.

// Di pembelanjaran kali ini kita akan mempelajari keyword "this" pada Arrow Function
// Oke, sekarang aku ingin membuat object menggunakan cara Object Literal yang memuat properti dan method
const identitas = {
    nama: 'Diandra',
    kelas: 10,
    sapa: () => { console.info(`Hai, nama saya ${this.nama}`) }
}

// ketika aku mengetik identitas.sapa(), seharusnya outputnya = Hai. nama saya Diandra; kan?, tapi hasilnya malah output = Hai, nama saya undefined. Kenapa ini? kok berbeda dengan menggunakan function expression biasa. 
// Hal ini bisa terjadi karena di Arrow Function tidak memuat konsep namanya this, jadi yang terjadi didalam blok kode-nya JavaScript menganggap this.nama ini object, dan mencarinya hingga ke global scope, karena tidak ketemu maka JavaScript membuat object this yang berisi nama tanpa value, karena tanpa value, maka yang tampil undefined. Mengapa bisa begitu?

// Hal ini karena Arrow Function tidak memuat konsep this didalamannya, Dalam arrow function, nilai this akan "terikat" (bind) pada konteks tempat function tersebut didefinisikan. Artinya, this di dalam arrow function akan merujuk pada objek tempat function itu diciptakan, bukan objek yang memanggilnya.

// Function biasa
const waifu = {
    nama: 'Mita',
    usia: 15,
    sapa: function() {
        console.info(`Saya ${this.nama} yang berusia ${this.usia} tahun`)
    }
}
waifu.sapa() // output = Saya Mita yang berusia 15 tahun

// Arrow Function
const waifu2 = {
    nama: 'Cappie',
    usia: 15,
    sapa: () => {
        console.info(`Nama saya ${this.nama} berusia ${this.usia}`)
    }
}
waifu2.sapa() // output = Saya undefined yang berusia undefined tahun

// Karena this tidak ada di di dalam Arrow function, jadinya this.nama ini diangap sebuah object this yang berisi properti nama. Nah hal itu JavaScript mencari di parent scope-nya tidak ada , lalu dicari di global scope ternyata tidak ada juga. Nah hal itu JavaScript membuat object this sendiri dan memuatkan nama sebagai properti, tapi properti-nya tanpa nilai, itulah mengapa hasilnya undefined

// Tetapi ketika aku membuat object dengan constructor function
function waifube(nama,usia) {
    this.nama = nama;
    this.usia = usia;
    this.sapa = () => {
        console.info(`Nama saya ${this.nama} berusia ${this.usia}`)
    }
    setInterval(function() {
        console.info(this.usia)
    }, 600)
}
const mita = new waifube('Mita',15);
// console.info(mita) // output = Nama saya Mita berusia 15
// Hasilnya ada karena JavaScript menemukan this di waifube yaitu this nya merunjuk nama dan usia

// FUnction akan di hoisting dipindahkan ke atas code keyword beserta nama dan isinya
// variabel juga akan dipindahkan tapi hanya deklerasinya saja

// Jika function decleration didalam function decleration gimana hoisitingnya dari function decleration yang didalam? ya kena hoisting juga cuman didalam function decleration aja

// Function decleration terkena hoisting, sementara function expression tidak karena didalam variabel

// Arrow function tidak punya this sendiri.
// this dalam arrow function akan mengambil this dari lingkup di mana fungsi itu dibuat (disebut lexical scoping).

// this pada arrow function itu mencari this di mana arrow function itu dipanggil, itulah mengapa hasilnya memanggil menggunakan Arrow Function tidak undefined

// jika this pada function decleration dan function expression itu ditentukan dari objek yang terkait dengan function-nya

const cappie = {
    nama: "diandra",
    sapa: () => {
        console.info(`Nama saya ${this.nama}`)
    }
}
cappie.sapa()