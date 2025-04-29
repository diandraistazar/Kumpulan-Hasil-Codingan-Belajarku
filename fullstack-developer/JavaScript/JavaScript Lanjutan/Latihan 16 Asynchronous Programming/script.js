// Latihan 16: Asynchronous Programming

// Asynchronous JavaScript
// - Callback
// - Promise
// - ajax
// - Async & Await

// JavaScript: "Adalah bahasa pemogramman tingkat tinggi dan dinamis yang secara umum dapat berjalan di browser" ( Secara Umum )

// JavaScript: "Is a single-thread, non-blocking, asynchronous and concurrent language" ( Secara Lanjutan )

// Thread: "Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain", artinya JavaScript hanya dapat melakukan satu hal pada waktu tertentu

// Blocking dan non-Blocking
// Blocking: artinya jika suatu tugas itu membutuhkan waktu yang lama untuk diselesaikan, maka tidak dapat meng-eksekusi tugas selanjutnya, jadi harus nunggu dulu tugas ini selesai setelah itu dapat melanjutkan tugas selanjutnya

// non-Blocking: artinya jika suatu tugas itu masih lama untuk diselesaikan, kita masih dapat meng-eksekusi tugas selanjutnya, jadi tanpa nunggu-nunggu, jika lama maka ditinggalkan dulu dan lanjut tugas selanjutnya, tugas yang ditinggal tetap jalan hingga selesai.


// Asynchronous dan Synchronous ( mengeksekusi kode )
// Synchronous: ini meng-eksekusi secara biasa, satu per-satu diselesaikan, tidak dapat meninggalkan kode yang belum selesai, jadi harus ditunggu dulu.

// Asynchronous: jadi jika meng-eksekusi tugas pertama, dan belum selesai, thread-nya pindah ke tugas-selanjutnya, setelah itu jika tugas pertama sudah selesai akan di tanggapi.

// Asynchronous dengan Single Thread (seperti bekerja dengan menunggu giliran tapi tetap ada kemajuan):
// Kamu hanya punya satu tangan, tetapi kamu tidak harus menunggu pekerjaan selesai sebelum memulai pekerjaan lain. Misalnya, ketika kamu sedang menunggu jawaban dari email yang sudah dikirim, kamu bisa mulai menulis laporan. Begitu jawaban email datang, kamu akan menanggapinya. Kamu tetap hanya menggunakan satu tangan (hanya satu thread), tapi kamu bisa melakukan pekerjaan yang berbeda tanpa harus menunggu pekerjaan sebelumnya selesai. 

// Asynchronous + Single-Thread = Concurrency ( Kemampuan untuk menjalankan beberapa tugas secara bersamaan )
// Asynchronous + Multi-Thread = Parallelism ( Kemampuan menjalankan tugas secara bersamaan dalam satu waktu )

// Kesimpulan:
// - Single vs Multi Thread
//      Lingkungan eksekusi 'task' 
// - Blocking vs Non-Blocking
//      Teknik 'ngoding' ( I/O terkait )
// - Synchronous dan Asynchronous
//      Teknik 'ngoding' ( HTTP Request terkait )
// - Concurennt vs Parallel
//      Lingkungan eksekusi 'task'


// Jadi, JavaScript ini bahasa pemogramman yang memiliki satu thread, non-blocking ( artinya jika suatu proses itu lama, program dapat lanjut proses selanjutnya ), asynchronous ( dapat melakukan tugas secara bersamaan ), dan concurennt ( kemampuan melakukan sesuatu secara bersamaan )


// Di JavaScript, terdapat machine yang menjalankan JavaScript ini yaitu "V8 Engine" yang ditanam dalam Web Browser

// Don't block event loop!