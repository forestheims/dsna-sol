function titleCase(sentence) {
  return sentence
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');
}

function oddishOrEvenish(num) {
  const sumOfDigits = num
    .toString()
    .split('')
    .map((d) => +d)
    .reduce((a, b) => a + b);

  return sumOfDigits % 2 ? 'Oddish' : 'Evenish';
}

function at(arr, index) {
  return index > -1 ? arr[index] : arr[arr.length + index];
}

function anagrams(wordOne, wordTwo) {
  return orderLetters(wordOne) === orderLetters(wordTwo);
}

function fizzBuzz(number) {
  const list = [];
  for (let i = 1; i <= number; i++) {
    // if(i % 3 === 0 && i % 5 === 0) {
    //   list.push('FizzBuzz');
    // }
    // else if(i % 3 === 0) {
    //   list.push('Fizz')
    // }
    // else {
    //   list.push(i);
    // }

    let result = '';
    if (i % 3 === 0) result += 'Fizz';
    if (i % 5 === 0) result += 'Buzz';
    list.push(result || i);
  }

  return list;
}

function multiplesOfN(n) {
  const multiples = [];
  for (let i = n; i < 51; i = i + n) {
    multiples.push(i);
  }
  return multiples;
}

function equalSides(numbers) {
  // // O(n^2)!
  // for(let i = 0; i < numbers.length; i++) {
  //   const left = numbers.slice(0, i).reduce(((a, b) => a + b), 0);
  //   const right = numbers.slice(i + 1).reduce(((a, b) => a + b), 0);
  //   if(left === right) return i;
  // }
  // return -1;

  // O(n)  (2n still n, we care about exponent)
  let left = 0;
  let right = numbers.reduce((a, b) => a + b) - numbers[0];

  for (let i = 0; i < numbers.length; i++) {
    if (left === right) return i;
    left += numbers[i];
    right -= numbers[i + 1];
  }
}

function rootDigit(n) {
  // if(n.toString().length === 1) return n;
  if (n < 10) return n;

  const digits = n.toString().split('');
  const numbers = digits.map((d) => +d);
  const sum = numbers.reduce((a, b) => a + b);

  return rootDigit(sum);
}

function repeat(txt, n) {
  // if(n === 1) return txt;
  if (n === 0) return '';

  return txt + repeat(txt, n - 1);
}

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 2) + fib(n - 1);
}

function largestEven([n, ...rest]) {
  if (n === undefined) return -1;
  return Math.max(n % 2 === 0 ? n : -1, largestEven(rest));
}

// --- Stretch ---

function every(arr, fn) {
  let allItemsValid = true;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (!fn(item)) {
      allItemsValid = false;
      break;
    }
  }
  return allItemsValid;
}

function filter(arr, fn) {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (fn(item)) {
      filtered.push(item);
    }
  }
  return filtered;
}

function map(arr, fn) {
  const mapped = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    const transformed = fn(item);
    mapped.push(transformed);
  }
  return mapped;
}

function some(arr, fn) {
  let hasMatchingItem = false;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];

    if (fn(item)) {
      hasMatchingItem = true;
      break;
    }
  }
  return hasMatchingItem;
}
