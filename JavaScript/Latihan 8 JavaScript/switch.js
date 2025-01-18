// Contoh dari Openai Chat
var angka = Number(prompt("Masukkan Angka 1-3:"));

switch (angka)  // true
{
  case 1: console.log("Angka adalah 1"); break;
  case 2: console.log("Angka adalah 2"); break;
  case 3: console.log("Angka adalah 3"); break;
  default: console.log("Angka tidak dikenal");
}

// Number adalah sebuah fungsi untuk mengkonversi angka yang tipe data angkanya bukan number menjadi tipe data number semestinya. 
// Contoh terdapat angka berada didalam string "1", dengan Number("1") = 1, menjadi angka tipe datanya number :3
// Pengkondisian utama yang digunakan switch adalah ===, jadi yang dibandingkan tidak hanya didalamnya melainkan tipe datanya juga.

// Kalau gw Coba:
var nama = prompt("Masukkan Insial Namamu:")

switch (nama) 
{
    case "d": console.log("Wah mungkin namamu Diandra!"); break;
    case "s": console.log("Wah Samsir ini pasti nya!, maaf pak :D"); break;
    default: console.log("Wah nggak tau gw, nyerah deh");
}

// Sini mari gw jelaskan, mayan ngerti ni gw
// Awal-awal disuruh untuk memasukkan insial nama, lalu insial nama tersebut akan disimpan di variabel nama.
// lalu di bagian switch, nama diletakkan di switch() untuk sebagai sesuatu untuk dibandingkan, disini aku menggunakan insial nama yang disimpan di variabel nama
// Nah setelah itu, variabel nama pun dibandingkan.
// Pertama yang dibandingkan adalah case (kasus) sesuatu yang dibandingkan, disini case "d".
// nama dibandingkan dengan "d", jika isi dari nama tersebut adalah "d", hasilnya akan dicek bagian break. Break adalah bagian yang sangat panting, agar kita dapat keluar dari switch ketika kondisinya cocok.
// jika saja tidak sama karena aku memasukkan insial s, maka lanjut ke case berikutnya case "s", karena perbandingan benar maka console.log... dijanlankan, dan break dijanlankan juga agar kita keluar dari switch, dan lanjut eksekusi statement berikutnya

// Peringatan! yang benar untuk dijadikan sebagai bandingkan harus lengkap dengan tipe datanya
// Salah: case d || hasilnya akan error, meskipun huruf cuman tidak ada tipe datanya, yang seharusnya string
// Benar: case "d" || lengkap dengan tipe datanya, maka tidak akan muncul error

// Saat memasukkan sesuatu di prompt, hasilnya selalu bentuk string, jadi jika ingin membandingkan angka, terlebih dahulu konversi menjadi angka

