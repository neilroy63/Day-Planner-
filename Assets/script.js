// using Moment.js to display today's date and time
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY, h:mm:ss a"));

// using moment js for the current time
var currentTime = moment()


// 9 AM Code Block


// 10 AM

// 11 AM

// 12 PM

// 1 PM

// 2 PM

// 3 PM

// 4 PM

// 5 PM


// // 2. What is the day of the week today?
// var dayWeek = today.format("[Today is] dddd")
// $("#2a").text(dayWeek);

// // 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
// var reformatDate = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY, h:mm:ss a");
// $("#3a").text(reformatDate);

// // 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// var weekNum = today.format("w");
// var takeOut;
// // Check odd, then assign boolean
// if(weekNum % 2) {
//   takeOut = true;
// } else {
//   takeOut = false;
// }

// $("#4a").text(takeOut + ", because it's currently week " + weekNum);
