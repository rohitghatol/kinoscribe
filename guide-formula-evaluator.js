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
        },
        "val":{
            name:"Assign Value",
            evaluate:function(operands){
                return operands[0];
            }
        },
        "pin":{
            name:"Pin To Formula",
            evaluate:function(operands){
                if (operands[1] < operands[0]){
                    return operands[0];
                } else if (operands[1] > operands[2]){
                    return operands[2];
                }
                else {
                    return operands[1]
                }
            }
        }

    }

    this.builtinGuides ={
        "hd2":function(map){
            return map.h /2;
        },
        "hd3":function(map){
            return map.h /3;
        },
        "hd4":function(map){
            return map.h /4;
        },
        "hd5":function(map){
            return map.h /5;
        },
        "hd6":function(map){
            return map.h /6;
        },
        "hd7":function(map){
            return map.h /7;
        },
        "hd8":function(map){
            return map.h /8;
        },
        "hd9":function(map){
            return map.h /9;
        },
        "hd10":function(map){
            return map.h /10;
        },
        "wd2":function(map){
            return map.w /2;
        },
        "wd3":function(map){
            return map.w /3;
        },
        "wd4":function(map){
            return map.w /4;
        },
        "wd5":function(map){
            return map.w /5;
        },
        "wd6":function(map){
            return map.w /6;
        },
        "wd7":function(map){
            return map.w /7;
        },
        "wd8":function(map){
            return map.w /8;
        },
        "wd9":function(map){
            return map.w /9;
        },
        "wd10":function(map){
            return map.w /10;
        },
        "hc":function(map){
            return map.w/2;
        },
        "vc":function(map){
            return map.h/2;
        },
        "r":function(map){
            return map.l+map.w;
        },
        "b":function(map){
            return map.t+map.h;
        },
        "3cd4":function(map){
            return 270;
        },
        "3cd8":function(map){
            return 135;
        },
        "5cd8":function(map){
            return 225;
        },
        "cd8":function(map){
            return 315;
        },
        "cd2":function(map){
            return 180;
        },
        "cd4":function(map){
            return 90;
        },
        "cd8":function(map){
            return 45;
        },
        "ls":function(map){
            return Math.max(map.w, map.h);
        },
        "ls2":function(map){
            return Math.max(map.w, map.h)/2;
        },
        "ls3":function(map){
            return Math.max(map.w, map.h)/3;
        },
        "ls4":function(map){
            return Math.max(map.w, map.h)/4;
        },
        "ls5":function(map){
            return Math.max(map.w, map.h)/5;
        },
        "ls6":function(map){
            return Math.max(map.w, map.h)/6;
        },
        "ls7":function(map){
            return Math.max(map.w, map.h)/7;
        },
        "ls8":function(map){
            return Math.max(map.w, map.h)/8;
        },
        "ss":function(map){
            return Math.min(map.w, map.h);
        },
        "ss2":function(map){
            return Math.min(map.w, map.h)/2;
        },
        "ss3":function(map){
            return Math.min(map.w, map.h)/3;
        },
        "ss4":function(map){
            return Math.min(map.w, map.h)/4;
        },
        "ss5":function(map){
            return Math.min(map.w, map.h)/5;
        },
        "ss6":function(map){
            return Math.min(map.w, map.h)/6;
        },
        "ss7":function(map){
            return Math.min(map.w, map.h)/7;
        },
        "ss8":function(map){
            return Math.min(map.w, map.h)/8;
        },
        "e":function(map){
            return map.w;
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

