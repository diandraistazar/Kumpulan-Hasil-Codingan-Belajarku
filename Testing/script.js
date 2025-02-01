const sentence = "Mita dan Cappie adalah waifu yang cantik dan kawaii yang paling ku suka didunia, selain dua itu terdapat juga KindMita :3";
const highlightWords = ["Mita","Cappie","cantik","kawaii","KindMita"];

const result = highlight`${sentence}${highlightWords}`;

function highlight(sampah, k, a) {
    let conv = k.split(' ');
    let hasil = "";
    for(let i = 0; i < conv.length; i++) {
        if(a.includes(conv[i])) {
            hasil += `<span class="highlight">${conv[i]}</span> `
        }
        else {
            hasil += `${conv[i]} `
        }
    }
    document.body.innerHTML = hasil;
}

let regex = /hello|World/i;
let sen = "Hello World!".toLowerCase()
console.info(regex.test(sen))