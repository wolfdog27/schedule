// Global Variables
var now = moment().format("[Today is] dddd,  MMMM Do");  
var currentDay = $("#currentDay")
currentDay.text(now);

var textBox09 = $("#09");
var textBox10 = $("#10");
var textBox11 = $("#11");
var textBox12 = $("#12");
var textBox13 = $("#13");
var textBox14 = $("#14");
var textBox15 = $("#15");
var textBox16 = $("#16");
var textBox17 = $("#17");

var Btn09 = $("#09btn");
var Btn10 = $("#10btn");
var Btn11 = $("#11btn");
var Btn12 = $("#12btn");
var Btn13 = $("#13btn");
var Btn14 = $("#14btn");
var Btn15 = $("#15btn");
var Btn16 = $("#16btn");
var Btn17 = $("#17btn");

var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17]
var hoursEl = [textBox09, textBox10, textBox11, textBox12, textBox13, textBox14, textBox15, textBox16, textBox17]

// checking time against past, present, and future
var currentHour = moment().format("H");
for (var i=0; i<9; i++) {
    if (currentHour === hours[i]){
        $(hoursEl[i]).addClass("present")
    } else if (currentHour > hours[i]) {
        $(hoursEl[i]).addClass("past")
    } else {
        $(hoursEl[i].addClass("future"))
    }
}

var nineInfo = $(this).siblings("#09").val()
if (nineText !== undefined) {
    localStorage.setItem("nineText", nineInfo)
}

var nineText = localStorage.getItem("nineText")
$("#09").text(nineText);



// Clearning
$(Btn09).click(function() {
    textBox09.val("")
    localStorage.setItem("nineText", "")
}); 

$(Btn10).click(function() {
    textBox10.val("")
    localStorage.setItem("tenText", "")
});

$(Btn11).click(function() {
    textBox11.val("")
    localStorage.setItem("elevenText", "")
});

$(Btn12).click(function() {
    textBox12.val("")
    localStorage.setItem("twelveText", "")
});

$(Btn13).click(function() {
    textBox13.val("")
    localStorage.setItem("oneText", "")
});

$(Btn14).click(function() {
    textBox14.val("")
    localStorage.setItem("twoText", "")
});

$(Btn15).click(function() {
    textBox15.val("")
    localStorage.setItem("threeText", "")
});

$(Btn16).click(function() {
    textBox16.val("")
    localStorage.setItem("fourText", "")
});

$(Btn17).click(function() {
    textBox17.val("")
    localStorage.setItem("fiveText", "")
});










