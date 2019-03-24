/*eslint no-console: "off"*/

module.exports = function(x) {
  var secret = process.env.TEST_SECRET;
  console.log('x', x);
  console.log('TEST_SECRET', secret);
  return [x, secret];
};