function submitLogin() {
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email === "" || regexEmail.test(email)===false){
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
