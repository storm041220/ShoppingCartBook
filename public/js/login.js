function submitLogin() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
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
    document.getElementById('formLogin').submit();
}
