module.exports = function longestConsecutiveLength(array) {
  let object = {},maxSequence = 0;
  array.forEach(item => {
      let left = object[item-1] || 0, right = object[item+1] || 0;
      if(!(item in object)){
        object[item] = left + right + 1;
          left && (object[item-left] = object[item]);
          right && (object[item+right] = object[item]);
      }
      object[item] > maxSequence && (maxSequence = object[item]);
  })
  return maxSequence;



}
