let x = "";
let equation = document.querySelector(".eq");
let result = document.querySelector(".result");
equation.innerHTML = "";
result.innerHTML = "";
// equation.innerHTML=" ";
// document.querySelector(".display").innerHTML=eq;
document.querySelectorAll(".num").forEach((b) => {
    b.addEventListener("click", () => {
        console.log(b.innerHTML);
        // console.log(b.innerHTML);
        x = x + b.innerHTML;
        equation.innerHTML = x;
        result.innerHTML = eval(x);
    });
});
document.querySelectorAll(".op").forEach((b) => {
    b.addEventListener("click", () => {
        console.log(b.innerHTML);
        console.log(x[x.length - 1]);
        if (!Number(x[x.length - 1])) {
            x = x.slice(0, x.length - 1);
            x = x + b.innerHTML;
            equation.innerHTML = x;
        } else {
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
document.querySelector(".clear").addEventListener("click", () => {
    x = x.slice(0, x.length - 1);
    try {
        // x = x + b.innerHTML
        if (!x) {
            equation.innerHTML = "";
            result.innerHTML="";
        } else {
            equation.innerHTML = x;
            result.innerHTML = eval(x);
        }

        
    } catch (e) {
        console.log(e);
    }
});
document.querySelector(".equalto").addEventListener("click", () => {
    try {
        x = eval(x);
        equation.innerHTML = x;
        result.innerHTML = "";
    } catch (e) {
        console.log(e);
    }
});
