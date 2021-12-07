$(document).ready(function(){

var saveEvent = $(".saveBtn");

function updateTime () {
    var time = moment();
    $("#currentDay").text(time.format("LLLL"));
} setInterval(updateTime, 1000);
//function to change color
function changeColor() {
const d = new Date();
let hour = d.getHours();
console.log(hour)

$(".time-block").each(function (){
var rowsHour = parseInt(
  $(this).attr("id").split("_")[0]
);

if (rowsHour < hour) {
  $( this ).addClass( "past" );
}
else if (rowsHour === hour) {
  $( this ).removeClass( "past" );
  $( this ).addClass( "present" );
}
else {
  $( this ).removeClass( "past" );
  $( this ).removeClass( "present" );
  $( this ).addClass( "future" );
}
})
}
changeColor();

//function to save the event
saveEvent.on('click', function () {
  var newEvent = $(this).siblings(".notes").val()
  console.log(newEvent);
  var timeEvent = $(this).parent().attr("id");
  console.log(timeEvent);
  localStorage.setItem(timeEvent, newEvent);
});


//function to load values on refresh
$(" #9_am .notes").val(localStorage.getItem("9_am"));
$(" #10_am .notes").val(localStorage.getItem("10_am"));
$(" #11_am .notes").val(localStorage.getItem("11_am"));
$(" #12_pm .notes").val(localStorage.getItem("12_pm"));
$(" #1_pm .notes").val(localStorage.getItem("1_pm"));
$(" #2_pm .notes").val(localStorage.getItem("2_pm"));
$(" #3_pm .notes").val(localStorage.getItem("3_pm"));
$(" #4_pm .notes").val(localStorage.getItem("4_pm"));
$(" #5_pm .notes").val(localStorage.getItem("5_pm"));
})