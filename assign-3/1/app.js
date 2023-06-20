

function generate() {
    
    randomOtp = Math.floor(Math.random() * 999999) + 100000
    alert(randomOtp)
}


function login() {
    if (! (username.value == "vignan")){
        alert("username incorrect")
    }
    else if (! (password.value == '123')){
        alert('password incorrect')
    }
    else if (!(otp.value == randomOtp)) {
        alert('otp incorrect')
    }
    else {
        alert ('login successfully')
        username.value = "";
        password.value = "";
        otp.value = ""
    }
}


const username = document.getElementById('username')
const password = document.getElementById('password')
let otp = document.getElementById('otp')
var randomOtp






