// 1. Segitiga siku-siku
function segitigaSk(jumlah) {
    for(let i = 0; i < jumlah; i++) {
        let bintang = "*".repeat(i+1)
        console.info(bintang);
    }
}
segitigaSk(5);

// 2. Segitiga siku-siku terbalik
function segitigaSkreverse(jumlah) {
    for(let i = jumlah; i > 0; i--) {
        let bintang = "*".repeat(i)
        console.info(bintang);
    }
}
segitigaSkreverse(5);

// 3. Membuat Segitiga Siku-Siku di Kanan
let segitiga = "";
function segitigaSkright(jumlah) {
    for(let i = 0; i < jumlah; i++) {
        for(let x = jumlah; x >= 0; x--) {
            if(x < i+1) { segitiga += "*" }
            else{segitiga += " "}
        }
        segitiga += "\n"
    }
}
segitigaSkright(10)
console.info(segitiga)