function permutations(string) {
    let arr = string.split('');
    let tmp = arr.slice();
    let heads = [];
    let result = [];

    if (string.length == 1) return [string];

    arr.forEach((item, index) => {
        if (heads.indexOf(item) == -1) {
            heads.push(item);
            tmp.splice(tmp.indexOf(item), 1);
            permutations(tmp.join(''))
                .forEach(element => result.push(item + element));
            tmp.push(item);
        }
    });

    return result;
}