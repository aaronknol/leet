const longestSubstring = (str: string) => {
  let maximum: string[] = [];
  const stringAsArray = Array.from(str);

  for (let i = 0; i < stringAsArray.length; i++) {
    console.log("i:", stringAsArray[i]);
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
        console.log("in here: current", current);
      }

      if (current.length >= maximum.length) {
        maximum = current;
      }
    }
  }
  return maximum;
};

longestSubstring("abcabcbb");
console.log("-----");
longestSubstring("b");
console.log("-----");
longestSubstring("pwwkew");
