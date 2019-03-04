"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

    Author: Jose Felix
    Date:   2.28.19
   
   Filename: hg_report.js
	
*/
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By: " + itemManufacturer + "</h2> <img src='hg_" + itemID + ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr>  <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

document.getElementsByTagName('article')[0].innerHTML = gameReport;

// var ratingsSum is the start for the variable
var ratingsSum = 0;
// this is to work inside the for loop
var ratingsCount = ratings.length;

// this is the loop to make the amount of ratings get modified by the ratings[i]
for(var i = 0; i <= ratingsCount; i++) {
    ratingsSum += ratings[i];
}
// ratingsAvg is the variable that is holding the ratingssum / ratingscount. This will help you get to the average number of stars
var ratingsAvg = ratingsSum / ratingsCount;
// rating report is set to a value that is run for the customer review code. It alters the text to make it personal per case.
var ratingReport = "<h1>Customer Reviews</h1> <h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";
// ratings arrays are given the [i] value so that the loop will run through that number of indicators
for(var i = 0; i <= 2; i++) {
    // += makes something add to something so you can end he code, and in this case you add the arrays for this item
    ratingReport += "<div class='review'> <h1>" + ratingTitles[i] + "</h1> <table> <tr><th>By</th><td>" + ratingAuthors[i] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[i] + "</td></tr> <tr><th>Rating</th><td>";
    // you need to change the value of i to j because the loops are related and the code can be confused if they are the same values. It ends at ratings[i] so that it could be made new to add the amount of stars necessary
    for(var j = 1; j <= ratings[i]; j++) { 
        ratingReport += "<img src='hg_star.png' />";
    }
    // this is to call back the ratingReport with the ending tag and rating summary
    ratingReport += "</td></tr></table> " + ratingSummaries[i] + "</div>";
}
// this is the end of the code to pull the tagname code and get the innerHTML to equal what everything before has been added with by using += earlier.
document.getElementsByTagName('aside')[0].innerHTML = ratingReport;
