// Latihan 4: DOM Events

// Apa itu Events? = "Events pada JavaScript memperesentasikan sebuah kejadian yang terjadi di dalama DOM"
// Kejadiannya dapat dilakukan oleh user seperti menekan mouse, keyboard, dan lain-lain yang dilakukan oleh user ataupun dilakukan oleh API

// Apa Itu Evetns menurut CHATGPT? "Events adalah peristiwa atau tindakan yang terjadi di dalam aplikasi, bisa terjadi karena interaksi user atau perubahan dalam status aplikasi. Misalnya seperti klik mouse, hover mouse, input keyboard, atau load halaman"

// Cara 'mendengarkan' event (2 cara)
// - Event Handler
//      Inline HTML Attribute = Menambahkan atribut HTML secara Inline
//      Element Method = menggunakan method untuk element yang telah di seleksi
// - addEventListener


// Event Handler
// untuk menggunakan Event Handler, kalian memanggil ' on<event> ', misalnya jika user mengklik mouse, maka ' onclick '. Event Handler ini akan langsung di tambahkan di element HTML dengan atribut langsung

// Biar gk bingung, langsung aja kita coba

const h1 = document.querySelector('h1');


h1.addEventListener('click', function() {
    const ul = document.querySelector('ul');
    const liNew = document.createElement('li');
    const liNewIn = document.createTextNode('They are the best')
    liNew.append(liNewIn);
    ul.append(liNew)
})

// Itu contoh aku membuat ketika H1 diklik membuat li baru



// Perbedaan antara Event Handler dan addEventListener apa?
// Jika Event Handler ditimpa dengan Event Handler baru, maka yang terjadi Event Handler yang baru akan dijalankan, sementara sebelumnnya tidak akan pernah dijalankan.
// Jika addEventListener ditimpa dengan yang baru, maka yang terjadi keduanya sama-sama dijalankan


// Events List
// - Mouse Event
// - Keyboard Event
// - Resources Event
// - Focus Event
// - View Event
// - Form Event
// - CSS Animation & Transition Event
// - Drag & Drop Event
// - ... masih banyak lagi


// Saran saya jangan pernah memakai Event Handler yang Menambahkan event secara atribut untuk element HTML, itu artinya kamu mengubah di HTML, seharusnya kita hanya mengubah di javascriptnya saja.
// Jadi lebih baik gunakan element event, atau addEventListener()

// Ya segitu aja, semoga materi ini bermanfaat :)