let num = Number(prompt("Choose any number."))
let operator = prompt("Choose any operator '+', '-', '*', '/', '**', '%'");
let num2 = Number(prompt("Choose another one number."))


if (operator === "+") {
    alert(num + num2);
} else if (operator === "-") {
    alert(num - num2); 
} else if (operator === "*") {
    alert(num * num2); 
} else if (operator === "/") {
    alert(num / num2);
} else if (operator === "**") {
    alert(num ** num2);
} else if (operator === "%") {
    alert(num % num2);
} else {
    alert("The operation is not possible");
}