function convertFrac(lst) {
    let gcd = (a, b) => b ? gcd(b, a % b) : a;
    let lcm = lst.reduce((res, i) => res * i[1] / gcd(res, i[1]), 1);
    return lst.reduce((res, i) => res + '(' + lcm / i[1] * i[0] + ',' + lcm + ')', '');
}