function submitRegister() {
    const regexPhone = /^0[9,8,3,1][0-9]{8}$/;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regexName = /^([A-Z][a-z]{1,50}\ ){0,5}[A-Z][a-z]{1,50}$/;
    var firstname = document.getElementById('firstName').value;
    var lastname = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var cPassword = document.getElementById('cPassword').value;

    if (firstname === "" || regexName.test(firstname) === false){
        document.getElementById('err-first-name').innerHTML = "first name is not valid";
        return false;
    }else {
        document.getElementById('err-first-name').innerHTML = "";
    }
    if(lastname === "" || regexName.test(lastname) === false){
        document.getElementById('err-last-name').innerHTML = "last name is not valid";
        return false;
    }else {
        document.getElementById('err-last-name').innerHTML = "";
    }
    if(phone === "" || regexPhone.test(phone) === false){
        document.getElementById('err-phone').innerHTML = "phone is not valid";
        return false;
    }else {
        document.getElementById('err-phone').innerHTML = "";
    }

    if (email === "" || regexEmail.test(email) === false){
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
