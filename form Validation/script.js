var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("ph-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("msg-error");
var buttonError = document.getElementById("btn-error");




var button = document.getElementById("btn");

function validateName(){
    var name = document.getElementById("name").value;
    if (name.length == 0){
        nameError.innerHTML= 'Name is required'
        return false;
    }
    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)){
        nameError.innerHTML= 'Write Full Name'
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validatePhone(){
    var phone = document.getElementById("phone").value;
    if (phone.length == 0){
        phoneError.innerHTML= 'phone is required'
        return false;
    }
    if (phone.length < 10 || phone.length >10){
        phoneError.innerHTML= 'Phone number should be 10 digits'
        if (!phone.match(/^[0-9]$/)){
        phoneError.innerHTML= 'only digits allowed'
        return false;
    }
        return false;
    }
    
     
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
}

function validateEmail(){
   
var email = document.getElementById("email").value;
    if (email.length == 0){
        emailError.innerHTML= 'email is required'
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,}$/
)){
        emailError.innerHTML= 'Email invalid'
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
} 

function validateMsg(){
    
    var message = document.getElementById("msg").value;
    var required = 30;
    var left = required-message.length;
    if (left> 0){
        messageError.innerHTML=left + ' more charachters are required'
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>'
    return true
} 

function validateForm(){
  if (!validateName() || !validatePhone() || !validateEmail() || !validateMsg()) {
        buttonError.innerHTML = "Please fix errors before submitting";
        return false;
    }
    buttonError.innerHTML = "";
    return true;  
}