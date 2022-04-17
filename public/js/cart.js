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
    a++;
    num.innerText = a;
    const price = document.getElementById('price-' + id);
    let total = Number(a)* Number(price.innerHTML.slice(2));
    document.getElementById('total-'+id).innerHTML = String(total);
}
function remove(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    if(a > 1){
        a--;
        num.innerText = a;
    }
    const price = document.getElementById('price-' + id);
    let total = Number(a)* Number(price.innerHTML.slice(2));
    document.getElementById('total-'+id).innerHTML = String(total);
}
var e = document.getElementById("countryId");
function show(){
    var strUser = e.options[e.selectedIndex].value;
    console.log(strUser);
}
e.onchange=show;
show();
function changeAddress() {
    let countryId =  document.getElementById("countryId");
    let stateId = document.getElementById('stateId');
    let cityId = document.getElementById('cityId');
    let country = document.getElementById('country');
    let state = document.getElementById('state');
    let city = document.getElementById('city');
    let address = document.getElementById('address');
    if (countryId.options[countryId.selectedIndex].value === ""){
        document.getElementById('err-country').innerHTML = "You have not selected country";
        return false;
    }else {
        document.getElementById('err-country').innerHTML = "";
    }
    if (stateId.options[stateId.selectedIndex].value === ""){
        document.getElementById('err-state').innerHTML = "You have not selected state";
        return false;
    }else {
        document.getElementById('err-state').innerHTML = "";
    }
    if (cityId.options[cityId.selectedIndex].value === ""){
        document.getElementById('err-city').innerHTML = "You have not selected city";
        return false;
    }else {
        document.getElementById('err-city').innerHTML = "";
    }
    if (address.value === ""){
        document.getElementById('err-address').innerHTML = "Address not valid";
        return false;
    }else {
        document.getElementById('err-address').innerHTML = "";
    }
    country.value = countryId.options[countryId.selectedIndex].value;
    state.value = stateId.options[stateId.selectedIndex].value;
    city.value = cityId.options[cityId.selectedIndex].value;
    document.getElementById('form-address').submit();
}
