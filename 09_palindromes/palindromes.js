const palindromes = function (str) {
  let punctuation = /[/.,?! ]/g;
  let stripped = str.replace(punctuation, "");
  let reverse = stripped.split("").reverse().join("");
  console.log(`stripped: ${stripped}`);
  console.log(`reverse: ${reverse}`);
  return reverse.toLowerCase() == stripped.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
