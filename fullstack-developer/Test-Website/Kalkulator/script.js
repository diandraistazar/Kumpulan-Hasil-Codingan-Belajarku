const buttons = document.querySelector('.cal-but');
const display = document.querySelectorAll('.display')[1];
let preview = "";

buttons.addEventListener('click', function(e) {
    let target = e.target.dataset.value;
    let target1 = e.target
    
    // menjumlahkan
    if(target1.classList.contains('hasil')) {
        preview = eval(preview);;
    } 
    
    // clear
    else if(target1.classList.contains('clear')) {
        preview = "";
    } 
    
    // hapus
    else if(target1.classList.contains('back')) {
        if(preview.length > 1) {
            let slice = preview.slice(0,preview.length - 1)
            preview = slice;
        }
    } 
    
    // normal
    else if(e.target != this) {
        preview += target
    }
    
    
    // menampilkan ke preview
    display.innerHTML = preview;
    if(preview.length == 0) {
        setTimeout(function() {
            if(preview.length == 0) display.innerHTML = "Hi!";
            setTimeout(function() {
                if(preview.length == 0) display.innerHTML = "Bored?"
                setTimeout(function() {
                    if(preview.length == 0) display.innerHTML = "Wanna"
                    setTimeout(function() {
                        if(preview.length == 0) display.innerHTML = "Play?"
                        setTimeout(function() {
                            if(preview.length == 0) display.innerHTML = ""
                                
                        },3000)
                    },2000)
                },5000)
            },5000)
        },8000)
    }
})
