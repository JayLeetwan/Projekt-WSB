$(function () {
  let chosenDate = document.getElementById('flightDate');
  $('#flightDate').datepicker({
    dateFormat: 'dd-mm-yy',
    changeMonth: true,
    changeYear: true,
    maxDate: '12M',
    minDate: new Date(),
  });

  $('#flightDate').change(() => {
    localStorage.setItem('flightDate', chosenDate.value);
    console.log('chosenDate', chosenDate.value);
    console.log('fly date local storage', localStorage.getItem('flightDate'));
  });
});
