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



function createAirplaneHtml() {
  var wayFrom = document.getElementById("startCity").value;
  var wayTo = document.getElementById("destinationCity").value;
  if (wayFrom === "Poznań" || wayFrom === "Warszawa" & wayTo === "Warszawa" || wayTo === "Poznań" ) {
    alert("Index of startCity is: " + wayFrom + ", and index of destinationCity is: " + wayTo);
    var seatsNumber = 60;
    for (i=0; i < seatsNumber; i++) {
      console.log('siedzenie numer'[i]);
       return `<input id=` + i + ` type= 'checkbox'>`;
    }
  } else {
      alert("duży samolot");
      return `
      <input id='1' type= 'checkbox'>
      `
  }
}

function setHtmlIntoContainer(){
  console.log('wykonuje setHtmlIntoContainer')
  document.getElementById('samolot-plan-kontener').innerHTML = createAirplaneHtml(document.getElementById('linkDoWyboruMiejsc').click)
} 