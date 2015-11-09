describe('FizzBuzz', function(){

  var fizzbuzz = function(){};

  describe('knows when to fizzbuzz', function(){

    it('knows when to fizzbuzz', function(){
      fizzbuzz = new fizzBuzz();
      expect(fizzBuzz.prototype.isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('knows when to fizz', function(){
      fizzbuzz = new fizzBuzz();
      expect(fizzBuzz.prototype.isDivisibleByThree(3)).toBe(true);
    });

    it('knows when to buzz', function(){
      fizzbuzz = new fizzBuzz();
      expect(fizzBuzz.prototype.isDivisibleByFive(5)).toBe(true);
    });

  });

});
