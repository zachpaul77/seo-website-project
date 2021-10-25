let firstName = document.getElementById('first_name')
let lastName = document.getElementById('last_name')
let phoneNum = document.getElementById('phone_num')
let email = document.getElementById('email')
let password = document.getElementById('password')
let form = document.getElementById('form')
let errorMsg = document.getElementById('error')
let radio1 = document.getElementById('lvl_1')
let radio2 = document.getElementById('lvl_2')
let radio3 = document.getElementById('lvl_3')
let fields = document.getElementsByClassName("input");

function hasNumberAndLetter(str) {
    let hasNumber = false;
    let hasLetter = false;

    for (let c of str) {
        if (isNaN(c)) {
            hasLetter = true;
        }
        else {
            hasNumber = true;
        }
    }
    if (hasNumber && hasLetter) {
        return true;
    }
    return false;
};

function isValidPhoneNum(str) {
    for (let c of str) {
        if (isNaN(c)) {
            if (c != "-") {
                return false;
            }
        }
    }
    return true;
}

function isValidEmail(str) {
    let hasPeriod = false;
    for (let i=0; i<str.length; i++) {
        if (str[i] == "@") {

            if ( (str[i-1] != null) && (str[i+1] != null) && (str[i+1] != ".") && (str[i+2] != ".")) {
                hasPeriod = true;
            }
        }
        else if (str[i] == ".") {
            hasPeriod = true;
        }
    }
    if (hasPeriod) {
        return true;
    }
    return false;
}


form.addEventListener('submit', (e) => {
    let messages = [];
    
    if (firstName.value === '' || firstName.value == null) {
        messages.push("First name is required");
    }
    else if (firstName.value[0] !== firstName.value[0].toUpperCase()) {
        firstName.value = firstName.value[0].toUpperCase() + firstName.value.slice(1);
    }
    if (lastName.value === '' || lastName.value == null) {
        messages.push("Last name is required");
    }
    else if (lastName.value[0] !== lastName.value[0].toUpperCase()) {
        lastName.value = lastName.value[0].toUpperCase() + lastName.value.slice(1);
    }
    if (phoneNum.value === '' || phoneNum.value == null) {
        messages.push("Phone number is required");
    }
    else if (!isValidPhoneNum(phoneNum.value)) {
        messages.push("Phone number can only have numbers and dashes");
    }
    if (email.value === '' || email.value == null) {
        messages.push("Email is required");
    }
    else if (!isValidEmail(email.value)) {
        messages.push("Email is invalid");
    }
    if (password.value === '' || password.value == null) {
        messages.push("Password is required");
    }
    console.log(radio1.value)
    if ( !(radio1.checked || radio2.checked || radio3.checked) ) {
        messages.push("Tier selection is required");
    }
    else {
        if (password.value.length < 6 || password.value.length > 9) {
            messages.push("Password must be have 6-9 characters");
        }
        else if(!hasNumberAndLetter(password.value)) {
            messages.push("Password must have at least 1 number & letter");
        }
    }
    

    if (messages.length > 0) {
        e.preventDefault();
        errorMsg.innerText = messages.join(', ');
    }
    else {
        e.preventDefault();
        errorMsg.innerText = "Submitted Successfully!";
    }
})


form.addEventListener('reset', (e) => {

})

function setBackground(element) {
    if (element.tagName == "INPUT") {
        document.activeElement.style.background = "lightgray";
    }
}

document.body.onclick = function(){
    setBackground(document.activeElement);
}