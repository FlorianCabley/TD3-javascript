//exo 1 de la partie 4
   function getSum41Alt1(arr) {
    let sum = 0;
    for (const n of arr) {
      sum += n;
    }
    return sum;
  }
  //exo 2 de la partie 4
  function getNumberOfEven42Alt1(arr) {
    let number = 0;
    for (const n of arr) {
      if (n % 2 === 0) {
        number++;
      }
    }
    return number;
  }
  //exo 5 de la partie 4
  function getMaxEven45Alt1(...arr) {
    let maxEven = Number.MIN_SAFE_INTEGER;
    for (const n of arr) {
      if (n % 2 === 0 && n > maxEven) {
        maxEven = n;
      }
    }
    return maxEven;
  }
  export {getSum41Alt1, getNumberOfEven42Alt1, getMaxEven45Alt1};