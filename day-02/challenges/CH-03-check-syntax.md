## Check Syntax with Stack

## Challenge

Write a function that takes a string of code and uses a `Stack` for determining if parenthesis and curly braces are properly matched. Return `true` if correctly formatted, otherwise `false`

```js
function checkSyntax(code) { ... }
```

## Test Cases

| Input                            | Output  |
| -------------------------------- | ------- |
| `if(true) { return; }`           | `true`  |
| `if(true( { return; }`           | `false` |
| `if(true) { return;`             | `false` |
| `(if(true) { return; }`          | `false` |
| `( true && { name: 'foo' } )`    | `true`  |
| `( true && { name: 'foo' ) )`    | `false` |
| `( true && ( name: 'foo' } )`    | `false` |
| `((2 + 3) * (4 + 11 * (2 - 1)))` | `true`  |
| `((2 + 3) * (4 + 11 * 2 - 1)))`  | `false` |
| `((2 + 3) * (4 + 11 * (2 - 1))`  | `false` |

## Solution

```js
const opens = { '(': ')', '{': '}' };
const closes = { ')': '(', '}': '{' };

function checkSyntax(code) {
  const stack = new Stack();

  for (let char of code) {
    if (opens[char]) stack.push(char);
    else if (closes[char]) {
      if (stack.pop() !== closes[char]) return false;
    }
  }

  return !stack.peek();
}
```
