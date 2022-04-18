function add(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    a++;
    num.innerText = a;
    document.getElementById('quantity-'+ id).innerHTML=a;
    const price = document.getElementById('price-' + id);
    let total = Number(a)* Number(price.innerHTML.slice(2));
    document.getElementById('total-'+id).innerHTML = String(total);
    document.getElementById('price-order-'+id).innerHTML = String(total);
    updateTotal(id, 'add');
}
function remove(id) {
    const num = document.getElementById(id+'');
    let a = num.innerHTML;
    if(a > 1){
        a--;
        num.innerText = a;
        document.getElementById('quantity-'+ id).innerHTML=a;
        const price = document.getElementById('price-' + id);
        let total = Number(a)* Number(price.innerHTML.slice(2));
        document.getElementById('total-'+id).innerHTML = String(total);
        document.getElementById('price-order-'+id).innerHTML = String(total);
        updateTotal(id, 'remove');
    }
}
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
function updateTotal(id,type) {
    let total = document.getElementById('total-price');
    const price = document.getElementById('price-' + id);
    if (type === 'add'){
        total.innerHTML = String(Number(total.innerHTML) + Number(price.innerHTML.slice(2)));
    }else {
        total.innerHTML = String(Number(total.innerHTML) - Number(price.innerHTML.slice(2)));
    }
    document.getElementById('sub-order-price').innerHTML = total.innerHTML;
}
function changeShipping(ship){
    let total_order = document.getElementById('total-price-order');
    let total = document.getElementById('total-price');
    total_order.innerHTML = String(Number(total.innerHTML) + Number(ship.value));
    document.getElementById('total-order').innerHTML = total_order.innerHTML;
    document.getElementById('total-order-final').innerHTML = total_order.innerHTML;
}
document.getElementById('sub-order-price').innerHTML = document.getElementById('total-price').innerHTML;
document.getElementById('total-order').innerHTML = document.getElementById('total-price').innerHTML;
document.getElementById('total-order-final').innerHTML = document.getElementById('total-price').innerHTML;
