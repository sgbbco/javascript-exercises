const palindromes = function (str) {
  var cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  var reversedStr = cleanStr.split('').reverse().join('');

  if (reversedStr === cleanStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
