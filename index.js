var animal = 'dog'

function myAnimal() {
  // You should not need to modify this function
  return animal
}

function yourAnimal() {
  var animal
  animal = "cat"
  return animal
}

function add2(n) {
  return n + 2

  // Feel free to move things around
}


function funkyFunction() {
  return function() {
  return "FUNKY!"
  }
}

var theFunk = funkyFunction()

theFunk()