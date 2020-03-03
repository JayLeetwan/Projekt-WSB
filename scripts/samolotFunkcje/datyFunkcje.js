        var chosenFlightDate = document.getElementById("dateFrom").value;

        // document.getElementById("roundTripFlight").addEventListener("check", lotWDwieStrony);
        function lotWDwieStrony() {
          var checkBox = document.getElementById("roundTripFlight");
          var text = document.getElementById("FinishDate");
          if (checkBox.checked === true) {
            text.style.display = "block";
          } else {
            text.style.display = "none";
          }
        }

        // var todaysDate = new Date();
        // var day = todaysDate.getDate();
		    // var month = todaysDate.getMonth()+1;
        // var year = todaysDate.getFullYear();
        // if(day<10){
        //     day='0'+day
        // } 
        // if(month<10){
        //     month='0'+month
        // }

        $( function() {
          $("#dateFrom").datepicker({
          dateFormat: "dd-mm-yy",
          changeMonth: true,
          changeYear: true,
          maxDate: '12M',
          minDate: '0',
            });
        })

      $( function() {
          $("#dateTo").datepicker({
          dateFormat: "dd-mm-yy",
          changeMonth: true,
          changeYear: true,
          maxDate: '12M',
          minDate: chosenFlightDate,
            });
        })


        
// document.getElementById('dateFromContainer').valueAsDate = new Date();
// document.getElementById('dateToContainer').valueAsDate = new Date();

// function dateValidate() {
//     var input = document.getElementsByClassName("dateContainer");
//     var maxDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth() +13, now.getDay());
//     var minDate = new Date(todaysDate.getFullYear(), todaysDate.getMonth(), now.getDay());
//     input.setAttribute("min", minDate);
//     input.setAttribute("max", maxDate);
//   }

// $(function() {
//     $("#dateFromContainer").dateFromContainer({
//       minDate: 0,
//       maxDate: 365
//     });
  
//   });  

