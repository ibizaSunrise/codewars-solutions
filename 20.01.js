function convertFrac(lst) {
    let denominators = lst.map(([a, b]) => b);
    let lcm = Math.abs(denominators[0]);

    if (denominators.length == 0) return '';

    for (let i = 1; i < denominators.length; i++) {
        let b = Math.abs(denominators[i]), c = lcm;
        while (lcm && b) { lcm > b ? lcm %= b : b %= lcm; }
        lcm = Math.abs(c * denominators[i]) / (lcm + b);
    }

    let result = lst.map(([a, b]) => [(lcm / (b / a)), (lcm)]);

    return '(' + result.join(')(') + ')';
}