import { BattlefieldParams } from "../Constants.js";

export class Ground{
    constructor(equation){
        this.equation = equation;
        this.cordsArray = new Array();
        this.parseEquation();
        // this.eq = prompt("Provide equation");
        
    }

    parseEquation(){
            // let eq = prompt("Provide equation");
            let i = 0;
            let splittedEquation = this.equation.split("+");
            let y = 0;
            while (y<=BattlefieldParams.HEIGHT && i<=BattlefieldParams.WITDH){
                y = 0;
                for(let k = 0; k <= splittedEquation.length -1; k++){
                    let expression = splittedEquation[k].split("*");
                    let param;
                    
                    if(expression[0].includes("(")){
                        
                        let value = expression[0].substring(2, expression[0].length -1);

                        param = -parseFloat(value);

                    } else{
                        param = parseFloat(expression[0]);
                    }

                    if (expression[1] == "x"){
                        y += this.calculatePosition(param, 1, i)
                        
                    } else if(expression.length == 1){
                        y += param;
                    } else if (expression[1].includes("^")){
                        let xExpr = expression[1].split("^");
                        let power = xExpr[1];
                        y += this.calculatePosition(param, power, i)
                    }

                }
                this.cordsArray.push([i, eval(0.01*i*20*Math.sin(0.02*i)+300)]);
                i++;
            }
            
    }

    calculatePosition(param, power, i){
        return param * Math.pow(i, power);
    }

    getCordsArray(){
        return this.cordsArray;
    }
}