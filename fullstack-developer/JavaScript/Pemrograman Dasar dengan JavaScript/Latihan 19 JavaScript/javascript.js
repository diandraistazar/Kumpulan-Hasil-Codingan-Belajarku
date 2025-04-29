// Latihan 19: Melanjutkan latihan sebelumnnya, bagaimana jika kita ingin menambahkan atau menghapus element bagian tengah Array?

// Kita gunakan method namanya slice dan splice


// 1. Slice
// Digunakan untuk mengambil sebagian element dari Array dan mengembalikan nya sebagai Array yang baru tanpa mengubah Array yang asli
var slice = ["Mita", "Cappie", "Lena"];

console.info(slice.slice(1, 2)) // = "Cappie"
// 1 = start (index yang termasuk)
// 2 = end (index yang tidak termasuk)


// 2. Splice
// Digunakan untuk menambah dan menghapus element yang berada didalam array dengan mempengaruhi Array yang asli
var splice = ["Diandra", "Mita", "Cantik"];
var newArray = splice.splice(0,2,"Lena")

console.info(splice); // = ["Lena", "Cantik"]
console.info(newArray); // = ["Diandra", "Mita"]
// 0 = awal index untuk penghapusan
// 2 = jumlah element yang dihapus dari index awal, jika awalnya 0, maka yang dihapus 0 dan 1
// "Lena" ... = Setelah dihapus, diganti dengan element baru, terserah dapat string, number dan lainnya


// Pegabungan dengan method splice dan join
var splice1 = ["Diandra", "Mita", "Cantik"];
splice1.splice(1, 0, "Ganteng")

console.info(splice1.join(" "))
