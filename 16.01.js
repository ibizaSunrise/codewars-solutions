function spinWords(str) {
    let arr = str.split(' ');
    let arr2 = [];

    for (let elem of arr) {
        if (elem.length >= 5) {
            elem = elem.split('').reverse().join('');
        }
        arr2.push(elem);
    }

    return arr2.join(' ');
}