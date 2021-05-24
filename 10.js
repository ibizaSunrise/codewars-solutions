function expandedForm(num) {
    let str = String(num).split('').reverse().join('');
    let arr =[];
         for(let i = 0; i< str.length; i++){
             arr.push(Number(str[i] * 10**i));
         }
        
         return arr.filter(el => el !=0).reverse().join(' + ');
  }