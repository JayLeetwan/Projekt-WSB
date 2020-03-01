document.getElementById('dateFromContainer').valueAsDate = new Date();
document.getElementById('dateToContainer').valueAsDate = new Date();


function lotWDwieStrony() {
    var checkBox = document.getElementById("roundTripFlight");
    var text = document.getElementById("FinishDate");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }
  
  function funkcjaDataWylotu() {
    // var x = document.getElementById("myDate").value;
    // document.getElementById("dataWylotu").innerHTML = x;
  }
  
  function funkcjaDataPowrotu() {
    // var x = document.getElementById("myDate").value;
    // document.getElementById("dataPowrotu").innerHTML = x;
  }