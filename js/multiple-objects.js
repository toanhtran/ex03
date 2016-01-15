// Create the template for objects that are hotels
function Hotel(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailabilty = function () {
        return this.rooms - this.booked;
    };
}

//create two hotel objects
var quayHotel = new Hotel('Quay', 40, 25);
var parkHotel = new Hotel('Park', 120, 77);

//Update the HTML for the page
var details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailabilty();
var elHotel1 = document.getElementById('hotel1');
elHotel1.textContent = details1;

var details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailabilty();
var elHotel2 = document.getElementById('hotel2');
elHotel2.textContent = details2;