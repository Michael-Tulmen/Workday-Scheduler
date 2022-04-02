//1st recognize that I've made time blocks for each hour from 8 to 5, I need the ability to save that to local storage when the user clicks on the save button


// add a variable to measure the exact time of day and date so that the program can remember at top of page
var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentTime);

// we need to have a now to get access to the right time blocks, AKA in the process of altering the time blocks to get the right time
var timeBlock = $(".hour")
var now = parseInt(moment().format("H"));

// Next a function to check if the hour is past present or not reached yet, in order to make the correct blocks accessible once again
$.each(timeBlock, function (i, hour) {
    var hourId = parseInt($(this).attr("id"));
    if (hourId === now) {
      $(this).next().addClass("present");
    } else if (hourId < now) {
      $(this).next().addClass("past");
    } else if (hourId > now) {
      $(this).next().addClass("future");
    }
});

// the part where is saves events to local storage and persists through refreshes, fetches items from local storage

$(".saveBtn").on('click', function (event) {
    var calendarItem = event.target.parentElement.previousElementSibling.children[0].value;
    localStorage.setItem(event.target.attributes[0].value, calendarItem);
});

//ready function

$(document).ready(function () {
    if(localStorage["8am"] !== null && localStorage["8am"] !==undefined) {
        var eightAm = $("<p>" + localStorage["8am"] + "</p>");
        $("#eightAm").append(eightAm[0].innerText);
    } else {
        ("");
    }
    if(localStorage["9am"] !== null && localStorage["9am"] !== undefined) {
        var nineAm = $("<p>" + localStorage["9am"] + "</p>");
        $("#nineAm").append(nineAm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["10am"] !== null && localStorage["10am"] !== undefined) {
        var tenAm = $("<p>" + localStorage["10am"] + "</p>");
        $("#tenAm").append(tenAm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["11am"] !== null && localStorage["11am"] !== undefined) {
        var elevenAm = $("<p>" + localStorage["11am"] + "</p>");
        $("#elevenAm").append(elevenAm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["12pm"] !== null && localStorage["12pm"] !== undefined) {
        var twelvePm = $("<p>" + localStorage["12pm"] + "</p>");
        $("#twelvePm").append(twelvePm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["1pm"] !== null && localStorage["1pm"] !== undefined) {
        var onePm = $("<p>" + localStorage["1pm"] + "</p>");
        $("#onePm").append(onePm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["2pm"] !== null && localStorage["2pm"] !== undefined) {
        var twoPm = $("<p>" + localStorage["2pm"] + "</p>");
        $("#twoPm").append(twoPm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["3pm"] !== null && localStorage["3pm"] !== undefined) {
        var threePm = $("<p>" + localStorage["3pm"] + "</p>");
        $("#threePm").append(threePm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["4pm"] !== null && localStorage["4pm"] !== undefined) {
        var fourPm = $("<p>" + localStorage["4pm"] + "</p>");
        $("#fourPm").append(fourPm[0].innerText);
    } else {
        ("");
    }
      if(localStorage["5pm"] !== null && localStorage["5pm"] !== undefined) {
        var fivePm = $("<p>" + localStorage["5pm"] + "</p>");
        $("#fivePm").append(fivePm[0].innerText);
    } else {
        ("");
    }
});