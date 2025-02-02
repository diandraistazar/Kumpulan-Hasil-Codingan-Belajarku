const container = document.querySelector('.container')
const input = document.querySelectorAll('.input-an')
const windowList = document.querySelector('.window-list')
const closeButton = document.querySelector('.close')
const buttonClose = closeButton.getElementsByTagName('button')
const addList = document.querySelector('.button-bottom').addEventListener('click', function() {
    windowList.classList.toggle('off')
})
closeButton.addEventListener('click', function(e) {
    if ( e.target === buttonClose[0] ) {
        input.forEach((e) => e.value = "");
    }
    if ( e.target === buttonClose[1] ) {
        let date = new Date().getFullYear()
        let wkwk =
        `<div class="listed" title="${`Deskripsi:
${input[1].value.length == 0 ? `Tidak ada Deskripsi` : input[1].value}`}">
            <span class="title-of-list">${input[0].value}</span>
            <span class="date">Di buat tahun ${date}</span>
        </div>
        `
        container.innerHTML += wkwk;
        input.forEach((e) => e.value = "");
    }
console.info(windowList)
windowList.classList.add('off');
return 
})