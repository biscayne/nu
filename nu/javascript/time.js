"use strict";

var currently = new Date();

var currentWeekday = whichWeekday(currently.getDay());
var currentDayOfMonth = currently.getDate();
var hr = currently.getHours();
var mi = currently.getMinutes();
if (mi < 10) {
    mi = "0" + mi;
}
var currentTime = hr + ":" + mi + " uur";

function whichWeekday(day) {
  switch (day) {
      case 0:
          day = "Zondag";
          break;
      case 1:
          day = "Maandag";
          break;
      case 2:
          day = "Dinsdag";
          break;
      case 3:
          day = "Woensdag";
          break;
      case 4:
          day = "Donderdag";
          break;
      case 5:
          day = "Vrijdag";
          break;
      case 6:
          day = "Zaterdag";
  };

  return day;
};

function whichMonth(month) {
  switch (month.getMonth()) {
      case 0:
          month = "januari";
          break;
      case 1:
          month = "februari";
          break;
      case 2:
          month = "maart";
          break;
      case 3:
          month = "april";
          break;
      case 4:
          month = "mei";
          break;
      case 5:
          month = "juni";
          break;
      case 6:
          month = "juli";
          break;
      case 7:
          month = "augustus";
          break;
      case 8:
          month = "september";
          break;
      case 9:
          month = "oktober";
          break;
      case 10:
          month = "november";
          break;
      case 11:
          month = "december";
          break;
  };

  return month;
};

function formatDateWithLeadingZero(date) {
  var month = date.getMonth();
  var day = date.getDate();

  if (month < 9) {
    month = "0" + (month + 1);
  } else {
    month = month + 1;
  };

  if (day <= 9) {
    day = "0" + day;
  };

  var formatted_date = month + "/" + day + "/" + date.getFullYear();
  return formatted_date;
};

// Getting the day # of the year taking leap years into account
function isLeapYear(date) {
  var year = date.getFullYear();
  if((year & 3) != 0) return false;
  return ((year % 100) != 0 || (year % 400) == 0);
};

function getDayOfYear(date) {
  var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
  var mn = date.getMonth();
  var dn = date.getDate();
  var dayOfYear = dayCount[mn] + dn;
  if(mn > 1 && isLeapYear(date)) dayOfYear++;
  return dayOfYear;
};

function numberOfDaysInYear(date) {
  if (isLeapYear(date)) {
    return "366";
  } else {
    return "365";
  };
};

$(document).ready(function() {
  console.log("Hiya! Let's do this thing.");
  $('#year').attr("data-bg-text", currently.getFullYear());
  $('#time').html(currentTime);
  $('#month_day').html(currentDayOfMonth + " " + whichMonth(currently));
  $('#day_of_week').html(currentWeekday);
  $('#us_formatted_date').html(formatDateWithLeadingZero(currently));
  $('#day_of_year').html("#" + getDayOfYear(currently) + "/" + numberOfDaysInYear(currently));
  $('#loaded_date span').html(currently);
});
