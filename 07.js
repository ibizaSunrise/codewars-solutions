function toCamelCase(str){
    return str
      .split(/[- _]/)
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
    }