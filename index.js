let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;

class Driver {
  constructor (name){
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
  trips(){
    return store.trips.filter(driver => {
      return driverId === this.id;
    })
  }

  passengers(){
    return store.passengers.filter(passenger =>{
      return driverId === this.id;
    })
  }

}

let passengerId = 0;

class Passenger {
  constructor (name){
    this.name = name;
    this.id = ++passengerId;

    store.passengers.push(this);
  }
  trips(){
    return store.trips.filter(passenger => {
      return passengerId = this.id;
    })
  }

  drivers(){
    return store.drivers.filter(driver => {
      return passengerId = this.id;
    })
  }

}

let tripId = 0;

class Trip {
  constructor (driver, passenger){
    //this.driver = driver;
    //this.passenger = passenger;
    this.id = ++tripId;
    this.driverId = driver.id;
    this.passengerId = passenger.id;

    store.trips.push(this);
  }
  passenger(){
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId;
    })
  }


  driver(){
    return store.drivers.find(driver => {
      return driver.id === this.driverId;
    })
  }

}
