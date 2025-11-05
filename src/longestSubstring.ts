const longestSubstring = (str: string) => {
  let maximum: string[] = [];
  const stringAsArray = Array.from(str);

  for (let i = 0; i < stringAsArray.length; i++) {
    let current: string[] = [stringAsArray[i]];

    if (maximum.length === 0) {
      maximum = current;
    }

    for (let j = i + 1; j < stringAsArray.length; j++) {
      if (current.includes(stringAsArray[j])) {
        break;
      }
      if (!current.includes(stringAsArray[j])) {
        current.push(stringAsArray[j]);
      }

      if (current.length > maximum.length) {
        maximum = current;
      }
    }
  }
  return maximum;
};

console.log(longestSubstring("abcabcbb"));
console.log("-----");
console.log(longestSubstring("b"));
console.log("-----");
console.log(longestSubstring("pwwkew"));
