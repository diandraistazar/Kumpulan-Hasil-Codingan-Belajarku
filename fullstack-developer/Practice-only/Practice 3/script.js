const random = [60,20,30,60,90,30,50];

uniqueNumbers(random);

function uniqueNumbers(n) {
    let that = n;
    let unik = [];
    let ada = [];

    for(let i = 0; i < that.length; i++) {
        let element = that[i]
        if(!(unik.includes(element)) && !(ada.includes(element))) {
            unik.push(element);
        }

        else {
            ada.push(element);
            unik.splice(unik.indexOf(element),1);
        }
    }
    console.info(unik)
    console.info(ada)
}