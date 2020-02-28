function checkCredentials(userName, password, usersTable) {
    console.log(XXX);
    for (i=0; usersTable.length; i++) {
        console.log(userName)
    }
}

function logingIn(form) {
    console.log(XXX);
    checkCredentials(form.login.value, form.haslo.value, users);
    console.log(XXX);
    if (form.login.value == users.userName && form.haslo.value == users.password) {
    document.getElementById("stronalogowania").style.display = "none";
    } else {
    alert("Login or password is not correct!")
    }
    }

  