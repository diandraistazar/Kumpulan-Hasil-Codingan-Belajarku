// Latihan 1: Object.create()
// Object.create() adalah method JavaScript yang digunakan untuk membuat object baru dengan objek lain sebagai sumber metode atau properti-nya. Ini berguna untuk melakukan pewarisan atau membuat objek turunan dari objek lain.

// Objek yang nanti-nya akan menjadi sumber properti atau metode-nya
const methodSiswa = {
    makan: function(porsi) {
        this.energi += porsi;
    },
    tidur: function(jam) {
        this.energi += jam * 1.5;
    },
    bermain: function(waktu) {
        this.energi -= waktu;
    }
}

function Siswa(nama,energi) {
    let siswa = Object.create(methodSiswa);
    siswa.nama = nama;
    siswa.energi = energi;

    return siswa;
}

let siswa1 = Siswa('Diandra', 5);
let siswa2 = Siswa('Mita', 5);
let siswa3 = Siswa('Cappie', 5);
// metode makan, tidur, bermain tidak di muat didalam variabel siswa1, jika kamu melihat dengan console.info hanya terdapat nama dan energi saja, lantas bagaimana bisa kita mengakses-nya meskipun tidak berada di dalam object-nya

// Hal ini karena, ketika kita menjalankan siswa1.makan(4), JavaScript tidak mencari di dalam variabel yang telah dibuat, melainkan dia akan mencari di Prototype atau sumber dan method-nya yakni methodSiswa

// Jelasnya, methodSiswa ini seperti buku diperpustakaan, setiap siswa dapat membaca buku itu tetapi tidak dapat menyalin bukunya, jadi meski buku nya di perbarui ke tahun yang lebih baru, setiap siswa masih dapat membaca-nya. Contohnya aku membuat siswa1, siswa2, dan siswa3. Ketiga siswa tersebut didalamnya tidak terdapat metode makan, tidur, dan bermain, meskipun begitu kita masih meng-aksesnya melalui mau itu siswa1 sampai siswa3, hal ini mirip ilustrasi yang kusampaikan methodSiswa itu mirip buku yang diperpustakan yang dapat dipinjam oleh semua siswa, semua siswa tidak dapat menyimpan salinan-nya tapi hanya dapat membaca-nya, ketika buku tersebut diperbarui, semua siswa akan merasa efeknya tanpa harus memperbarui setiap salinan yang dimiliki siswa, salinan yang dimaksud adalah methodSiswa yang langsung dimasukkan kedalam setiap siswa1, siswa2, dan siswa3.

// Ngerti nggak?, kek-nya kepanjangan ya
