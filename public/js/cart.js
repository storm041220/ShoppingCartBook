// const plus = document.querySelector(".plus"),
//     minus = document.querySelector(".minus"),
//     num = document.querySelector(".num");
// let a = 1;
// plus.addEventListener("click", ()=>{
//     a++;
//     a = (a < 10) ? "0" + a : a;
//     num.innerText = a;
// });
//
// minus.addEventListener("click", ()=>{
//     if(a > 1){
//         a--;
//         a = (a < 10) ? "0" + a : a;
//         num.innerText = a;
//     }
// });
function add(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    console.log(a);
    a++;
    num.innerText = a;
}
function remove(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    if(a > 1){
        a--;
        num.innerText = a;
    }
}
