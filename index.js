let x = "";
let equation = document.querySelector(".eq");
let result = document.querySelector(".result");
equation.innerHTML = "";
result.innerHTML = "";
// equation.innerHTML=" ";
// document.querySelector(".display").innerHTML=eq;
document.querySelectorAll(".num").forEach((b) => {
    b.addEventListener("click", () => {
        // console.log(b.innerHTML);
        x = x + b.innerHTML;
        equation.innerHTML = x;
        result.innerHTML = eval(x);
    });
});
document.querySelectorAll(".op").forEach((b) => {
    b.addEventListener("click", () => {
        if (! Number(x[x.length - 1])) {
            x = x + b.innerHTML;
            equation.innerHTML = x;
        }
    });
});
document.querySelector(".clear").addEventListener("dblclick", () => {
    x = "";
    equation.innerHTML = "";
    result.innerHTML = "";
});
document.querySelector(".equalto").addEventListener("click", () => {
    x = eval(x);
    equation.innerHTML = x;
    result.innerHTML = "";
});
