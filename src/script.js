var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

 
function validateName(){
    var name = document.getElementById("name").value;
    if(name.length==0){
        nameError.innerHTML='name is required';
    return false;
    }
     if(!name.matches(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='name is required';
     return false;
        
     }
}
function validateEmail(){
var email=document.getElementById("email").value;
if(email.length==0){
    emailError.innerHTML='name is required';
    return false;}
if(!email.matches(/^[A-Za-z]\._\-[0-9]*[@][A-Za-z]*[]a-z{2.4}$/)){
    emailError.innerHTML='email is required';
        return false; } 
    }
function validateMessage(){
    var message = document.getElementById="message".value;
    var required = 30;
    var left=required-message.length;


    if(left>0){
        messageError.innerHTML= left + 'more charachters required';
    return false;
    }
}
function  validateForm(){
   if(!validateName()|| !validateMessage()|| validateEmail()){
    submitError.innerHTML='please submit again';
    return false;
   }
}