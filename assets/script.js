//moment import var
// format we need for this app
// var m = moment();
var currentDay = $("#currentDay").text(moment().format("dddd, MMMM do"))
moment().format("MMMM Do YYYY, h:mm:ss a ");

var date = new Date();
var hours = date.getHours();


// var for save button
var text;
var hourI;
// first test making sure moment is workin
// console.log(m.format("dddd, MMMM Do"))



// inital functions
// need to change color based on what time it is
// need to save to local storage
// need to autopdate using moment

// $(document).ready( function(){
//     colorShift
//     changeText
// });

// function colorShift (){
//     //defining current time
//     var realTime = moment().hours();
//     console.log("Current time" + realTime);

// // need to do for loop for past and future
// cant figure out that coude need to to if loop

$(".time-block").each(function(){
    var currentTime = $(this).attr("data-time")
    if (hours > currentTime){
        $(this).css("background-color", "yellow");
    } else if (hours < currentTime){
        $(this).css("background-color", "green");
    } else {
        $(this).css("background-color", "white")
    }
});