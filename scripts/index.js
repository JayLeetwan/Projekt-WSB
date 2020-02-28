var users = {
  fullName: "John Lenon",
  userName: "JohnyXXX",
  password: "XXX123"
};

function logingIn(form) {
  if (form.login.value == users.userName && form.haslo.value == users.password) {
  document.getElementById("stronalogowania").style.display = "none";
  } else {
  alert("Login or password is not correct!")
  }
  }

function lotWDwieStrony() {
  var checkBox = document.getElementById("wteinazad");
  var text = document.getElementById("FinishDate");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function funkcjaDataWylotu() {
  var x = document.getElementById("myDate").value;
  document.getElementById("dataWylotu").innerHTML = x;
}

function funkcjaDataPowrotu() {
  var x = document.getElementById("myDate").value;
  document.getElementById("dataPowrotu").innerHTML = x;
}

var samolot = $("#samolot");
for (var i = 0; i < 15; i++) {
  var descr = $('<tr><td><label></label></td><td colspan="2">' +
    '<label class="seat"><input class="chb" type="checkbox" value="1" ></label>' + '<label class="checkbox"><input class="chb" type="checkbox" value="1" ></label>' + '<label class="checkbox"><input class="chb" type="checkbox" value="1" ></label>' + '              ' + '<label class="checkbox"><input class="chb" type="checkbox" value="1" ></label>' + '<label class="checkbox"><input class="chb" type="checkbox" value="1" ></label>' + '<label class="checkbox"><input class="chb" type="checkbox" value="1" ></label>' +
    '</div></td><td></td><td></td></tr>');
  $(descr).insertAfter(samolot);
}

function wyborMiejsc() {

  document.getElementById("wyborMiejsc").style.display = "block";
}
