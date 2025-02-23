// Swith to Dark Mode or White Mode
const button = document.getElementById('button');
const h1Dark = document.querySelector('.black');
const h1White = document.querySelector('.white');


// New Button (tRandomColor)
const tRandomColor = document.createElement('button');
const tRandomColorIn = document.createTextNode('Random Color');
tRandomColor.append(tRandomColorIn);

// Setting tRandomColor
tRandomColor.setAttribute('id', 'randomColor')
tRandomColor.setAttribute('type','button')
tRandomColor.style.padding = '10px'

// Append tRandomColor after Button
button.after(tRandomColor)



// Events Button Dark Mode Or White Mode
button.addEventListener('click', function() {
    document.body.classList.toggle('change-color')
    h1White.classList.toggle('b2')
    h1Dark.classList.toggle('b1')
})


// Events Button Random Color
tRandomColor.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
})


// Color Range
const colorRange = document.querySelector('.color-range')

// const sRed = document.querySelector('input[name=red]')
// const sGreen = document.querySelector('input[name=green]')
// const sBlue = document.querySelector('input[name=blue]')

const rgbParent = document.getElementsByClassName('color-range')[0];
const rgb = rgbParent.querySelectorAll('input');

// Events Slider Color
colorRange.addEventListener('input', () => {
    document.body.style.backgroundColor = `rgb(${rgb[0].value},${rgb[1].value},${rgb[2].value})`

    // 'input' : menangkap input yang berubah
})


// Random color with cursor
document.addEventListener('mousemove', function(e) {
    const xPos = Math.round((e.clientX / window.innerWidth) * 255);
    const yPos = Math.round((e.clientY / window.innerHeight) * 255);
    const yxPos = Math.round((xPos / yPos) * 255);

    // clientX & clientY : untuk menangkap koordinat pointer
    // window.innerHeight & window.innerWidth : untuk menangkap ukuran window

    document.body.style.backgroundColor = `rgb(${xPos}, ${yxPos}, ${yPos})`
})