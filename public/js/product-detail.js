const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
    a++;
    num.innerText = a;
});
minus.addEventListener("click", ()=>{
    if(a > 1){
        a--;
        num.innerText = a;
    }
});
function sendFeedback() {
    let title = document.getElementById('title').value;
    let detail = document.getElementById('detail').value;
    if (title.length > 3000 || title.length <= 0){
        document.getElementById('err-title-feedback').innerHTML = "title is not valid";
        return false;
    }else {
        document.getElementById('err-title-feedback').innerHTML="";
    }
    if (detail.length === 0){
        document.getElementById('err-detail-feedback').innerHTML = "detail id not valid";
        return false;
    }else {
        document.getElementById('err-detail-feedback').innerHTML = "";
    }
    return document.getElementById('formFeedback').submit();
}
window.addEventListener('load', (event) => {
    document.getElementById('btn-modal').click();
});

