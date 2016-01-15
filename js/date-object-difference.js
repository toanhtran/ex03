//Create a variable to hold a new Data object (defaults to now)

var today = new Date();
//Get the year this year
var year = today.getFullYear();
//Set the date that the company was established
var est = new Date('June 16, 1998 06:09:55');
//Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
//Divide by number of milliseconds to get years
difference = (difference / 31556900000);
//Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById('message');
//Write the message into that element.
elMsg.textContent = Math.floor(difference) + ' years of online travel advice';