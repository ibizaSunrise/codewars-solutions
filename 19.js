function sumOfDivided(lst) {

    let divisorList = [];

    lst.forEach(n => {
        for (let i = 2; i <= Math.abs(n); i++)
            Math.abs(n) % i == 0 && divisorList.push(i);
    });

    let pList = divisorList.filter(num => {
        if (num <= 1) return false;
        else if (num === 2) return true;
        else {
            for (let i = 2; i < num; i++)
                if (num % i === 0) return false;
            return true;
        }
    });

    pList = Array.from(new Set(pList)).sort((a, b) => a - b);

    let result = pList.map(p => {
        return [p, lst.reduce((sum, num) => {
            return sum + (num % p ? 0 : num);
        }, 0)];
    });

    return result;
}