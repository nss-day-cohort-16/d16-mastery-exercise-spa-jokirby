"use strict";

var CarLot = (function(oldCarLot) {
  var inventory = [];


  oldCarLot.loadInventory = function(callBackFn) {
     let inventoryLoader = new XMLHttpRequest();
     inventoryLoader.open("GET", "../inventory.json");
     inventoryLoader.send();

     inventoryLoader.addEventListener("load", function () {
     let carDataArray = JSON.parse(this.responseText).cars;
     callBackFn(carDataArray);
     });
   };

  oldCarLot.jsonCars = function(carData) {
    for (var key in carData) {
      inventory.push(carData[key]);
    }
      oldCarLot.populatePage(inventory);
  };

  oldCarLot.getInventory = function () {
    return inventory;
  };

  oldCarLot.setInventory = function (newInventory) {
    newInventory = inventory;
  };
   
   return oldCarLot;


})(CarLot || {});
  

