function logingIn(form) {
    if (form.login.value == users.userName && form.haslo.value == users.password) {
    document.getElementById("stronalogowania").style.display = "none";
    } else {
    alert("Login or password is not correct!")
    }
    }
  