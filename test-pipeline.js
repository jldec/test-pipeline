/*eslint no-console: "off"*/

module.exports = function(x) {
  console.log('x', x);
  console.log('TEST_SECRET', process.env.TEST_SECRET);
  return x;
};