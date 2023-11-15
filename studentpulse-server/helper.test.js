const helper = require('./helper');

//checks if length is above 0 and user table is populated
const rows= [10,10,10,10]
test('sets rows to empty array if doesnt exist. else, returns same array', () => {
  expect(helper.emptyOrRows(rows)).toEqual(rows);
  expect(helper.emptyOrRows([])).toEqual([]);
});
