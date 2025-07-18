/*
Author: Jacquelin Valdez Campa
Program name: homework4.js
Date created: 06/23/25
Date last edited: 06/26/25
Version: 4.0
Description: Homework 4 JavaScript that validates form inputs, displays error messages, 
adds cookies, and enables submission only when all data is valid.
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
  if( x.length<1 || x.length > 30) { 
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
      middleinit_message.innerHTML = "Invalid. Only one letter allowed.";
      error_flag = 1;
    }
  }
}

// Validates last name field
function validateLastName () {
  x = document.getElementById("lastname").value;
  if( x.length<1 || x.length > 30) { 
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
  let DOB = document.getElementById("dateofbirth");
  let date = new Date(DOB.value.trim());
  let maxDate = new Date();
  maxDate.setFullYear(new Date().getFullYear() - 120);
  let today = new Date();

  if (DOB.value.trim() === "") {
    document.getElementById("dateofbirth_message").innerHTML = "DOB cannot be blank.";
    DOB.value = "";
    error_flag = 1;
  }
  else if (date > today) {
    document.getElementById("dateofbirth_message").innerHTML = "Date cannot be in the future.";
    DOB.value = "";
    error_flag = 1;
  }
  else if (date < maxDate) {
    document.getElementById("dateofbirth_message").innerHTML = "Date cannot be more than 120 years ago.";
    DOB.value = "";
    error_flag = 1;
  }
  else {
    document.getElementById("dateofbirth_message").innerHTML = "";
  }
}


// Validates SSN
function validateSSN() {
  const ssn = document.getElementById("SSN").value;
  const digitCount = ssn.replace(/\D/g, "").length;
  const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;

  document.getElementById("SSNCounter_message").innerText = `Digits typed: ${digitCount} / 9`;

  if (!ssnR.test(ssn)) {
    document.getElementById("SSN_message").innerHTML = 
    "Invalid. SSN must be 9 digits only.";
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
  else if (uid.length > 20) {
    document.getElementById("userid_message").innerHTML = 
    "User ID cannot exceed 20 characters.";
    error_flag = 1;
  }
  else {
    document.getElementById("userid_message").innerHTML = "";
  }
}

// Validates password requirements
function validatePassword() {
  let uid = document.getElementById("userid").value;
  let passwordinput = document.getElementById("password").value;
  let passwordoutput;
  error_flag = 0;

  if (passwordinput === uid) {
    passwordoutput = "Password cannot be the same as User ID.";
    document.getElementById("password_msg6").innerHTML = passwordoutput;
    error_flag = 1;
  } else {
    document.getElementById("password_msg6").innerHTML = "";
  }
  if (passwordinput.search(/[0-9]/) < 0) {
    passwordoutput = "Enter at least 1 digit.";
    error_flag = 1;
  } else {
    passwordoutput = "Password has at least 1 number";
  }
  document.getElementById("password_msg1").innerHTML = passwordoutput;
  if (passwordinput.search(/[!@#\$%&*\-_\\.+\(\)]/) < 0) {
    passwordoutput = "Enter at least 1 special character.";
    error_flag = 1;
  } else {
    passwordoutput = "Password has at least 1 special character.";
  }
  document.getElementById("password_msg2").innerHTML = passwordoutput;
  if (passwordinput.length < 8) {
    passwordoutput = "Enter a Minimum of 8 characters.";
    error_flag = 1;
  } else {
    passwordoutput = "Password is now 8 or more characters.";
  }
  document.getElementById("password_msg3").innerHTML = passwordoutput;
  passwordoutput = "";
  if (passwordinput.search(/[a-z]/) < 0) {
    passwordoutput = "Enter at least 1 lower case letter.";
    error_flag = 1;
  }
  document.getElementById("password_msg4").innerHTML = passwordoutput;
  passwordoutput = "";
  if (passwordinput.search(/[A-Z]/) < 0) {
    passwordoutput = "Enter at least 1 upper case letter.";
    error_flag = 1;
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
  var city = document.getElementById("city").value.trim();

  if (city === "") {
    document.getElementById("city_message").innerHTML = "City name cannot be blank.";
    error_flag = 1;
  } else if (city.length < 2 || city.length > 30) {
    document.getElementById("city_message").innerHTML = "City name must be between 2 and 30 characters.";
    error_flag = 1;
  } else if (!city.match(/^[a-zA-Z\s'-]+$/)) {
    document.getElementById("city_message").innerHTML = "Invalid. letters only in City name.";
    error_flag = 1;
  } else {
    document.getElementById("city_message").innerHTML = "";
  }
}

//validates state field 
function validateState() {
  const state = document.getElementById("state").value;

  if (state === "") {
    document.getElementById("state_message").innerHTML = "State field must be selected.";
    error_flag = 1;
    return;
  } 
  else {
    document.getElementById("state_message").innerHTML = "";
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
  var emailField = document.getElementById("email");
  var email = emailField.value.toLowerCase(); 
  emailField.value = email; 

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


//validates notes field 
function validateNotes() {
  const notes = document.getElementById("notes").value;
  const max = 300;

  if (notes && notes.length > max) {
    document.getElementById("notes_message").innerHTML = "Invalid. Additional notes cannot exceed 300 characters.";
    error_flag = 1;
  } else {
    document.getElementById("notes_message").innerHTML = "";
  }
}

// Inputs to save/load via cookies
const inputs = [
    { id: "firstname", cookieName: "firstName" },
    { id: "middleinit", cookieName: "middleInit" },
    { id: "lastname", cookieName: "lastName" },
    { id: "dateofbirth", cookieName: "dob" },
    { id: "SSN", cookieName: "ssn" },
    { id: "userid", cookieName: "userId" },
    { id: "password", cookieName: "password" },
    { id: "conpassword", cookieName: "conPassword" },
    { id: "address1", cookieName: "address1" },
    { id: "address2", cookieName: "address2" },
    { id: "city", cookieName: "city" },
    { id: "state", cookieName: "state" },
    { id: "zipcode", cookieName: "zipcode" },
    { id: "email", cookieName: "email" },
    { id: "phone", cookieName: "phone" },
    { id: "comfortrange", cookieName: "comfort" },
    { id: "notes", cookieName: "notes" }
];

// creates a browser cookie with name, value, and expiration in days
function setCookie(name, cvalue, expiryDays) {
    var day = new Date();
    day.setTime(day.getTime() + (expiryDays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + day.toUTCString();
    document.cookie = name + "=" + cvalue + ";" + expires + ";path=/";
}

// gets the value of a cookie by its name
function getCookie(name) {
    var cookieName = name + "=";
    var cookies = document.cookie.split(';');

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.indexOf(cookieName) == 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

// pre-fills inputs with cookie values and saves new input changes as cookies
inputs.forEach(function (input) {
    var inputElement = document.getElementById(input.id);

    var cookieValue = getCookie(input.cookieName);
    if (cookieValue !== "") {
        inputElement.value = cookieValue;
    }

    inputElement.addEventListener("input", function () {
        setCookie(input.cookieName, inputElement.value, 30);
    });
});

// welcomes returning users with their name stored in cookies
var firstName = getCookie("firstName");
if (firstName !== "") {
    document.getElementById("welcomeBack").innerHTML = "Welcome back, " + firstName + "!<br>";
    document.getElementById("welcomeNewUser").innerHTML =
        "<a href='#' id='new-user'>Not " + firstName + "? Click here to start a new form.</a>";

    document.getElementById("new-user").addEventListener("click", function () {
        inputs.forEach(function (input) {
            setCookie(input.cookieName, "", -1);
        });
        location.reload();
    });
}

// saves or deletes cookies based on the "Remember Me" checkbox status
document.getElementById("rememberMe").addEventListener("change", function () {
    const rememberMe = this.checked;

    if (!rememberMe) {
        deleteAllCookies();
        console.log("All cookies deleted because 'Remember Me' is unchecked.");
    } 
    else {
        inputs.forEach(function (input) {
            const inputElement = document.getElementById(input.id);
            if (inputElement.value.trim() !== "") {
                setCookie(input.cookieName, inputElement.value, 30);
            }
    });
        console.log("Cookies saved because 'Remember Me' is checked.");
    }
});

// deletes all cookies by setting their expiration date in the past
function deleteAllCookies() {
    document.cookie.split(";").forEach(function (cookie) {
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;";
    });
}

// deletes all cookies on page load if "Remember Me" is not checked
document.addEventListener("DOMContentLoaded", function () {
    const rememberMe = document.getElementById("rememberMe").checked;

    if (!rememberMe) {
        deleteAllCookies();
    }
});

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
  validateState();
  validateZipCode();
  validateEmail();
  validatePhone();
  validateNotes();
  console.log("Error flag: "+error_flag);
    if (error_flag == "1") {
      alert("Please fix the indicated errors!");
    }
    else {
      document.getElementById("submit").disabled = false;
    }
}
       
