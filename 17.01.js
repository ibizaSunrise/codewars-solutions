const countBits = function (n) {
    let result = '';
    while (n > 0) {
        result += n % 2;
        n = parseInt(n / 2);
    }
    return result.split('').filter(x => x == 1).length;
};