// Latihan 16: Kali ini kita akan membahas mengenai Function Decleration dan Function Expression.

// Function Decleration:
// Struktur:
function namaFunction(a) {
    // function body
}

// Didalam Function Decleration terdapat strukturnya
// function: keyword untuk membuat function
// namaFunction: sebagai identitas atau nama function untuk mempermudah dipanggil
// (a): Parameter (Optional)
// {}: Bagian blok kode function tempat mengeksekusi kode-kode


// Function Expression:
// Struktur:
function {
    // function body
}

// Function: (Wajib)
// namaFunction: (optional)
// (a): (Optional)
// {}: (Wajib)


// Jadi perbedaan dari strukturnya terletak pada namaFunction saja, jika di Function Decleration mewajibkan memiliki nama function, sementara Function Expression itu Optional boleh ada atau tidak


// Perbedaan Function Decleration dan Function Expression
// A. Function Declreation

// 1. Lebih Fleksibel, dapat ditulis dimana saja, di buat baru dipanggil atau dipanggil baru dibuat. Hal ini dapat terjadi karena didalam JavaScript terdapat namanya Hoisting.
// Hoisting: adalah perilaku default JavaScript untuk memindahkan Deklerasi baik Variabel, function atau kelas ke posisi paling atas di skrip saat ini. Jadi meskipun dipanggil baru di deklerasikan, JavaScript secara otomatis sebelum mengeksekusi kodenya selalu memindahkan semua deklerasi-deklerasi tadi kebagian atas skrip atau program. Sehingga strukturnya bagian atas skrip merupakan tempat deklerasi-deklerasi dan bagian bawahnya setelah itu merupakan kumpulan kode-kode.
// Tapi ingat! Hanya deklerasinya saja tidak ada nilai didalamnya, jadi hanya var a; tanpa nilai.
console.info(a);

var a = "Diandra";

// Yang terjadi

var a;
console.info(a) // Undefined (Tidak ada nilai)

var a = "Diandra";

// Deklerasi Function berbeda, tidak hanya mengangkat deklerasinya saja tapi diangkat secara utuh, atau diangkat bagian semua dari deklerasi Functionnyaa!. Itulah mengapa meskipun Deklerasi Function berada dibawah, kita masih dapat memanggilnya sebelum di deklerasikan



// 2. Lebih Mudah Dipahami oleh para pemula seperti saya :3




// B. Function Expression
var ingatanKotak = function() {
        let mainan = "Bola";
    
        function kotakKecil() {
            return mainan;
        }
    
        return kotakKecil;
};
console.info(ingatanKotak());
// 1. Didefinisikan terlebih dahulu, baru setelah itu dipanggil. Hal ini membuat Function Expression tidak se-fleksibel Function Decleration. Karena mengingat Function Expression itu menjadi nilai di suatu variabel. 

// 2. Lebih PowerFull, meskipun begitu Function Expression lebih OP dibandingkan Function Decleration:
//  - Sebagai Closure
//  - Sebagai Argument untuk function lain
//  - IIFE (Immediately Invoked Function Expression)



// Pilih yang Mana?
// Function Decleration atau Function Expression

// Ingat!
// Function Expression biasanya digunakan di bahasa Pemogramman JavaScript tingkat lanjut dan lebih modern.