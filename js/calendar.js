const date = new Date();
const dateDiv = document.getElementById("currentDate");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const month = months[date.getMonth()]
const day = date.getDate();
const year = date.getFullYear();

const result = `${day}/${month}/${year}`;
dateDiv.innerHTML = result;