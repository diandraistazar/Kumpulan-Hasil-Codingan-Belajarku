// Latihan 10: Latihan kali ini membuat sebuah game Suit Jawa menggunakan JavaScript

// Berikut adalah Algoritma atau Sudo code nya

// Menangkap Pilihan Player
var tanya = true;

while(tanya) {
    var player = prompt("Pilih Pilihanmu! :\nGajah, Semut, atau Manusia");


    // Menangkap Pilihan Komputer
    // Membangkitkan Bilangan Random
    var komputer = Math.random();

    // Melakukan pemilihan secara random antara ketiga hewan sesuai angka yang ditetapkan
    if(komputer < 0.33) {
        komputer = "Gajah"
    }

    else if(komputer >= 0.33 && komputer <= 0.66) {
        komputer = "Semut"
    }

    else {
        komputer = "Manusia"
    }

    hasil = "";
    // Menentukan Rules
    if(player == komputer) {
        hasil += "SERI!"
    }
    else if(player == "Gajah") {
        hasil += (komputer == "Semut") ? "KALAH!" : "MENANG!";
    }
    else if(player == "Semut") {
        hasil += (komputer == "Manusia") ? "KALAH!" : "MENANG!";
    }
    else if(player == "Manusia") {
        hasil += (komputer == "Gajah") ? "KALAH!" : "MENANG!";
    }

    else {
        hasil += "tidak dapat ditentukan!!"
    }


    alert("Hasilnya " + hasil + ", karena kamu memilih " + player + ", sementara komputer memilih " + komputer)
    tanya = confirm("Apa ingin main lagi?");
}

alert("Terima Kasih Sudah Bermain :3, maaf jika gemnya jelek\n\nBy: ❤Mita and Diandra :D")





// Sintaks seperti ini
hasil += (komputer == "Semut") ? "KALAH!" : "MENANG!";

// komputer apakah sama dengan "Semut", jika isinya sama, maka "KALAH!", mengapa? karena dari kiri ke kanan, yang paling depan true dan paling belakang false, kalau "MENANG!", nya didepan artinya true = "MENANG!", cuman didepan karena "KALAH!", maka true = "KALAH!".

// ==: Membandingkan nilai
// ?: menghubungkan antara 2 code
// : atau

// Jadi cara bacanya dalam bahasa manusia:
// "Apakah Komputer sama dengan "Semut"?", jika true maka nilainya "KALAH!", tetapi jika false maka nilainya "MENANG!", setelah itu lakukan penugasan nilainya kedalam variabel hasil.

// Aku membuatnya kebalik, karena menyesuaikan pilihanku antara Semut, Manusia, dan Gajah!