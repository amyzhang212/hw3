function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
 
  console.log(ride)

  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

// levelOfService

if (ride.length>1) {levelOfService = 'Noober Pool'}
else if (ride[0].purplerequested == true) {levelOfService = 'Noober Purple'}
else if (ride[0].numberOfPassenger>3) {levelOfService = 'Noober XL'}
else {levelOfService = 'Noober X'}

// one rider 

passenger1Name = {ride[0].passengerDetails.first, ride[0].passengerDetails.last},
passenger1Phone = ride[0].passengerDetails.phoneNumber,
passenger1NumberOfPassengers = ride[0].numberOfPassenger,
passenger1PickupAddressLine1 = ride[0].pickupLocation.address,
passenger1PickupAddressLine2 = {ride[0].pickupLocation.address.city, ride[0].pickupLocation.address.state, ride[0].pickupLocation.address.zip}

// two riders

passenger1Name = {ride[1].passengerDetails.first, ride[1].passengerDetails.last},
passenger1Phone = ride[1].passengerDetails.phoneNumber,
passenger1NumberOfPassengers = ride[1].numberOfPassenger,
passenger1PickupAddressLine1 = ride[1].pickupLocation.address,
passenger1PickupAddressLine2 = {ride[1].pickupLocation.address.city, ride[0].pickupLocation.address.state, ride[0].pickupLocation.address.zip}

// three riders 
passenger1Name = {ride[2].passengerDetails.first, ride[2].passengerDetails.last},
passenger1Phone = ride[2].passengerDetails.phoneNumber,
passenger1NumberOfPassengers = ride[2].numberOfPassenger,
passenger1PickupAddressLine1 = ride[2].pickupLocation.address,
passenger1PickupAddressLine2 = {ride[2].pickupLocation.address.city, ride[2].pickupLocation.address.state, ride[2].pickupLocation.address.zip}

// passenger1Name, passenger1Phone, passenger1NumberOfPassengers
// passenger1PickupAddressLine1, passenger1PickupAddressLine2
// passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
// passenger2Name, passenger2Phone, passenger2NumberOfPassengers
// passenger2PickupAddressLine1, passenger2PickupAddressLine2
// passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
// passenger3Name, passenger3Phone, passenger3NumberOfPassengers
// passenger3PickupAddressLine1, passenger3PickupAddressLine2
// passenger3DropoffAddressLine1, passenger3DropoffAddressLine2

  
 


  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}