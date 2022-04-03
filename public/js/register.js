function submitRegister() {
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cPassword = document.getElementById('cPassword').value;

    if (firstname === ""){
        document.getElementById('err-first-name').innerHTML = "first name is not valid";
        return false;
    }else {
        document.getElementById('err-first-name').innerHTML = "";
    }
    if(lastname === ""){
        document.getElementById('err-last-name').innerHTML = "last name is not valid";
        return false;
    }else {
        document.getElementById('err-last-name').innerHTML = "";
    }
    if(phone === ""){
        document.getElementById('err-phone').innerHTML = "phone is not valid";
        return false;
    }else {
        document.getElementById('err-phone').innerHTML = "";
    }

    if (email === ""){
        document.getElementById('err-email').innerHTML = "email is not valid";
        return false;
    }else {
        document.getElementById('err-email').innerHTML = "";
    }

    if (password.length<8){
        document.getElementById('err-password').innerHTML = "password is not valid";
        return false;
    }else {
        document.getElementById('err-password').innerHTML = "";
    }
    if (cPassword !== password){
        document.getElementById('err-cPassword').innerHTML = "Passwords do not match";
        return false;
    }else {
        document.getElementById('err-cPassword').innerHTML = "";
    }
    document.getElementById('formRegister').submit();
}
