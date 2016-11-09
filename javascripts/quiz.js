"use strict";

var CarLot = (function(oldCarLot) {
  var inventory = [];


  oldCarLot.populatePage = function(inventoryData) {
    let newCar;
  for (var i = 0; i < inventoryData.length; i++) {
    inventory.push(inventoryData[i]);
    let make = inventoryData[i].make + " ";
    let model = inventoryData[i].model;
    let year = " (" + inventoryData[i].year + ")";
    let price = " - " + inventoryData[i].price;
    let description = inventoryData[i].description;
    newCar = document.createElement('div'); //li
    newCar.id = i;
    newCar.className = "carCard col-md-4";
    newCar.carInfo = inventoryData[i];

    newCar.innerHTML += "<span class = 'cardTitle'>" + make + model + year + price + "</span>" + "<br>" + "<span class='getDescription'>" + description + "<span>";

    document.getElementById("carOutput").appendChild(newCar);
    }
  };

/////////////////////---- EVENT LISTENERS -----//////////////////
let textInput = document.getElementById('textInput');
  textInput.disabled = true;

  document.querySelector("body").addEventListener("click", function(event) {  
    if (Number.isInteger(parseInt(event.target.parentElement.id)) === true) {
      textInput.disabled = false;
      textInput.value = "";
      oldCarLot.updateDFocus(event.target.parentElement.id);
    } else {
      return;
    }
  });

  textInput.addEventListener("keyup", function () {oldCarLot.instantAdd();});

/////////////////////---- UPDATE DESCRIPTION -----////////////////////
  oldCarLot.instantAdd = function () {
    if (textInput) {
  let currentCar = document.getElementsByClassName('blackBorder')[0].id;
     let grabDescription = document.getElementById(currentCar).querySelector(".getDescription");  
        grabDescription.innerHTML = textInput.value;
    } else {
      return;
    }
  };

/////////////////-- OPTIONAL/ Enter Key --///////////////////////
//     textInput.addEventListener("keypress", function(event) {
//       if (event.keyCode === 13) {
//         oldCarLot.updateDescriptionArray();
//         textInput.disabled = false;
//         return false;
//       }
// });

//    oldCarLot.updateDescriptionArray = function() {
//     let currentCar = document.getElementsByClassName('blackBorder')[0].id;
  
//     if (userInput) {
//     inventory[currentCar].description = userInput;
//       oldCarLot.setInventory(inventory);
//       oldCarLot.updateDFocus(currentCar);
//     } else {
//       alert("You must first select a car to update & then enter text in input.");
//     };
//   };

CarLot.loadInventory(oldCarLot.jsonCars);

   return oldCarLot;


})(CarLot || {});
  

