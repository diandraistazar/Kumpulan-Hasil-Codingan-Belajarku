// Latihan 22: Latihan kali ini kita akan belajar mengenai tipe data Object

// Definisi Object
// Object mirip seperti Array, hanya saja lebih sakti. Jika di Array kita menyimpan element dengan index sebagai penanda-nya, sekarang object menyimpan element dengan kita bisa meng-kostum nama elementnya.

// Struktur Object
var data = {
    nama: "diandra",
    kelas: 10,
    usia: 15,
    sapa: function() {
        console.info("Nama saya adalah " + this.nama + " seorang siswa kelas " + this.kelas + " yang berusia " + this.usia + " tahun :3")
        console.info("Saya tinggal di negara " + this.alamat.negara + " lebih tepatnya di jalan " + this.alamat.jalan + " dan provinsi yang terletak di " + this.alamat.provinsi + ", serta tinggal di rumah nomor " + this.alamat.noRumah)
    },

    alamat: {
        jalan: "Jl. Giri Giri",
        provinsi: "Isekai",
        negara: "Jepang",
        noRumah: 129
    }
};

// var data: merupakan variabel untuk menyimpan Object
// {}: Kurung Kurawal untuk mendeklerasikan Object
// nama: 'diandra', kelas: 10 .... : mereka disebut sebagai properti object

// keyword nama, kelas, usia merupakan variabel yang didalam object atau disebut properti yang kita kostum sendiri serta value-nya

// setiap properti dipisah dengan tanda koma ,

// Function yang terdapat didalam object disebut sebagai method

// Didalam Object kalian dapat menambahkan object lagi seperti yang kulakukan diatas

// untuk memanggil isi object struktrunya
data.alamat.jalan

// data: Nama objectnya 
// .alamat: merunjuk pada properti yang berada didalam object data 
// .jalan: merunjuk pada properti yang berada didalam object alamat

// Jadi 'data' untuk memberitahu object mana yang kita maksud, lalu .alamat untuk memanggil properti yang berada didalam object tersebut, lalu juga .jalan untuk memanggil properti yang berada didalam object alamat. Jadi, object alamat ini object yang berada didalam object data

// Semoga paham aja kamu ini



// Ini adalah code sederhana untuk memanggil method(function) yang berada didalam Object, saya disini memanggil method sapa() yang didalamnnya terdapat kode untuk melakukan perkenalan sederhana
data.sapa()


// Mungkin tidak banyak yang dibahas di pembahasan ini, karena di pembahasan kali ini kita hanya fokus definisi, struktur, dasar dari tipe data object ini. 

// Untuk lebih lengkapnya nanti di pembahasan selanjutnya mengenai
// 1. Membuat Object
// 2. Literal vs Constructor
// 3. Bagaimana memanggil dan mengeksekusi Object
// 4. Mempelajari mengenai keyword this.
// 5. Mempelajari Prototype pada object
// 6. Pewarisan atau Inheritance