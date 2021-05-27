function solution(str) {
    let arr = [...str];
    let arr2 = [];
    arr.length % 2 != 0 && arr.push("_");
    for (let i = 0; i < arr.length; i += 2) {
        arr2.push(arr[i] + arr[i + 1]);
    }

    return arr2;
}