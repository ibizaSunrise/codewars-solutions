function sumIntervals(intervals) {
    let set = new Set();
    intervals.forEach(([a, b]) => {
        for (let i = a; i < b; i++) set.add(i);
    });
    return set.size;
}