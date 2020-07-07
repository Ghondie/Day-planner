//moment import var
const m = moment();

// var for save button
var text;
var hourI;
// first test making sure moment is workin
console.log(m.format("dddd, MMMM Do"))

// format we need for this app
$("#currentDay").text(m.format("dddd, MMMM do"))

// inital functions
// need to change color based on what time it is
// need to save to local storage
// need to autopdate using moment

$(document).ready( function(){
    colorShift
    changeText
});

function colorShift (){
    //defining current time
    var realTime = moment().hours();
    console.log("Current time" + realTime);
// need to do for loop for past and future
