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
