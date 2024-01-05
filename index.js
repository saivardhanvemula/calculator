let eq="";
// document.querySelector(".display").innerHTML=eq;
document.querySelectorAll(".btn").forEach((b) => {
    b.addEventListener("click",()=>{
        console.log(b.innerHTML);
        eq=eq+b.innerHTML;
    })
});
