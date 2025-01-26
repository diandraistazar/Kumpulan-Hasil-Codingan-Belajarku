const preview = document.querySelector('.preview');
const thumb = document.querySelector('.images');

thumb.addEventListener('click', function(e) {
    if(e.target.classList.item(0) == 'thumb') {
        // Cara 1
        // preview.src = e.target.src

        // Cara 2
        const att = e.target.getAttribute('src');
        preview.classList.add('fadeIn');
        preview.setAttribute('src', att);
        setTimeout(function() {
            preview.classList.remove('fadeIn')
        }, 450);

        Array.from(thumb.children).forEach(function(e) {
            e.classList.remove('active');
        })
        
        e.target.classList.add('active');
    }
})