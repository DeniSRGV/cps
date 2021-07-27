console.log("hello");

function calculate(num1, method, num2) {
    switch(method){
        case "+":
            return num1 + num2;
        case "-":
        return num1 - num2;
    }
}
console.log(calculate(7 + 5));