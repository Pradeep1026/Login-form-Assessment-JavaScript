var myUserInput = document.getElementById("username");
var myPswInput = document.getElementById("psw");
var letter = document.getElementById("letter");
var letter2 = document.getElementById("letter2");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var length2 = document.getElementById("length2");

// When the user clicks on the UserName field, show the message box
myUserInput.onfocus = function() {
  document.getElementById("message2").style.display = "block";
}

// When the user clicks outside of the UserName field, hide the message box
myUserInput.onblur = function() {
  document.getElementById("message2").style.display = "none";
}

// When the user clicks on the password field, show the message box
myPswInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myPswInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the UserName field
myUserInput.onkeyup = function() {
  // Validate Character
  var character = /[a-zA-Z\s]/;
  if(myUserInput.value.match(character)) {  
    letter2.classList.remove("invalid");
    letter2.classList.add("valid");
  } else {
    letter2.classList.remove("valid");
    letter2.classList.add("invalid");
  }

  // Validate length for UserName
  if(myUserInput.value.length >= 4 && myUserInput.value.length <= 20) {
    length2.classList.remove("invalid");
    length2.classList.add("valid");
  } else {
    length2.classList.remove("valid");
    length2.classList.add("invalid");
  }
}

// When the user starts to type something inside the password field
myPswInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/;
  if(myPswInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/;
  if(myPswInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/;
  if(myPswInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length for Password
  if(myPswInput.value.length >= 4 && myPswInput.value.length <= 20) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
