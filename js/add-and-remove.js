//Set up the object
var hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77
};

hotel.gym = false;
hotel.pool = true;
delete hotel.booked;

//Update the HTML
var elName = document.getElementById('hotelName'); //Get element
elName.textContent = hotel.name;

var elPool = document.getElementById('pool');
elPool.className = hotel.pool;

var elGym = document.getElementById('gym');
elGym.className = hotel.gym;