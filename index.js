let x = "";
let equation = document.querySelector(".eq");
let result = document.querySelector(".result");
equation.innerHTML = "";
result.innerHTML = "";
// equation.innerHTML=" ";
// document.querySelector(".display").innerHTML=eq;
document.querySelectorAll(".num").forEach((b) => {
    b.addEventListener("click", () => {
        if (x[x.length - 1] == ")") {
            x = x.slice(0, x.length - 1) + b.innerHTML + ")";
        } else {
            x = x + b.innerHTML;
        }
        equation.innerHTML = x;
        result.innerHTML = String(eval(x));
    });
});
document.querySelectorAll(".op").forEach((b) => {
    b.addEventListener("click", () => {
        if (x == "") {
            console.log("empty");
        } else if (!Number(x[x.length - 1])) {
            x = x.slice(0, x.length - 1);
            x = x + b.innerHTML;
            equation.innerHTML = x;
        } else {
            x = x + b.innerHTML;
            equation.innerHTML = x;
        }
    });
});
document.querySelector(".clear").addEventListener("click", () => {
    x = "";
    equation.innerHTML = "";
    result.innerHTML = "";
});

document.querySelector(".bspace").addEventListener("click", () => {
    x = x.slice(0, x.length - 1);
    try {
        if (!x) {
            equation.innerHTML = "";
            result.innerHTML = "";
        } else {
            equation.innerHTML = x;
            result.innerHTML = String(eval(x));
        }
    } catch (e) {
        console.log(e);
    }
});
document.querySelector(".equalto").addEventListener("click", () => {
    try {
        x = x.length==0 ? "":String(eval(x));
        equation.innerHTML = x;
        result.innerHTML = "";
    } catch (e) {
        console.log(e);
    }
});
document.querySelector(".toggle").addEventListener("click", () => {
    let l = "";
    if (Number(x[x.length - 1])) {
        for (let i = x.length - 1; i >= 0; i--) {
            // console.log(x[i]);
            if (Number(x[i]) || x[i] == ".") {
                l = x[i] + l;
            } else {
                break;
            }
        }
        x = x.slice(0, x.length - l.length);
        x = x + `(-${l})`;
    } else if (x[x.length - 1] == ")") {
        for (let i = x.length - 2; i >= 0; i--) {
            if (x[i] == "(") {
                break;
            }
            l = x[i] + l;
        }
        x = x.slice(0, x.length - l.length - 2);
        x = x + l.slice(1);
    }
    equation.innerHTML = x;
    result.innerHTML = String(eval(x));
});
document.querySelector(".pt").addEventListener("click", () => {
    let l = "";
    let c = 0;
    for (let i = x.length - 1; i >= 0; i--) {
        if (Number(x[i]) || x[i] == ".") {
            l = x[i] + l;
        } else {
            break;
        }
    }
    console.log(l);
    if (!l.includes(".")) {
        x = x + ".";
        equation.innerHTML = x;
        result.innerHTML = String(eval(x));
    }
});
