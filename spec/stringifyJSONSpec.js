// test cases are described in fixtures.js
describe('stringifyJSON', function() {
  it('should match the result of calling JSON.stringify', function() {

    stringifiableObjects.forEach(function(test) {
      var expected = JSON.stringify(test);
      var result = stringifyJSON(test);
      expect(result).to.equal(expected);
    });

    unstringifiableValues.forEach(function(obj) {
      var expected = JSON.stringify(obj);
      var result = stringifyJSON(obj);
      expect(result).to.equal(expected);
    });

  });
  it(" stringify stirng, num, bool, null", function(){
    const arr = [ '5', 5, true, false, null];
    arr.forEach(function(el) {
      var expected = JSON.stringify(el);
      var result = stringifyJSON(el);
      expect(result).to.equal(expected);
    });
  });

  it(" stringify array", function(){
    const arr = [ '5', 5, true, false, null];
      var expected = JSON.stringify(arr);
      var result = stringifyJSON(arr);
      expect(result).to.equal(expected);

  });
  
});
