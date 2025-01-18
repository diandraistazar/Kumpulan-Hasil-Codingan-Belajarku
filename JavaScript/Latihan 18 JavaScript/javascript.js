// Latihan 18: Latihan kali ini, kita akan belajar
// - Bagaimana cara mengelola element didalam Array, seperti menghapus atau menambahkan element di Array
// - Menelusuri Array dengan Looping
// - Method atau fungsi khusus untuk tipe data Array
// - Dan bagian serunya yakni Studi kasus (praktek)

// 1. Menambahkan atau Mengisi Element didalam Array
// Seperti yang kita tau, biasanya untuk membuat Array seperti ni
var array = ["Mita", "Cantik", "Banget"];
// Atau
var array = [];
array = ["Mita", "Cantik", "Banget"];

// Lalu jika ingin menampilaknnya di console, hasilnya akan ditampilakn kedalam bentuk Object
console.info(array);

// Jika kamu hanya ingin menampilkan salah satu elementnya contoh "Mita", tuliskan juga index elementnya
console.info(array[0]);


// Jika ingin membuat Array-nya terlebih dahulu tanpa isi, lalu setelah itu diisi element, kamu bisa menuliskan
var array1 = [];
array1[0] = "Mita";
array1[1] = "Cantik";

console.info(array1);
// Jadi, kamu menuliskan nama Array-nya lalu diikuti index-nya dan setelah itu diisi valuenya atau elementnya, sebagai contoh aku mengisi index 0 dan 1 adalah "Mita" dan "Cantik"


// 2. Menghapus atau Mengurangi Element di dalam Array
// Pertama, untuk menghapus element didalam Array kita harus terlebih dahulu mempunayi Array yang telah diisi element, masa pengen ngehapus cuman isi Array-nya kosong :)
var waifu = ["Cappie", "Kind Mita", "Crazy Mita", "Mila"];

// Lalu jika ingin menghapusnya salah satu elementnya, menghapusnya harus menggunakan index bukan valuenya
waifu[3] = undefined;
console.info(waifu);
// Kita mengisi index nomor 3 dengan value undefined artinya tidak ada nilai-nya. Sehingga hasilnya menjadi index nomor 3 menjadi undefined, elementnya tidak hilang hanya saja valuenya menjadi undefined


// Cara diatas merupakan cara Menambah dan Menghapus element secara Manual, nanti ada cara yang lebih mudahnya menggunakan method array


// 3. Menampilakan isi Array
// Sebelumnnya, hasil menampilkan Array dalam bentuk Object, tapi cara yang benarnya menggunakan Looping, menampilkan isinya satu-persatu

var nampilIsi = [1, "Mita", false, 10.5];

for(let i = 0; i < nampilIsi.length; i++) {
    console.info(nampilIsi[i]);
}

// .length merupakan method tipe data Object untuk menghitung berapa element yang terdapat didalam Array

var murid = ["Diandra", "Mita", "Cappie", "Lena", "Ryu", "Artemis", "Mila", "Aiz", "Syr"];

for(let i = 0; i < murid.length; i++) {
    console.info("Murid ke-" + (i+1) + ": " + murid[i]);
}



// Kita sudah melakukan Menambahkan, Menghapus, dan Menampilakan Element di dalam Array. Meskipun cara yang digunakan masih cara manual
// Sebenarnya ada cara yang lebih mudah yakni menggunakan Method Function dari Array-nya

// ,length: untuk mengetahui berapa element yang terdapat didalam Array
//  contoh: murid.length = 9

// .join(separator): untuk menggabungkan semua element yang berada di dalam Array menjadi sebuah string. separator merupakan tanda pemisah antar element, separator defaultnya adalah tanda koma ,
//  contoh: murid.join() = "Diandra,Mita,Cappie,Lena,Ryu,Artemis,Mila,Aiz,Syr"

// .toString(): sama seperti .join, bedanya .toString() berfungsi untuk mengkonversi suatu value ke tipe data string, sementara .join untuk menggambungkan semua element yang berada didalam Array menjadi sebuah string plus dapat diubah pemisahnya.

// push(): untuk menambahkan element ke bagian akhir array, ya singkatnya menambahkan element lah intinya
//  contoh: murid.push("Sankarea", "Shinoa") = "Diandra", "Mita", "Cappie", "Lena", "Ryu", "Artemis", "Mila", "Aiz", "Syr", "Sankarea", "Shinoa"

// .pop(): untuk menghapus element di bagian akhir array, ya sama seperti sebelumnnya, cuman bedanya untuk menghapus

// .shift(): sama seperti method .pop(), cuman bedanya yang dihapus adalah bagian awal element dari Array, singkatnya dihapus element pertama di dalam Array

// .unshift(): method ini mirip seperti .push(), bedanya yang ditambahkan bagian awal dari Array, bedanya cuman diposisi lah intinya


// Method pada Array

// .join(separator)
var join = ["Mita", "Cantik", "Banget"];

console.info(join.join(" "));
// Separator aku menggunakan spasi atau string yang berisi spasi


// .push()
var push = ["Mita"];
push.push("Sankarea", "Cappie", "Shinoa") // = 4 menunjukkan jumlah element pada Array

console.info(push); // = "Mita", "Sankarea", "Cappie", "Shinoa"
// Aku menambahkankan 3 waifu ke Array push, jika lebih dari satu pisahkan dengan tanda koma , .Serta saat menambahkan Array pastikan tipe data elementnya jelas, disini aku menggunakan tipe data string untuk menyimpan nama waifu ku

// .push() menambahkan value baru ke Array dan mengembalikan nilai berapa banyak element dalam Array


// .pop()
var pop = ["Mita", "Cappie"];
pop.pop(); // = "Cappie" bagian element terakhir dari Array

console.info(pop); // = "Mita"


// .shift()
var shift = ["Lena", "Ryu"];
shift.shift(); // "Lena" bagian element awal dari Array

console.info(shift); // = "Ryu"


// .unshift()
var unshift = ["Syr", "Miku"];
unshift.unshift("Mita"); // =  4 jumlah element dalam Array

console.info(unshift); // = "Mita", "Syr", "Miku"


// Kurang lebih begitu penjelasannya, aku harap penjelasan ini dapat membantu ku dikemudian hari jika lupa dengan penjelasan method ini.

// Sekali lagi namaku Diandra, dan sampai jumpa di materi selanjutnya