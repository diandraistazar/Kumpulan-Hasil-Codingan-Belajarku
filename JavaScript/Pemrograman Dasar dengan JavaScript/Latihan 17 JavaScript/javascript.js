// Latihan 17: Kita akan mempelajari namanya Array

// Setiap bahasa pemogramman, pasti terdapat Konsep Array ini meskipun mereka berbeda-beda, ada bahasa pemograman yang menjadikan Array sebagai Tipe data, dan ada yang menjadikannya struktrur data


// Apa itu Array?
// Secara Umum, Array adalah susunan sistematis dari objek-objek serupa

// Secara dalama dunia Pemogramman atau ilmu komputer, Array adalah Tipe data yang digunakan untuk mendeskripsikan kumpulan elemen (nilai atau variabel) yang tiap-tiap elemennya memiliki index. Pastinya setiap bahasa pemogramman memulai index dapat berbeda-beda, jika di JavaScript index dimulai dari angka 0, bisa saja bahasa pemogramman lain dimulai dari angka 1.

// Secara sederhana, Array adalah variabel yang bertipe object. Berbeda dengan variabel biasa, Array memuat lebih dari satu element. Element yang dimuat pun bisa berbeda, bisa string, number, boolean dan sebagainya.


// Bentuk Array
var hari = ["senin", "selasa", "rabu"];
// Variabel dideklerasikan terlebih dahulu dan diberi nama, setelah itu buat kurung siku untuk membuat variabel tersebut menjadi tipe data object atau array, lalu setelah itu diisi nilainya, jika lebih dari satu dipisahkan menggunakan tanda koma ,


// Kenapa Array?
// - Mempermudah dalam mengelola value / nilai / data
//  Penelusuran dan pencarian
// - Manajemen Memori, tidak perlu membuat variabel yang banyak hanya untuk menampung nilai tersebut yang membuat memori kita sedikit kemakan lebih banyak karena variabel itu


// Karakteristik Array?
// - Variabel jamak, artinya variabel yang dapat menampung lebih dari satu value, baik string, number, atau dicampur tipe datanya. Meskipun valuenya lebih dari satu, nama variabel dari valuenya sama, karena semua valuenya dimuat dalam satu variabel yang sama
// - Array juga bisa disebut dengan Kumpulan pasangan key dan nilai | key and value pair, Key adalah index pada Array dengan tipe data integer yang dimulai dari angka 0
// - Array pada JavaScript tipe datanya adalah Object
// - Array pada JavaScript memiliki fungsi / method length untuk menghitung jumlah elemen didalam Array-nya
// - Didalam Array dapat memuat value yang memiliki tipe data yang berbeda-beda


// Penjelasan lebih lanjutnya
// Saat membuat Array pastinya didalam Array tersebut memuat element, element yang kumaksud adalah value ya. Pastinya setiap element memiliki Index yang berbeda-beda yang dimulai dari angka 0. Contoh
var index = ["Mita", "Cantik", "Banget"];

// "Mita" Index-nya 0, "Cantik" Index-nya 1, dan "Banget" Index-nya 2.

// Jika kita ingin menggunakan atau memanggil value didalam Array, contoh aku ingin menampilkan "Mita" di console. Aku cukup menuliskan seperti ini
console.info(index[1]);
// Menuliskan nama variabel Array-nya setelah itu diikuti kurung siku yang berisi element yang dipanggil berdasarkan index (ONLY INDEX).


// Tipe data dari Array ini bukanlah Array, melainkan tipe datanya adalah Object. Kalian dapat mencobanya dengan menuliskan
console.info(typeof(index));
// Maka hasilnya akan memperoleh Object


// Karena Array bertipe Object, pastinya dapat menggunakan fungsi object, seperti .length yang berfungsi untuk mengukur didalam objectnya, karena didalam variabel terdapat array, artinya kita berikan fungsi ini ke variabel yang berisi array tersebut, maka yang terjadi .length akan menghitung berapa jumlah value yang didalamnya, karena dalam variabel index berisi 3 element, maka akan menampilakan 3
console.info(index.length);

// Ingat! Jumlah element dalam Array tidak sama dengan Index, Index sebagai posisi dari element no berapa dari angka 0, sementara Jumlah element merupakan berapa jumlah element atau value yang berada didalam Array.


// Element yang berada di dalam Array dapat berbeda-beda tipe datanya. Contoh
var string = ["Cappie", "Mita", "Diandra"];
var number = [1,2,3];
var bool = [false, true];
var campur = ["Cappie", 2, true];

// Bahkan ketika kamu memiliki sebuah Function Expression 
var myFunc = function() {
    alert("Hello Mita");
}
// Kamu bisa memasukkan Function tersebut kedalam Array
var campur = ["Cappie", 2, true, myFunc]


// Yang lebih kerennya lagi nih, Kamu juga dapat menyimpan Array didalam Array
var campur = ["Cappie", 2, true, myFunc, [1,2,3]];

// Penasaran ingin memanggil Array yang berada didalam Array? caranya begini
console.info(campur[4][1]);
// campur: Nama Arraynya
// [4]: Element index apa yang ingin digunakan
// [5]: Setelah memanggil Element index 4 sebelumnya, kita masuk kedalam elementnya lalu [1] untuk memanggil element yang index-nya 1.

// Array didalam Array biasanya sering disebut dengan Array Multi Dimensi / Array Bersarang, dimana kita mempunayi Array didalam Array
// Kamu boleh membuat Array didalam Array lalu didalam Array lagi sampai seterusnya tidak ada yang melarang :3


// Selanjutnya apa yang dipelajari mengenai Array?
// - Bagaimana cara mengelola atau mengatur Element didalam Array, yang dimana kita dapat menghapus dan menambahkan element
// - Menelusuri Array dengan Looping
// - Method / Function pada Array, Method atau Function merupakan fungsi yang dirancang untuk tipe data tertentu, jadi berbeda dengan function biasanya. 
// - Studi Kasus


// Lumayan Pusing Bree
var link = "E:/Download/Foto/Me-on-1123-18012025 .jpeg"
// Salin linknya lalu buka di chrome coba :)