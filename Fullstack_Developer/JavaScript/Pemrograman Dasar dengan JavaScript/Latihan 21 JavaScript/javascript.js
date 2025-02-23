// Latihan 21: Mempelajari method Array Filter dan Find

// 1. Filter
// Merupakan method yang berfungsi untuk melakukan sesuatu pada setiap element dan memindahkannya ke Array Baru, jadi jika element memenuhi kondisi tertentu maka akan dipindahkan ke Array yang baru.

// Meskipun Elementnya dipindahkan dari Array yang asli ke Array yang baru, Array yang asli tidak akan terpengaruh.

// Contoh aku ingin membuat Array yang baru berisi angka Genap dari array angka tersebut
var angka = [7,6,2,1,8,3];
var angkaGenap = angka.filter(function(e) {
    return e % 2 === 0
})
console.info(angkaGenap) // Output : [6,2,8] = Genap

// Jika ingin membuat Array baru berdasarkan Array sebelumnnya berisi element yang memenuhi kondisi true atau false.

// Nilai yang harus dikembalikan adalah true atau false saja, selain itu maka tidak akan bekerja



// 2. Find
// Merupakan Method Array yang digunakan untuk mencari element sesuai kondisi yang terpenuhi, method Find mirip dengan filter, hanya saja find hanya mengembalikan satu nilai.

// Contoh aku ingin menampilkan angka ganjil saja
var find = [2,3,4,5,6,7,8];
var angkaGanjil = find.find(function(a) {
    return a % 2 !== 0
})
console.info(angkaGanjil) // Output = 3

// method ,find() hanya mengembalikan 1 element sesuai kondisi terpenuhi yang ditemuinya dari kiri ke kanan, yang pertama element kondisinya sesuai maka hanya element itu yang dikembalikan

// Sebenarnya seperti itu aja si, selanjutnya latihan angkot mengenai pegabungan Array dan Function!
