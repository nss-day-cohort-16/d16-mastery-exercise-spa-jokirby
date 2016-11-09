"use strict";

var CarLot = (function(oldCarLot) {
  let inventory = [];

  oldCarLot.updateDFocus = function(id) {
    document.getElementById("textInput").focus();
    let elements = document.getElementsByClassName("blackBorder");
    while(elements.length > 0){
        elements[0].classList.toggle("blackBorder");
      }
    document.getElementById(id).classList.toggle("blackBorder");
  };

   return oldCarLot;


})(CarLot || {});
  