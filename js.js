let nums = document.querySelectorAll(".num,.op");
let result = document.querySelector(".result");
let equal = document.querySelector(".eq");
let clear = document.querySelector(".clear");
let light = document.querySelector(".light");
let bold = document.querySelector(".bold");
let ary = [];
let i = 0;
let temp, operation1, operation2;
let string1 = [],
    string2 = [];

function clearAll() {
    ary = string1 = string2 = [];
    i = 0;
    operande = [];
    operation = '';
    result.textContent = ''
}


function doTheOperation(result, operation) {
    switch (operation) {
        case "+":
            result = operande[0] + operande[1];
            console.log(operation);
            break;
        case "-":
            result = operande[0] - operande[1];
            console.log(operation);
            break;
        case "*":
            result = operande[0] * operande[1];
            console.log(operation);
            break;
        case "/":
            result = operande[0] / operande[1];
            console.log(operation);
            break;
        default:
            result = operande[0];
    }
    return result;
}

function get_num(num) {
    ary.push(num);
    return parseInt(ary.join(""));
}
let operande = [];
nums.forEach(function(num) {
    if (num.classList.contains("num")) {
        num.onclick = function() {
            operande[i] = get_num(num.textContent);
            string1.push(num.textContent);
            bold.textContent = string1.join("");
            console.log(operande);
            //showInScreen();
        }
    } else {
        num.onclick = function() {
            if (i === 0) {
                operation1 = num.textContent;
                string1.push(" ");
                string1.push(num.textContent);
                string2 = string1;
                light.textContent = string2.join("");
                bold.textContent = "";
                string1 = [];
            }

            ary = [];
            if (i >= 1) {
                string2 = [];
                operation2 = num.textContent;
                operande[0] = doTheOperation(temp, operation1);
                string2.push(operande[0]);
                string2.push(" ");
                string2.push(operation2);
                light.textContent = string2.join("");
                bold.textContent = ""
                string1 = [];
                operation1 = operation2;
                operation2 = '';
                operande[1] = 0;
            } else {
                i++;
            }

        }
    }

})
let resultat;
equal.onclick = function() {
    resultat = doTheOperation(resultat, operation1);
    light.textContent = resultat;
    bold.textContent = "";

}

clear.onclick = function() {
    clearAll();
}