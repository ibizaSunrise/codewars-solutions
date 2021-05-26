function findShort(s) {
    return Number(s.split(' ').map(item => item.length).sort((a, b) => a - b).slice(0, 1).join());
}