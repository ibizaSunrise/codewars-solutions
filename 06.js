function queueTime(customers, n){
    let arr = new Array(n).fill(0);
    for(let value of customers){
        let index = arr.indexOf(Math.min(...arr));
        arr[index] += value;
    }
    return Math.max(...arr);
}