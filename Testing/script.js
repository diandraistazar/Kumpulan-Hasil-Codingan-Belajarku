const box = document.querySelector('.box');

box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if(this.classList.contains('size')) [satu,dua] = [dua,satu]

    this.classList.toggle(satu);
    (function() {
        console.info(this)
    })();
})

