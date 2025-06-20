/*
Author: Jacquelin Valdez Campa
Program name: homework2.js
Date created: 06/16/25
Date last edited: 06/19/25
Version: 2.0
Description: Homework 2 JavaScript that validates form inputs, displays error messages, 
formats fields, and enables submission only when all data is valid.
*/

// sets errors to 0
function setup() {
    var error_flag = 0;
    console.log(error_flag);
  }

// starts form over 
function removedata1() {
  document.getElementById("outputformdata").innerHTML = "(you started over)";
}

// JS for dynamic date 
document.getElementById("today").innerHTML = new Date().toLocaleDateString();

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
    error_flag = 1;
  } 
  else if (date < new Date(maxDate)) {
    document.getElementById("dateofbirth_message").innerHTML = 
    "Date cannot be more than 120 years ago.";
    dob.value = "";
    error_flag = 1;
  } 
  else {
    document.getElementById("dateofbirth_message").innerHTML = "";
  }
}

// Validates SSN
function validateSSN() {
  const ssn = document.getElementById("SSN").value;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  if (!ssnR.test(ssn)) {
    document.getElementById("SSN_message").innerHTML = 
    "Invalid. SSN must be 9 digits";
    error_flag = 1;
  } 
  else {
    document.getElementById("SSN_message").innerHTML = "";
  }
}

// Validates user ID 
function validateUserID() {
  let uid = document.getElementById("userid").value.toLowerCase();
  document.getElementById("userid").value = uid;

  if (uid.length == 0) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot be blank.";
    error_flag = 1;
  }

  if (!isNaN(uid.charAt(0))) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot start with a number.";
    error_flag = 1;
  }

  let regex = /^[a-zA-Z0-9_-]+$/;
  if (!regex.test(uid)) {
    document.getElementById("userid_message").innerHTML = 
    "User ID can only have letters, numbers, underscores, and dashes.";
    error_flag = 1;
  }
  else if (uid.length < 5) {
    document.getElementById("userid_message").innerHTML = 
    "User ID must be at least 5 characters.";
    error_flag = 1;
  } 
  else if (uid.length > 30) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot exceed 30 characters.";
    error_flag = 1;
  }
  else {
    document.getElementById("userid_message").innerHTML = "";
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
  if (password === uid) {
  passwordoutput = "Password cannot be the same as User ID.";
  error_flag = 1;
  }
  else {
    passwordoutput = "";
  }      
  document.getElementById("password_msg6").innerHTML = passwordoutput;
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
  var city = document.getElementById("city").value.trim();

  if (city === "") {
    document.getElementById("city_message").innerHTML = "City name cannot be empty.";
    error_flag = 1;
  } else if (city.length < 2 || city.length > 30) {
    document.getElementById("city_message").innerHTML = "City name must be between 2 and 30 characters.";
    error_flag = 1;
  } else if (!city.match(/^[a-zA-Z\s'-]+$/)) {
    document.getElementById("city_message").innerHTML = "Invalid characters in City name.";
    error_flag = 1;
  } else {
    document.getElementById("city_message").innerHTML = "";
  }
}

// validates zip code field
function validateZipCode() {
  var zipCodeInput = document.getElementById("zipcode");
  var zip = zipCodeInput.value.replace(/[^\d]/g, "").trim();

  if (zip === "") {
    document.getElementById("zipcode_message").innerHTML = "Zip code cannot be blank. Must be a minimum of 5 digits.";
    error_flag = 1;
  } else if (zip.length < 5) {
    document.getElementById("zipcode_message").innerHTML = "Zip code must be at least 5 digits.";
    error_flag = 1;
  } else {
    if (zip.length > 5) {
      zip = zip.slice(0, 5) + "-" + zip.slice(5, 9);
    } else {
      zip = zip.slice(0, 5);
    }
    zipCodeInput.value = zip;
    document.getElementById("zipcode_message").innerHTML = ""; 
  }
}

// validates email address field
function validateEmail() {
  var email = document.getElementById("email").value;
  var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.trim() === "") {
    document.getElementById("email_message").innerHTML = "Email address cannot be blank.";
    error_flag = 1;
  }
  else if (!email.match(emailPattern)) {
    document.getElementById("email_message").innerHTML = "Invalid. Enter a valid email address.";
    error_flag = 1;
  }
  else {
    document.getElementById("email_message").innerHTML = "";
  }
}

// validates phone number field
function validatePhone() {
  const phone = document.getElementById("phone");
  let digits = phone.value.replace(/\D/g, '');

  if (digits === "") {
    document.getElementById("phone_message").innerHTML = "Phone number cannot be blank.";
    error_flag = 1; 
    return;
  }

  if (digits.length !== 10) {
    document.getElementById("phone_message").innerHTML = "Invalid. Enter a 10 digit phone number.";
    error_flag = 1;
    return;
  }

  if (digits.charAt(0) === '1') {
    document.getElementById("phone_message").innerHTML = "Phone number cannot start with 1.";
    error_flag = 1;
    return;
  }
  phone.value = digits.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
  document.getElementById("phone_message").innerHTML = ""; 
}

// review form data
function reviewForm() {
  const form = document.getElementById("signup");
  let formoutput = "<table class='output'><tr><th colspan='2'>Review Your Information:</th></tr>";

  for (const el of form.elements) {
    if (["button", "submit", "reset"].includes(el.type)) continue;  

    let label = el.name + ":";
    let value;

    if (el.type === "checkbox") {
      if (!el.checked) continue;
      value = "✓";
    } else if (el.type === "radio") {
      if (!el.checked) continue;
      value = el.value;
    } else {
      value = el.value;
    }

    formoutput += `<tr>
      <td align="right">${label}</td>
      <td>${value}</td>
    </tr>`;
  }

  formoutput += "</table>";
  document.getElementById("outputformdata").innerHTML = formoutput;
}

//Validates all functions, shows an alert if there are any errors
function validateInformation() {
  error_flag = "0";
  validateFirstName();
  validateMiddleInit();
  validateLastName();
  validateDateOfBirth();
  validateSSN();
  validateUserID();
  validatePassword();
  validateConPassword();
  validateAddress1();
  validateAddress2();
  validateCity();
  validateZipCode();
  validateEmail();
  validatePhone();
  console.log("Error flag: "+error_flag);
    if (error_flag == "1") {
      alert("Please fix the indicated errors!");
    }
    else {
      document.getElementById("submit").disabled = false;
    }
}
       
