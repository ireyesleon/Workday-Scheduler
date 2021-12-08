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

$(".row").each(function() {
var rowsHour = parseInt($(this).attr("id"));
console.log(rowsHour)

if (rowsHour < hour) {
  $( this ).removeClass( "present" );
  $( this ).removeClass( "future" );
  $( this ).addClass( "past" );
}
else if (rowsHour === hour) {
  $( this ).removeClass( "past" );
  $( this ).removeClass( "future" );
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
  var timeEvent = $(this).parent().attr("id");
  localStorage.setItem(timeEvent, newEvent);
});


//function to load values on refresh
$(" #9 .notes").val(localStorage.getItem("9"));
$(" #10 .notes").val(localStorage.getItem("10"));
$(" #11 .notes").val(localStorage.getItem("11"));
$(" #12 .notes").val(localStorage.getItem("12"));
$(" #13 .notes").val(localStorage.getItem("13"));
$(" #14 .notes").val(localStorage.getItem("14"));
$(" #15 .notes").val(localStorage.getItem("15"));
$(" #16 .notes").val(localStorage.getItem("16"));
$(" #17 .notes").val(localStorage.getItem("17"));
})