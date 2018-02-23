'use strict';

Information.customerInfo = [];

function Information (firstName, lastName, street, city, state, zipCode, phoneNumber, emailAddy) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zipCode = zipCode;
  this.phoneNumber = phoneNumber;
  this.emailAddy = emailAddy;
  Information.customerInfo.push(this);
}

Information.infoForm = document.getElementById('personalInfo');

function handleSubmitForm(event) {
  event.preventDefault();

  var firstName = event.target.first.value;
  var lastName = event.target.last.value;
  var street = event.target.address.value;
  var city = event.target.town.value;
  var state = event.target.st.value;
  var zipCode = event.target.zip.value;
  var phoneNumber = event.target.number.value;
  var emailAddy = event.target.email.value;

  new Information(firstName, lastName, street, city, state, zipCode, phoneNumber, emailAddy);

  event.target.reset();

  localStorage.setItem('customerInfoArray', JSON.stringify(Information.customerInfo));

  window.open('cart.html');
}

if (!localStorage) {
  var retrieveData = localStorage.getItem('customerInfoArray');
  Information.customerInfo = JSON.parse(retrieveData);
}

Information.infoForm.addEventListener('submit', handleSubmitForm);