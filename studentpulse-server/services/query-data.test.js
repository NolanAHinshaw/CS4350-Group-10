const querydata = require('./query-data');

//checks if length is above 0 and user table is populated
test('gets all users from login table', () => {
  expect(querydata.getMultiple().length).toBeGreaterThan(0);
});
