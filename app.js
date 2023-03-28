


var emails = [];
var passwords = [];

function signup() {
  var signupEmail = document.getElementById("inputemail1").value;
  var signupPassword = document.getElementById("inputpasword1").value;
  emails.push(signupEmail);
  passwords.push(signupPassword);
  console.log(signupEmail);
  console.log(signupPassword);
  // window.location.href = "./index2.html";
}

function login() {
  var loginEmail = document.getElementById("inputemail2").value;
  var loginPassword = document.getElementById("inputpasword2").value;
  var loginSuccessful = false; // flag variable
  for (var i = 0; i < emails.length; i++) {
    if (emails[i] == loginEmail && passwords[i] == loginPassword) {
      alert("Congratulations, login successful!");
      window.location.href = "./index3.html";
      loginSuccessful = true; // set flag variable to true
      break; // exit the loop since login was successful
    }
  }
  if (!loginSuccessful) { // show alert if login was not successful
    alert("Incorrect email or password, please try again.");
    console.log("check condition");
  }
}
