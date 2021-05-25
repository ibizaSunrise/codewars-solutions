function incrementString(strng) {
    let strReverse = strng.split('').reverse().join('');
    let num = parseInt(strReverse);
    let numReverse = String(num).split('').reverse().join('');
    let numIncrement = Number(numReverse) + 1;
    let l = numReverse.length;

    if (strng == "") return 1;
    if (strReverse[0].search(/\d/) == -1) return strng + 1;
    if (l != String(numIncrement).length) {
        for (let i = 0; i <= l - String(numIncrement).length; i++) {
            numIncrement = 0 + String(numIncrement);
        }
    }

    return strng.slice(0, strng.length - l) + numIncrement;
}