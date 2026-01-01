let num = Number(prompt("Choose any number."));
let operator = prompt("Choose any operator '+', '-', '*', '/', '**', '%'");
let num2 = Number(prompt("Choose another one number."));

if (isNaN(num)) {
  alert(`${num} is not a number`);
} else if (isNaN(num2)) {
  alert(`${num2} is not a number`);
} else {
  if ((operator === "/" || operator === "%") && num2 === 0) {
    alert("Division with 0 is always infinity.");
  } else {
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
  }
}