$(document).ready(function () {
  $("#btn").click(function () {
    var day = $("#day");
    var month = $("#month");
    var year = $("#year");
    //reset
    $("#showErro").hide();
    $(".inputNum").css("border-color", "gray");
    //validation
    if (
      day.val().length > "2" ||
      month.val().length > "2" ||
      year.val().length != "4"
    ) {
      $("#showErro").text("error entry (eg DD MM YYYY)");
      $("#showErro").show("slow");
      $(".inputNum").css("border-color", "red");
    }
    if (day.val() == "" || month.val() == "" || year.val() == "") {
      $("#showErro").text("one of feild is empty please fill all field");
      $("#showErro").show("slow");
    } else {
      $(".inputNum").css("border-color", "green");

      let now = new Date();
      let nowYear = now.getFullYear();
      let nowMonth = now.getMonth() + 1;
      let nowDay = now.getDay();
function proper(){
    function days() {
        if (day.val() > nowDay) {
          nowMonth -= 1;
          nowDay += 30;
          setDay = nowDay - day.val();
          return setDay;
        } else {
          var setDay = nowDay - day.val();
          return setDay;
        }
      }
      function months() {
        if (month.val() > nowMonth) {
          nowYear -= 1;
          nowMonth += 12;
          setMonth = nowMonth - month.val();
          return setMonth;
        } else {
          setMonth = nowMonth - month.val();
          return setMonth;
        }
      }
      function years() {
        if (year.val() > nowYear) {
          alert("you are not born yet");
        } else {
          setYear = nowYear - year.val();
          return setYear;
        }
      }  
      days();
      months();
      years();

      
      $("#y").text(setYear);
      $("#m").text(setMonth);
      $("#d").text(setDay);
    }
}

    proper();

  });
});
