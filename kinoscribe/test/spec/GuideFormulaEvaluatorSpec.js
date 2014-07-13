describe("GuideFormulaEvaluator", function() {
  var guideFormulaEvaluator;


  beforeEach(function() {
      guideFormulaEvaluator = new GuideFormulaEvaluator();

  });


  describe("GuideFormulaEvaluator", function() {


    it("should evaluate */ 10 20 30 as 6.666666666666667", function() {
        var map = {};
        console.log(guideFormulaEvaluator);
        expect(guideFormulaEvaluator.evaluate("*/ 10 20 30",map)).toEqual(6.666666666666667);
    });

    it("should evaluate +- 10 20 30 as 0", function() {
          var map = {};
          console.log(guideFormulaEvaluator);
          expect(guideFormulaEvaluator.evaluate("+- 10 20 30",map)).toEqual(0);
      });

    it("should evaluate */ w 20 30 as 6.666666666666667 where w is 10", function() {
          var map = {
              w:10
          };
          console.log(guideFormulaEvaluator);
          expect(guideFormulaEvaluator.evaluate("*/ w 20 30",map)).toEqual(6.666666666666667);
    });

   it("should evaluate +- h 20 30 as 0 where h is 10", function() {
          var map = {
              h:10
          };
          console.log(guideFormulaEvaluator);
          expect(guideFormulaEvaluator.evaluate("+- h 20 30",map)).toEqual(0);
      });
  });

  it("should evaluate +- hd3 20 30 as 23.333333333333336", function() {
        var map = {
            h:100
        };
        console.log(guideFormulaEvaluator);
        expect(guideFormulaEvaluator.evaluate("+- hd3 20 30",map)).toEqual(23.333333333333336);
   });


});
