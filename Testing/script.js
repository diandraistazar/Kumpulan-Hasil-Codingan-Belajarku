function getInnerFile(file) {
    let xhr = new XMLHttpRequest;
    
    xhr.onreadystatechange = function() {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            console.info(xhr.response)
        }
        else if ( xhr.status === 404 ) {
            console.info("ERROR")
        }
    } // menunggu respon dari xhr
    
    xhr.open('get',file);
    xhr.send();
    console.info("Permintaan dikirim")
}

getInnerFile('teks.txt')