function checkPeople() {
var grownUpsValue = parseInt(document.getElementById('howManyGrownups').value);
var childrenValue = parseInt(document.getElementById('howManyChildren').value);
var sumOfPassengers = grownUpsValue + childrenValue;

if (sumOfPassengers === 9) {
    passengersInfo = "Maksymalna liczba rezerwacji miejsc to 9.";
} else if (sumOfPassengers >= 9) {
    passengersInfo = "Przekroczono limit rezerwacji miejsc!";
} else {
    passengersInfo = "Liczba pasażerów dla tej rezerwacji to : " + sumOfPassengers;
}
document.getElementById("infoAboutPassengers").innerHTML = passengersInfo;
}