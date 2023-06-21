const refresh = document.getElementById('refresh');

refresh.addEventListener('click', () => {
    location.reload()
})

function fullName() {
    let fullname = document.getElementById('fullname')
    if (fullname.value.length < 4) {
        error1.innerHTML = "*length should be greater than 3";
    }
    else {
        error1.innerHTML = ""
        for (let i = 0; i < fullname.value.length; i ++) {
            if ( (fullname.value[i] >= 'A' && fullname.value[i] <= 'Z') || 
                (fullname.value[i] >= 'a' && fullname.value[i] <= 'z') ||
                (fullname.value[i] == ' ')) {             
                error1.innerHTML = ""
            }
            else {
                error1.innerHTML = "*only letters, spaces are allowed"                
                break
            }
        }
    }
}

function Password () {

    

    if (password.value.length < 8) {
        error3.innerHTML = 'must be atleast 8 characters'
    }
    else {
        error3.innerHTML = ''
    }


}

function ConfirmPassword() {
    if (confirmPassword.value == password.value) {
        error4.innerHTML = ''
    }
    else
        error4.innerHTML = 'passwords do not match'
}

function Email () {
    // example@example.com

    let email = document.getElementById('email')
    if (email.value.search('@') == -1) {
        error5.innerHTML = 'Invalid email'
    }
    else  if (email.value.substring(0, email.value.search('@')).length <
    1) {
        error5.innerHTML = 'Invalid email'
    }
    else if (email.value.search('.com') == -1) {
        error5.innerHTML = 'Invalid email'
    }
    else {
        error5.innerHTML = ''
    }  
  
}

function Phone() {
    let phone = document.getElementById('phone')
    let flag = 1
    if (phone.value.length != 10) {
        
        error6.innerHTML = 'must be 10 digited'
    }
    else {
        for (let i = 0; i < phone.value.length; i++) {
            if (phone.value[i] >= '0' && phone.value[i] <= '9') {
                continue
            }
            else {
                flag = 0
                error6.innerHTML = 'must be digits'
            }
        }
        if (flag == 1) {
            error6.innerHTML = ''
        }
    }
    

}

function Aadhaar() {
    let aadhaar = document.getElementById('aadhaar')
    let flag = 1
    if (aadhaar.value.length != 12) {
        
        error8.innerHTML = 'must be 12 digited'
    }
    else {
        for (let i = 0; i < aadhaar.value.length; i++) {
            if (aadhaar.value[i] >= '0' && aadhaar.value[i] <= '9') {
                continue
            }
            else {
                flag = 0
                error8.innerHTML = 'must be digits'
            }
        }
        if (flag == 1) {
            error8.innerHTML = ''
        }
    }
}

function DOB() {
    let dob = document.getElementById('dob')
    alert(dob.value[dob.value.length - 1])

}


let password = document.getElementById('password')
let confirmPassword = document.getElementById('confirmPassword')

let error1 = document.getElementById('error1')
let error3 = document.getElementById('error3')
let error4 = document.getElementById('error4')
let error5 = document.getElementById('error5')
let error6 = document.getElementById('error6')
let error7 = document.getElementById('error7')
let error8 = document.getElementById('error8')
