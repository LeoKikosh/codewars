// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++){
    word = word + str[i] + str[i];
  };
  return word;
};
