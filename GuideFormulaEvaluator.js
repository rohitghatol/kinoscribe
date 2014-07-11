/**
 * Created by rohitghatol on 7/10/14.
 */

/**
 *
 * @param expression
 * @param map
 * @constructor
 */
function GuideFormulaEvaluator() {
    this.formulaMap ={
        "*/":{
            name:"Multiply Divide Formula",
            evaluate:function(operands){
                return ((operands[0] * operands[1]) / operands[2]);
            }
        },
        "+-":{
            name:"Add Subtract Formula",
            evaluate:function(operands){
                return ((operands[0] + operands[1]) - operands[2]);
            }
        }
    }

    this.builtinGuides ={
        "hd3":function(map){
            return map.h /3;
        },
        "hd4":function(map){
            return map.h /4;
        },
        "hc":function(map){
            return map.h/2;
        },
        "b":function(map){
            return map.t+map.h;
        }
    };
}

/**
 * Evaluates the Guide Formula for OOXML Shape Guide
 * @param expression Shape Guide Formula Expression as per OOXML standard
 * @param map Map of key values pairs of guide names that would appear in the expression
 * @returns {number}
 */
GuideFormulaEvaluator.prototype.evaluate = function(expressionStr,map) {

    var expression = expressionStr.split(' ');

    var operator = expression[0];
    var operands = expression.splice(1);
    operands = this.populateValues(operands,map);

    return this.formulaMap[operator].evaluate(operands);

};

/**
 *
 * @param operands
 * @param map
 */
GuideFormulaEvaluator.prototype.populateValues = function(operands,map){

    var isNumeric = function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    for(var index=0;index<operands.length;index++){
        var operand = operands[index];

        if( !isNumeric(operand) ){
            if(map[operand]!=null){
               operands[index]=map[operand];
            }
            else{
                //Possibly build-in guide types
                operands[index]=this.builtinGuides[operand](map);
            }
         }

        operands[index]=Number(operands[index]);

    }
    return operands;
}

