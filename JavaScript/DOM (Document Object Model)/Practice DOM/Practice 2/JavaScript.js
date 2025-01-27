const suit = ['Gajah','Semut','Manusia'];
const hasilMain = ['MENANG!','KALAH!', 'SERI!']

function computerRandom() {
    const random = Math.floor(Math.random() * suit.length)
    return suit[random];
}

function rules(player,computer) {
    if(player === computer) return hasilMain[2];
    if(player === suit[0]) return computer === suit[2] ? hasilMain[0] : hasilMain[1];
    if(player === suit[1]) return computer === suit[0] ? hasilMain[0] : hasilMain[1];
    if(player === suit[2]) return computer === suit[1] ? hasilMain[0] : hasilMain[1];
}

function mikir() {
    let i = 0;
    let batas = 1; // dalam detik
    batas = batas * 1000 / 50
    let mikirDulu = setInterval(function() {
        batas--
        hasilKomputer.innerHTML = suit[i++]
        if(i === suit.length) i = 0;
        if(batas === 0) clearInterval(mikirDulu);
    },80)
return
}

const board = document.querySelector('#board');
const button = document.querySelectorAll('li button');
const hasilKomputer = document.querySelector('#hasil-computer')

button.forEach(function(e,i) {
    e.addEventListener('click', function() {
        let hasil;
        let computer = computerRandom()
        let player = suit[i];

        document.body.style.backgroundColor = 'white';
        board.innerHTML = 'TUNGGU...';
        hasil = rules(player,computer);

        mikir()

        setTimeout(function() {
            console.info(hasilKomputer.innerHTML = computer)
            board.innerHTML = hasil;

            if(hasil === hasilMain[0]) document.body.style.backgroundColor = 'rgb(83, 83, 255)';
            else if(hasil === hasilMain[1]) document.body.style.backgroundColor = 'rgb(255, 75, 75)';
            else if(hasil === hasilMain[2]) document.body.style.backgroundColor = 'rgb(95, 255, 95)'; 
        },1600)
    })
})