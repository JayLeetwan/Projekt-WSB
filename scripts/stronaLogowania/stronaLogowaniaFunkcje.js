function checkCredentials(userName, password, usersTable) {
    for (i=0;i < usersTable.length; i++) {
        // console.log(usersTable[i].userName)
        if(userName === usersTable[i].userName & password === usersTable[i].password) {
            return true
        }
    }
    return false
}

function logingIn(form) {
    
    if (checkCredentials(form.login.value, form.haslo.value, users)) {
        document.getElementById("stronalogowania").style.display = "none";
    } else {
        alert("Login or password is not correct!")
    }
    setTimeout(logOutAlert, 120000);
    setTimeout(logOut, 180000);
}
function logOutAlert() {
    window.alert("You are about to be loged out");
}
function logOut() {
    document.getElementById("stronalogowania").style.display = "block";
}
