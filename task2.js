//Implement and export by default a function that takes a string as input and counts how many characters (excluding repeating characters) are used in that string. For example, the string yy uses only one character, y. And in line 111yya! - four characters are used: 1, y, a and !://

import _ from 'lodash';

const countUniqChars = (arr) => {
  const newarr = _.uniq(arr);
  return newarr.length;
};
export default countUniqChars;
