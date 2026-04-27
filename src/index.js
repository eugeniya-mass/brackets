module.exports = function check(str, bracketsConfig) {
  const dict = new Map();

  for (let i = 0; i < bracketsConfig.length; i += 1) {
    dict.set(bracketsConfig[i][0], bracketsConfig[i][1]);
  }

  const stack = [];

  for (let i = 0; i < str.length; i += 1) {
    if (
      dict.has(stack[stack.length - 1]) &&
      dict.get(stack[stack.length - 1]) === str[i]
    ) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
};
