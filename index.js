module.exports = array => {
  let str = '';

  array.forEach((val, i) => {
    if (i === array.length - 1) {
      str += val;
    } else if (i === array.length - 2) {
      str += val + ' and ';
    } else {
      str += val + ', ';
    }
  });

  return str;
};
