function sumIntervals(intervals) {
    let count = 0;
    let decriment = 0;
    let arr = [];

    let arrB = Array.from(new Set(intervals.map(([a, b]) => b)));
    let arrA = Array.from(new Set(intervals.map(([a, b]) => a)));
    let maxA = Math.max(...arrA);
    let maxB = Math.max(...arrB);

    let longInterval = intervals.map(([a, b]) => b - a);
    let maxInterval = Math.max(...longInterval);

    if (arrB.includes(maxA - 1) === true && maxInterval < maxB - 1) decriment++;

    for (let i = 0; i < intervals.length; i++) {
        for (let j = intervals[i][0]; j <= intervals[i][1]; j++) {
            arr.push(j);
        }
    }
    arr = Array.from(new Set(arr)).sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] - arr[i] == 1) {
            count++;
        }
    }

    return count - decriment;

}