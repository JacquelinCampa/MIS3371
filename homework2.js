/*
Author: Jacquelin Valdez Campa
Program name: homework12.js
Date created: 06/16/25
Date last edited: 
Version: 1.0
Description: homework 2 JavaScript to Redisplay/validate patient data from a form
*/

// JS for dynamic date 
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

// Clears the displayed patient data to start form again
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(You started over.)";
}

// Displays all form data in a new section 
function reviewForm() {
  var formcontents = document.getElementById("signup");
  var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
  for (i = 0; i < formcontents.length; i++) {
    if (formcontents.elements[i].value !="") { 
      switch (formcontent.elements[i].type) {
        case "checkbox":
          if (formcontents.elements[i].checked) {
              formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
            }
            break;
        case "radio":
          if (formcontents.elements[i].checked) {
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
          }
          break;
        default:
            formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
      }
    }
  }
  formoutput += "</table>";
  document.getElementById("outputformdata").innerHTML = formoutput;
}

// Displays the range slider value 
var slider = document.getElementById("comfortrange");
var output = document.getElementById("rangedisplay");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
  
// Validates first name field
function validateFirstName() {
  x = document.getElementById("firstname").value;
  if( x.length<1) { 
    document.getElementById("firstname_message").innerHTML = "Invalid. First name must be 1-30 characters.";  
    error_flag = 1;
  }
  else {
    if (x.match(/^[a-zA-Z'-]+$/)) {
      document.getElementById("firstname_message").innerHTML = "";  
    }
    else {
      document.getElementById("firstname_message").innerHTML = "Invalid. Only letters, apostrophes, and dashes.";
      error_flag = 1;
    }
  }
}

// Validates middle name field 
function validateMiddleInit() {
  var x = document.getElementById("middleinit").value;
  var middleinit_message = document.getElementById("middleinit_message")
  if( x.length > 0) { 
    if (x.match(/^[a-zA-Z]+$/)) {
      middleinit_message.innerHTML = "";
    }
    else  {
      middleinit_message.innerHTML = "Invalid. Only letters allowed.";
      error_flag = 1;
    }
  }
}

// Validates last name field
function validateLastName () {
  x = document.getElementById("lastname").value;
  if( x.length<1) { 
    document.getElementById("lastname_message").innerHTML = "Invalid. Last name must be 1-30 characters.";
    error_flag = 1;  
    }
  else {
    if (x.match(/[a-zA-Z3-5'-]+$/)) {
      document.getElementById("lastname_message").innerHTML = "";  
    }
    else  {
      document.getElementById("lastname_message").innerHTML = "Invalid. Only letters, apostrophes, and dashes.";
      error_flag = 1;
    }
  }
}

// Validates date of birth field 
function validateDateOfBirth() {
  DOB = document.getElementById("dateofbirth");
  let date = new Date(DOB.value);
  let maxDate = new Date().setFullYear(new Date().getFullYear() - 120);
  let today = new Date();

  if (date > today) {
    document.getElementById("dateofbirth_message").innerHTML = 
    "Date cannot be in the future.";
    dob.value = "";
    return false;
  } 
  else if (date < new Date(maxDate)) {
    document.getElementById("dateofbirth_message").innerHTML = 
    "Date cannot be more than 120 years ago.";
    dob.value = "";
    return false;
  } 
  else {
    document.getElementById("dateofbirth_message").innerHTML = "";
    return true;
  }
}

// Validates SSN
function validateSSN() {
  const ssn = document.getElementById("SSN").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
    document.getElementById("SSN_message").innerHTML = 
    "Invalid. SSN must be 9 digits";
    return false;
  } 
  else {
    document.getElementById("SSN_message").innerHTML = "";
    return true;
  }
}

// Validates user ID 
function validateUserID() {
  let uid = document.getElementById("userid").value.toLowerCase();
  document.getElementById("userid").value = uid;

  if (uid.length == 0) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot be blank.";
    return false;
  }

  if (!isNaN(uid.charAt(0))) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot start with a number.";
    return false;
  }

  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    document.getElementById("userid_message").innerHTML = 
    "User ID can only have letters, numbers, underscores, and dashes.";
    return false;
  }
  else if (uid.length < 5) {
    document.getElementById("userid_message").innerHTML = 
    "User ID must be at least 5 characters.";
    return false;
  } 
  else if (uid.length > 30) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot exceed 30 characters.";
    return false;
  }
  else {
    document.getElementById("userid_message").innerHTML = "";
    return true;
  }
}

// Validates password requirements
function validatePassword() {
  var passwordoutput;
  var passwordinput = document.getElementById("password").value;
  console.log(passwordinput);

  // requires one digit in the password field
  if(passwordinput.search(/[0-9]/)<0 ) {   
    passwordoutput = "Enter at least 1 digit.";
    error_flag = 1;
  } 
  else {
    passwordoutput = "Password has at least 1 number";
  }
  document.getElementById("password_msg1").innerHTML = passwordoutput;
  // requires a special character in the password field
   if(passwordinput.search(/[!\@#\$%&*\-_\\.+\(\)]/)<0 ) {   
    passwordoutput = "Enter at least 1 special character.";
    error_flag = 1;
  }
  else {
    passwordoutput = "Password has at least 1 special character.";
  }
  document.getElementById("password_msg2").innerHTML = passwordoutput;
  // requires a minimum of 8 characters in the password field
  if(passwordinput.length < 8) {
    passwordoutput = "Enter a Minimum of 8 characters.";
    error_flag = 1;
  } 
  else {
    passwordoutput = "Password is now 8 or more characters.";
  }
  document.getElementById("password_msg3").innerHTML = passwordoutput;
  // requires one lower case letter in the password field
  if(passwordinput.search(/[a-z]/) < 0) {
    passwordoutput = "Enter at least 1 lower case letter.";
    error_flag = 1;
  }
  else {
    passwordoutput = "";
  }
  // requires one upper case letter in the password field
  document.getElementById("password_msg4").innerHTML = passwordoutput;
  if(passwordinput.search(/[A-Z]/)< 0)  {  
    passwordoutput = "Enter at least 1 upper case letter.";
    error_flag = 1;
  }
  else {
    passwordoutput = "";
  }
  document.getElementById("password_msg5").innerHTML = passwordoutput;
}

// ensures both passwords fields match 
function validateConPassword() {
  x=document.getElementById("password").value;
  y=document.getElementById("conpassword").value;
  if ( x==y ) 
  {
    document.getElementById("conpassword_message").innerHTML = "Passwords match.";
  } 
  else {
    document.getElementById("conpassword_message").innerHTML = "Invalid. Passwords do not match.";
    error_flag = 1;
  }
}

// validates address 1 field
function validateAddress1() {
  var x = document.getElementById("address1").value;
  var address2_message = document.getElementById("address1_message")

  if (x.length < 2 || x.length > 30) {  
    document.getElementById("address1_message").innerHTML = "Invalid. Address must be 2-30 characters.";  
    error_flag = 1; 
    console.log(error_flag);
  }
  else { 
    document.getElementById("address1_message").innerHTML = "";  
  }
  console.log(address1_message);
}

// validates address 2 field
function validateAddress2() {
  var x = document.getElementById("address2").value;
  var address2_message = document.getElementById("address2_message")

  if (x.length > 0 && (x.length < 2 || x.length > 30)) {  
    document.getElementById("address2_message").innerHTML = "If provided, address must be 2-30 characters.";  
    error_flag = 1; 
    console.log(error_flag);
  }
  else { 
    document.getElementById("address2_message").innerHTML = "";  
  }
  console.log(address2_message);
}

// validates city field
function validateCity() {
  if (document.getElementById("city").value.match(/^[a-zA-Z '-]+$/)) {
    document.getElementById("city_message").innerHTML = "";  
  }
  else  {
    document.getElementById("city_message").innerHTML = "Invalid. Only letters, spaces, apostrophes, or hyphens.";
    error_flag = 1;
  }
    document.getElementById("city_message").innerHTML = "";
}

// validates zip code field
function validateZipCode() {
  const zipCodeInput = document.getElementById("zipcode");
  let zip = zipCodeInput.value.replace(/[^\d-]/g, "");

  if (!zip) {
    document.getElementById("zipcode_message").innerHTML = 
    "Zip code cannot be blank. Must be a minimum of 5 digits.";
    return false;
  }
  if (zip.length > 5) {
    zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
  } 
  else {
    zip = zip.slice(0, 5);
  }
  zipCodeInput.value = zip;
  document.getElementById("zipcode_message").innerHTML = "";
  return true;
}

// validates email address field
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var email_message = document.getElementById("email_message");

  if (email.trim() === "") {
    email_message.innerHTML = "Email address cannot be blank.";
    return false;
  }
  else if (!email.match(emailPattern)) {
    email_message.innerHTML = "Invalid. Enter a valid email address.";
    return false;
  } 
  else {
    email_message.innerHTML = "";
    return true;
  }
}

// validates phone number field
function validatePhone() {
  const phone = document.getElementById("phone");
  const phone_message = document.getElementById("phone_message");
  let digits = phone.value.replace(/\D/g, '');

  if (digits == '') {
    phone_message.innerHTML = "Phone number cannot be blank.";
    return false;
  }
  if (digits.length !== 10) {
    phone_message.innerHTML = "Invalid. Enter a 10 digit phone number.";
    return false;
  }
    if (digits.charAt(0) === '1') {
    phone_message.innerHTML = "Phone number cannot start with 1.";
    return false;
  }
  phone.value = digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  phone_message.innerHTML = "";
  return true;
}
