const formlog = document.getElementById("login-form");
const BtnLog = document.getElementById("login-form-submit");
const ErrorMessage = document.getElementById("login-error-msg");

ErrorMessage.style.opacity = 0;
BtnLog.addEventListener("click", (e) => {
    e.preventDefault();
    const username = formlog.username.value;
    const password = formlog.password.value;
    ErrorMessage.style.opacity = 0;

    if (username === "admin" && password === "glathriploi") {
      
      window.open("/assets/admincontrol/admincontrol.html","_self");

    } else {
        ErrorMessage.style.opacity = 1;
    }

    if (username === "recruit" && password === "brarmyrcrt") {
      ErrorMessage.style.opacity = 0;
      window.open("/assets/recruitcontrol.html","_self");

    } else {
        ErrorMessage.style.opacity = 1;
    }
  })


function showPassword() {
  var x = document.getElementById("password-field");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}