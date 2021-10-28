// JavaScript Document
const form = document.querySelector("form");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
const email = document.getElementById("email");
var confirm = document.getElementById("con");
var emailErr = document.getElementById("emailerr");
var num = document.getElementById("num");
var pass = document.getElementById("password");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var radErr= document.getElementById("suberror");
var reset= document.getElementById("refresh");
let isForm = false;
let validationOn = false;
let emailFormat = true;
let ref = false;

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

const isValidPassword = (pass) =>
{
	const re = /^(?=.*\d)(?=.*[a-z]).{6,9}$/;
	return re.test(String(pass).toLowerCase());
};
const resetInput = (elm) => {
	elm.classList.remove("invalid");
	elm.nextElementSibling.classList.add("hidden");
	if(emailFormat) emailErr.classList.add("hidden");
}
const invalidateEntry = (elm) =>{
	elm.classList.add("invalid");
	elm.nextElementSibling.classList.remove("hidden");
}
const invalidEmail =()=>{
	emailErr.classList.remove("hidden");
	email.classList.add("invalid");
	emailFormat =false;
}
const convertFirstCharacterToUppercase = (stringToConvert) => {
  var firstCharacter = stringToConvert.substring(0, 1);
  var restString = stringToConvert.substring(1);

  return firstCharacter.toUpperCase() + restString;
}
const convertFirstCharacterAllWordsToUppercase = (stringToConvert) => {
  const wordsArray = stringToConvert.split(' ');
  const convertedWordsArray = wordsArray.map(word => {
    return convertFirstCharacterToUppercase(word);
  });

  return convertedWordsArray.join(' ');
}
const refreshPage = () =>{
    window.location.reload();
}
const setBackground = (elm) => {
	elm.style.backgroundColor="black";
	elm.style.color="white";
}

const remFocus = (elm) => {
	elm.style.backgroundColor="white";
	elm.style.color="black";
}

const validateInput = () => {
	if(!validationOn) return;
	emailFormat = true;
	resetInput(fname);
	resetInput(lname);
	resetInput(email);
	resetInput(num);
	resetInput(pass);
	isForm =true;
	if (!fname.value){
		invalidateEntry(fname);
		isForm = false;
	}
	if (!lname.value){
		invalidateEntry(lname);
		isForm = false;
	}
	if (!email.value){
		invalidateEntry(email);
		isForm = false;
	}
	if (!isValidEmail(email.value) && email.value){
		invalidEmail();
		isForm = false;
	}
	if (!isValidPhone(num.value) && num.value){
		invalidateEntry(num);
		isForm = false;
	}
	if (!isValidPassword(pass.value) && pass.value){
		invalidateEntry(pass);
		isForm = false;
	}
	if(!op1.checked && !op2.checked && !op3.checked){
		radErr.classList.remove("hidden");
		isForm=false;
	}
};


window.addEventListener('DOMContentLoaded',() => {
form.addEventListener('submit',(e) =>{
	if(ref) return;
	e.preventDefault();
	validationOn=true;
	validateInput();
	if(isForm){
		form.remove();
		confirm.classList.remove("hidden");
		var fullname = fname.value+" "+lname.value;
		document.getElementById("confirmationName").innerHTML=convertFirstCharacterAllWordsToUppercase(fullname);
	}
});
});

fname.addEventListener("input", () =>{
	validateInput();
});

lname.addEventListener("input", () =>{
	validateInput();
});

email.addEventListener("input", () =>{
	validateInput();
});

num.addEventListener("input", () =>{
	validateInput();
});
pass.addEventListener("input", () =>{
	validateInput();
});

op1.addEventListener("click", () =>{
	radErr.classList.add("hidden");
});
op2.addEventListener("click", () =>{
	radErr.classList.add("hidden");
});
op3.addEventListener("click", () =>{
	radErr.classList.add("hidden");
});
reset.addEventListener("click", ()=>{
	refreshPage();
	ref=true;
});


fname.addEventListener("focus", () =>{
	setBackground(fname);
});

lname.addEventListener("focus", () =>{
	setBackground(lname);
});

email.addEventListener("focus", () =>{
	setBackground(email);
});

num.addEventListener("focus", () =>{
	setBackground(num);
});
pass.addEventListener("focus", () =>{
	setBackground(pass);
});



fname.addEventListener("blur", () =>{
	remFocus(fname);
});

lname.addEventListener("blur", () =>{
	remFocus(lname);
});

email.addEventListener("blur", () =>{
	remFocus(email);
});

num.addEventListener("blur", () =>{
	remFocus(num);
});
pass.addEventListener("blur", () =>{
	remFocus(pass);
});


