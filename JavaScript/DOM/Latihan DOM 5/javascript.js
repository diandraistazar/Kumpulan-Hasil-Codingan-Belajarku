// Tidak menerapkan Travesal (Penelusuran)
// const close = document.querySelectorAll('.close');
// const kontak = document.querySelectorAll('.kontak');

// close.forEach(function(e,i) {
//     e.addEventListener('click', function(){
//         document.body.removeChild(kontak[i]); // Menghapus
//     })
// })

const close = document.querySelectorAll('.close');

close.forEach(function(e) {
    e.addEventListener('click',function(i) {
        i.target.parentElement.style.display = 'none';
    })
})


// DOM Travesal Method
// - parentNode = node
// - parentElement = element
// - nextSibling = node
// - nextElementSibling = element
// - previousSibling = node
// - previousElementSibling = element


// parentNode
// Sama dengan parentElement, method ini untuk mengambil parent dari element

// nextSibling
// sama dengan nextElemenSibling, method ini untuk mengambil element selanjutnya dari parent yang sama

// previousSibling
// sama dengan previousElementSibling, method ini untuk mengambil element sebelumnya dari parent yang sama