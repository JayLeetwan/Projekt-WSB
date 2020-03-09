        function lotWDwieStrony() {
          var checkBox = document.getElementById("roundTripFlight");
          var text = document.getElementById("FinishDate");
          if (checkBox.checked === true) {
            text.style.display = "block";
          } else {
            text.style.display = "none";
          }
        }

        $(function () {
          let chosenDate = document.getElementById("dateFrom");
          $("#dateFrom").datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: true,
            changeYear: true,
            maxDate: "12M",
            minDate: new Date(),
          });
          $("#dateTo").datepicker({
            dateFormat: "dd-mm-yy",
            changeMonth: true,
            changeYear: true,
            maxDate: "12M",
            minDate: new Date(),
          });
          $("#dateFrom").change(() => {
            $("#dateTo").datepicker("option", "minDate", chosenDate ? chosenDate.value : new Date());
          });
        });