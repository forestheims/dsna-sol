## Fizz Buzz

Classic code challenge problem

## Challenge

Write a function that takes a positive integer `n`, and returns an array that contains, in order, all of the numbers from `1` to `n`. But for multiples of three (evenly divisible by three) print “Fizz” instead of the number and for the multiples of five use “Buzz”. For numbers which are multiples of both three and five use “FizzBuzz”.

```js
function fizzBuzz(number) {
```

> **You can assume valid input**

## Test Cases

### Input

`16`

### Output

```js
[
  1,
  2,
  'Fizz',
  4,
  'Buzz',
  'Fizz',
  7,
  8,
  'Fizz',
  'Buzz',
  11,
  'Fizz',
  13,
  14,
  'FizzBuzz',
  16,
];
```

## Solution

```js
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
```
