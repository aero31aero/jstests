var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
function evaluate(line) {
    if (isValid(line)) {
        var expr = prepareExpression(line);
        expr = solve(expr, '/');
        expr = solve(expr, '*');
        expr = solve(expr, '+');
        expr = solve(expr, '-');
        if (expr.isNan() || expr === null || expr === undefined) {
            console.log("Invalid Expression");
        } else {
            console.log("Result:", expr[0]);
        }
    } else {
        console.log("Invalid Expression");
    }
}

function prepareExpression(line) {
    var arr = line.split('');
    var expr = [];
    var counter = 0;
    arr.forEach(function (elem) {
        if (elem == '/' || elem == '*' || elem == '-' || elem == '+') {
            counter++;
            expr[counter] = elem;
            counter++;
        } else {
            expr[counter] = expr[counter] || "";
            expr[counter] = expr[counter] + "" + elem;
        }
    });
    return expr;
}

function isValid(expr) {
    var regex = /[\d][\d\/\*+-]+/g;
    var str = expr.match(regex);
    if (expr == str) {
        return true;
    }
    return false;
}
function solve(expr, oper) {
    var rval = [];
    var counter = 0;
    var ignoreNext = false;
    expr.forEach(function (elem, index) {
        if (!ignoreNext) {
            if (elem == oper) {
                var num1 = parseInt(rval[--counter]);
                var num2 = parseInt(expr[index + 1]);
                var result;
                switch (oper) {
                    case '/':
                        result = Math.floor(num1 / num2);
                        break;
                    case '*':
                        result = Math.floor(num1 * num2);
                        break;
                    case '+':
                        result = Math.floor(num1 + num2);
                        break;
                    case '-':
                        result = Math.floor(num1 - num2);
                        break;
                }
                rval[counter] = result;
                ignoreNext = true;
            } else {
                rval[counter] = elem;

            }
            counter++;
        } else {
            ignoreNext = false;
        }

    });
    return rval;
}
function startcalc() {
    console.log("Type an expression using +,-,*,/");
    rl.on("line", function (line) {
        if(line=="exit"){
            process.exit(0);
        }
        evaluate(line);
    });
}

startcalc();
