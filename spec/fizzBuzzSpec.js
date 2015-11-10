describe('Fizzbuzz',function() {

  var javabuzz;

  beforeEach(function() {
    javabuzz = new Fizzbuzz();
  });

  describe('knows when a number is',function() {

    it('divisible by three',function() {
      expect(javabuzz.isDivisibleByThree(3)).toBe(true);

    });

    it('divisible by five',function() {
      expect(javabuzz.isDivisibleByFive(5)).toBe(true);
    });

    it('divisible by fifteen',function() {
      expect(javabuzz.isDivisibleByFifteen(15)).toBe(true);

    });

  });

  describe('knows when a number is NOT',function() {

    it('divisible by three',function() {
      expect(javabuzz.isDivisibleByThree(1)).toBe(false);

    });

    it('divisible by five',function() {
      expect(javabuzz.isDivisibleByFive(1)).toBe(false);
    });

    it('divisible by fifteen',function() {
      expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);

    });

  });

  describe('when playing, says',function() {

    it('"Fizz" when divisible by 3',function() {
      expect(javabuzz.says(3)).toEqual("Fizz");
    });

    it('"Fizz" when divisible by 5',function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Fizz" when divisible by 15',function() {
      expect(javabuzz.says(15)).toEqual("Fizzbuzz");
    });

  });

});
