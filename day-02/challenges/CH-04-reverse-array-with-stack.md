## Reverse array with Stack

## Challenge

Write a function that reverses an array using a `Stack` class

## Test Cases

| Input           | Output          |
| --------------- | --------------- |
| `[12, 3, 5, 7]` | `[7, 5, 3, 12]` |

## Solution

```js
// [12, 3, 5, 7] --> [7, 5, 3, 12]
function reverse(array) {
  const stack = new Stack();

  for (let i = 0; i < array.length; i++) {
    stack.push(array[i]);
  }
  const results = [];
  for (let i = 0; i < array.length; i++) {
    results[i] = stack.pop();
  }

  return results;
}
```
