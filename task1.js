//Implement and export by default a function that takes two arrays as input and returns the number of common unique values in both arrays//

import _ from 'lodash';

const getSameCount = (coll1, coll2) => {
  let count = 0;
  const uniqColl1 = _.uniq(coll1);
  const uniqColl2 = _.uniq(coll2);

  for (const item1 of uniqColl1) {
    for (const item2 of uniqColl2) {
      if (item1 === item2) {
        count += 1;
        break;
      }
    }
  }

  return count;
};

export default getSameCount;
