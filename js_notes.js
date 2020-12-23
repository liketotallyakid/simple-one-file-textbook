// Dragos Ionita - The JS Book

// variables
// all global variables become properties of the window object

var _integer = 101;
var _boolean = true;
var _string = "this is a string!";

// arrays

var _array;
_array = ["item 1", "item 22", "item 3"];

// accessing & changing items in array

var _itemOne = _array[0];
_array[1] = "item 2";

var _arrayLength = _array.length;

// access elements on HTML page

var _theElement = document.getElementById("theElement");
_theElement.textContent = "the element's text has been changed";

// ⚡️ functions ⚡️

function sayHello(){
    document.write("Hello!");
}
sayHello();

// functions with parameters and return value

function getArea(_width, _height){
    return _width * _height;
}
getArea(9, 3);

// 🧊 objects 🧊

// literal notation
var hotel = {

    // function properties
    name: "Quay",
    rooms: 28,
    booked: 19,

    // function method
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

// dot notation accessing
var _roomsFree = hotel.checkAvailability();

// square bracket syntax
var _hotelName = hotel['name'];

// constructor notation

function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.boooked = booked;

    this.checkAvailability = function() {
        return this.rooms - this.booked;
    }
}

var _parkHotel = new Hotel("Park", 71, 28);

// adding properties to object
_parkHotel.gym = false;
_parkHotel.pool = true;

// deleting properties of object
delete _parkHotel.gym;

// you can store objects in arrys
// and you can store arrays in objects

/* -- Three Main Build In Object Types */

// 1. BOM The Browser Object Model
// BOM properties
window.innerHeight;
window.screen.width;
window.history;

// BOM methods
window.alert();
window.open();

// 2. DOM The Document Object Model
// DOM properties
document.title;
document.domain;

// DOM methods
document.write();
document.getElementById();
document.createElement();

// 3. Global Objects
// Strings, Arrays are all objects

var _saying = "Home sweet home ";

// String Properties
_saying.length;

// String Methods
_saying.toUpperCase();
_saying.split();

// there are six data types
/* 
Primitive Data Types
1. String
2. Number
3. Boolean
4. Undefined - a variable that is declared, but no value assigned yet
5. Null - variable with no value

Complex Data Type
6. Object - arrays and functions
*/

// Global Objects
// number object
// math object
Math.random();

// creating instance of object

var _today = new Date();
_today.getDay();