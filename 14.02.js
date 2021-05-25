function incrementString (strng) {
    return strng.replace(/[0-8]?9*$/, val => ++val);
  }

