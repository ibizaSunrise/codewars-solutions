function digPow(n, p){
    let sum = String(n).split('').map((el, index) => el **(p+index)).reduce((a,b) => a+b);
              if(sum / n == parseInt(sum/n) && sum/n > 0){
                  return sum/n;
              }else{
                  return -1;
              }
   
   }