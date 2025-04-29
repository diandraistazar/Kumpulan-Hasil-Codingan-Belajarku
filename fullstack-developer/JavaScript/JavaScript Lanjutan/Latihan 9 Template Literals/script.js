// Latihan 9: Template Literals (String Template)

// Apa itu Template Literals? "Template Literal adalah string literal yang memungkin-kan adanya expression didalam-nya"

// Bingung apa itu String Literal? Ya string literal pastinya udah pernah kamu buat sebelum-nya yang bentuknya "Diandra" atau 'Diandra', kedua string tersebut disebut String Literal dan meskipun menggunakan tanda kutip berbeda, kedua-nya tetap sama-sama string. Sekarang kita juga dapat membuat String menggunakan Back Tick ``

// Template Literal
// - Menggunakan `` (Back Tick)
// - Multi-Line String
// - Embedded Expression
// - HTML Fragments
// - Expression Interpolation
// - Tagged Template
// Itulah hal-hal yang dapat dilakukan oleh Template Literal ini


// Contoh Penggunaan dari Template Literal
// Menggunakan seperti string biasa
// `String text`

// Dapat memuat Enter didalam-nya (Multi-Line String)
// `String Text
//  String Text
//  String Text`

// Memuat Expression (Embedded Expression)
// `String Text ${expression} string text`

// tag (Tagged Template)
// tag `String text ${expression} string text`


// Multi-Line String
// Biasanya kalian jika ingin membuat baris baru di dalam string pastinya menggunakan \n (new line), seperti ini
// console.info('Ini Baris 1\nIni Baris 2')

// Namun didalam String back tick, kalian cukup menggunakan enter saja
// console.info(
// `Ini Baris 1
// Ini baris 2`)


// Multi-Line String (HTML Fragments)
