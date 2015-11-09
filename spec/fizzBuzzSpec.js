describe('FizzBuzz', function(){

  var FizzBuzz = function(){};

  describe('knows when to fizzbuzz', function(){

    it('knows when to fizzbuzz', function(){
      fizzBuzz = new fizzBuzz();
      expect(isDivisibleByThreeAndFive(15)).toBe(true);
    });

    it('knows when to fizz', function(){
      fizzBuzz = new fizzBuzz();
      expect(isDivisibleByThree(3)).toBe(true);
    });

    it('knows when to buzz', function(){
      fizzBuzz = new fizzBuzz();
      expect(isDivisibleByFive(5)).toBe(true);
    });

  });

});