jQuery(function ($) {

  //zresetuj scroll
  $.scrollTo(0);

  $('#linkDoWyboruMiejsc').click(function () {
      $.scrollTo($('#wyborMiejsc'), 500);
  });
});

function wyborMiejsc() {

  document.getElementById("wyborMiejsc").style.display = "block";
}



function choseSeats() {
  var wayFrom = document.getElementById("startCity").value;
  var wayTo = document.getElementById("destinationCity").value;
  if (wayFrom === "Poznań" || wayFrom === "Warszawa" & wayTo === "Warszawa" || wayTo === "Poznań" ) {
    document.getElementById('planePlan').src="bombardierPlan.html";
    alert("Index of startCity is: " + wayFrom + ", and index of destinationCity is: " + wayTo);
  }
}