function theCars(make, year, plate) {
    this.make = make;
    this.year = year;
    this.plate = plate;
    this.parked = false;
}
var tesla = new theCars('tesla', 2017, '1');


var collectionOfCars = [];
var lot = [];
var vehicles = ["tesla", "toyoda", "chevy", "ford", "honda"];
var carYears = [2012, 2013, 2014, 2015, 2016];

function buildCars(carnumber) {
	var result = [];
    for (var i = 0; i < carnumber; i++) {
        var makeIndex = i % vehicles.length;
        var make = vehicles[makeIndex];
        var yearIndex = i % carYears.length;
        var year = carYears[yearIndex];
        var parked = false;
        result.push(new theCars(make, year, i));
    }
    return result;
}
collectionOfCars = buildCars(100);
console.log(collectionOfCars);

function makeLot(spaces) {
    this.spaces = spaces;
    this.empty = false;
}
var parkingSpot = new makeLot(1);
console.log(parkingSpot)

function parkTheCar(theCars, spaces, carIndex, spaceIndex) {
    theCars.parked = true;
    spaces.empty = false;
    collectionOfCars.shift(carIndex, 1);
    lot.push(theCars);

}

var collectionOfParkingSpaces = [];
for (var i = 0; i < 10; i++) {
    collectionOfParkingSpaces.push(new makeLot(i));


}
console.log(collectionOfParkingSpaces);

for (i = 0; i < collectionOfCars.length; i++) {
    for (j = 0; j < collectionOfParkingSpaces.length; j++) {
        if (collectionOfCars[i].parked === false && collectionOfParkingSpaces[j].empty === true) {
            parkTheCar(collectionOfCars[i], collectionOfParkingSpaces[j], i, j);


        }
    }
}