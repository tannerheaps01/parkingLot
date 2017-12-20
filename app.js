function theCars(make, year, plate) {
    this.make = make;
    this.year = year;
    this.plate = plate;
}
var tesla = new theCars('tesla', '2017', '1');
var collectionOfCars = [];
var lot = [];
var vehicles = ["tesla", "toyoda", "chevy", "ford", "honda"];
var carYears = [2012, 2013, 2014, 2015, 2016];

function makeCars(numberOfCars) {
    for (i = 0; i < numberOfCars; i++) { 
        var makeIndex = i%vehicles.length;
		var make = vehicles[makeIndex];
		var yearIndex = i%carYears.length;
		var year = carYears[yearIndex];
		collectionOfCars.push(new theCars(make, year, i));
    }
    console.log(collectionOfCars);
    
}
makeCars(101);
function getNextAvailableCar(){
	var waitingCar = collectionOfCars.pop();
	console.log(waitingCar);
	return waitingCar;
}
function parkCar(car){
 lot.push(car);
} 
var car = getNextAvailableCar();
parkCar(car);
console.log(lot)
function parkingLotAttendant(){
	if(lot > 10){
		lot = 7;
	}
}
parkingLotAttendant();


