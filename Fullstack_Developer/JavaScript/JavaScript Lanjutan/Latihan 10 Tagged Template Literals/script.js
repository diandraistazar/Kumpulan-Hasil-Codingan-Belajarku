// Latihan 10: Tagged Template Literals
// Tagged Template Literals adalah bentuk yang lebih kompleks dari Template Literals, memungkinkan kita untuk membaca Template Literals melalui sebuah Function

// Kalau bingung, ayo code aja !
// Template Literals biasa
// const nama = "Diandra";
// const usia = 16;

// let introduce = `Hai, nama saya ${nama} berusia ${usia}`;
// console.info(introduce); // Output = Hai, nama saya Diandra berusia 16

// Cuman bagaimana kalau kita mengubah Template Literal introduce ini menjadi Tagged Template?, caranya dengan menambahkan sebuah function sebelum template literals-nya, jadi seolah-olah template literal ini menjadi argument function tapi tanpa tanda kurung

// const nama = "Diandra", usia = 16;
// let introduce = fungsi`Hai, nama saya ${nama} berusia ${usia}`

// function fungsi() {
//     return console.info("Telah dipanggil") // output = Telah dipanggil
// }

// Agak aneh ya, template literal-nya udah dikirim sebagai argument ke function tapi nggak kepake, tapi function-nya berhasil dipanggil kan? yang artinya template literal ini udah berhasil dikirim ke function-nya meskipun tidak kita simpan

// Secara Default, Tagged Template ini dapat menerima Argument, liat ini ya
// const nama = "Diandra", usia = 16;
// let tagged = fungsi`Hai, nama saya ${nama} berusia ${usia}`;

// function fungsi(string, nama, usia) { 
    //     // Tagged Template menerima parameter string, nama, dan usia .... 
//     // String: parameter untuk string (bukan ekspresi) yang akan dipecah menjadi beberapa bagian oleh ekspresi
//     // Contoh dari template literal diatas akan menjadi dalam bentuk [] (Array) 
//     // ["Hai, nama saya", "berusia" ...]
//     // Template Literal dipecah menjadi beberapa bagian dan disimpan dalam Array dalam bentuk string

//     // Lalu bagaimana dengan nama, usia? seterusnya itu untuk ekspresi-ekspresi, karena kita memakai 2 ekspresi yaitu nama dan usia, maka parameter tersebut akan dibuat sesuai jumlah ekspresi yang digunakan dalam Template Literals

//     // Jika di console.info
//     console.info(string); // ["Hai, nama saya", "berusia", ""] -- terdapat string kosong karena diakhiri oleh ekspersi
//     console.info(nama); // "Diandra"
//     console.info(usia); // 16

// }


// Nah, jika disuatu kondisi didalam Template Literals memiliki banyak sekali Ekspresi gitu, apalagi function-nya ini dipakai oleh banyak Template Literal yang pastinya setiap itu memiliki jumlah Ekpresi yang berbeda-beda.

// Di JavaScript yang baru kita dapat menggunakan parameter yang bisa menampung semua ekspresi itu, jadi kita hanya perlu menuliskan satu parameter untuk ekspresi, maka semua ekspresi itu akan ditampung dalam Array.

// Cara Menggunakan-nya seperti ini
// function fungsi(string, ...nameVar) {
    //     ...
    // }
    
// Jadi kita menuliskan ... setelah itu menuliskan nama-nya, namanya bebas terserah kalian, dan ketika kalian melihat isinya
//     const nama = "Diandra", usia = 16;
//     fungsi`Hai, nama saya ${nama} berusia ${usia}`;

//     function fungsi(string, ...nameVar) {
    //         console.info(nameVar) // Output ["Diandra",16]
    //     }
    
    // // Cukup membantu mu bukan?
    
// const nama = "Diandra", usia = 16;
// const fug = fungsi`Hai, nama saya ${nama} berusia ${usia}`;
// console.info(fug)

// function fungsi(string, ...namaVar) {
//     return string.reduce((a,b,i) => {
//         return `${a}${namaVar[i-1]}${b}`
//     })
// }


// Contoh Penggunaan Tagged Template Literals
const nama = "Diandra", usia = 16, waifu = "Mita and Cappie", gmFav = "Osu";
const fug = highlight`Hai, nama saya ${nama} berusia ${usia} tahun yang memiliki waifu ${waifu} serta game kesukaan ${gmFav}`;
console.info(fug)

function highlight(string, ...namaVar) {
    return string.reduce((a,b,i) => {
        console.info(a)
        return `${a}<span class="hg">${namaVar[i-1]}</span>${b}`
    })
}

document.body.innerHTML = fug;


// Penggunaan Lain?
// - Escaping HTML Tags --> Menghindari string atau karakter yang tidak diinginkan di halaman web
// - Translation & Internationalization --> Alih bahasa untuk website
// - Styled Components --> Sebagai Style dari halaman web