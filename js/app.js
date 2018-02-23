'use strict';

// var names = ['r2d2', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'duck-nose', 'dragon-meat', 'pen', 'baby-sweeper', 'scissors', 'shark', 'pet-sweeper', 'sauntaun', 'unicorn-meat', 'tentacle', 'watering-can', 'wine-glass'];

var selectionTable = document.getElementById('selectionTable');

Order.productsChosen = [];

function Order (name, quantity) {
  this.name = name;
  this.quantity = quantity;
  Order.productsChosen.push(this);
}

Order.prototype.render = function() {
  var trEl = document.createElement('tr');
  var tdEl = document.createElement('td');
  tdEl.textContent = this.name;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.quantity;
  trEl.appendChild(tdEl);

  selectionTable.appendChild(trEl);
};

function makeSelectionRows() {
  for (var i = 0; i < Order.productsChosen.length; i++) {
    Order.productsChosen[i].render();
  }
}

makeSelectionRows();

var entryForm = document.getElementById('orderSelection');

function handleSelection(event) {
  event.preventDefault();

  var name = event.target.title.value;
  var quantity = event.target.number.value;

  if (!quantity || !name) {
    return alert('Fields cannot be empty!');
  }

  new Order(name, quantity);
  selectionTable.innerHTML = '';

  event.target.reset();
  makeSelectionRows();
}

entryForm.addEventListener('submit', handleSelection);