(function () {

    //Create a hotel object using objec literal syntax
    var hotel = {
        name: 'Posh',
        roomRate: 240, // Amount in dollars
        discount: 15, // Perentage discount
        offerPrice: function () {
            var offerRate = this.roomRate * ((100 - this.discount) / 100);
            return offerRate;
        }
    };

    //Write out the hotel name, standard rate, and the special rate
    var hotelName, roomRate, specialRate;
    hotelName = document.getElementById('hotelName');
    roomRate = document.getElementById('roomRate');
    specialRate = document.getElementById('specialRate');

    hotelName.textContent = hotel.name; //Write hotel name
    roomRate.textContent = '$' + hotel.roomRate.toFixed(2); //Write room rate
    specialRate.textContent = '$' + hotel.offerPrice();

    var expiryMsg; //Msg displayed to user
    var today; //Today's date
    var elEnds; //The element that shows the message about the offer ending
    function offerExpires(today) {
        var weekFromToday, day, date, month, year, dayNames, monthNames;
        //Add 7 days time ( added i milliseconds)
        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        //Create arrays to hold the names of days and months
        dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        monthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novemeber', 'December'];

        //Collect the parts of the date to show on page
        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        //Create the message
        expiryMsg = 'Offer expires next ';
        expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
        return expiryMsg;
    }

    today = new Date();
    elEnds = document.getElementById('offerEnds');
    elEnds.innerHTML = offerExpires(today);
    //Finish the immediately invoked function
}());