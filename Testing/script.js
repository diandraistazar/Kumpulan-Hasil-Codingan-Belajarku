let prima = [];

function isPrime(n) {
    if ( n <= 2 ) {
        prima.push(n)
        return true
    }
    
    for ( let i = 2; i < n; i++ ) {
        if ( n % i === 0 ) return false
    }
    
    prima.push(n)
    return true
}

for ( let i = 1; i <= 100; i++ ) {
    console.info(`${i}: ${isPrime(i) ? `Prima` : `Not`}`)
}
console.info(prima)