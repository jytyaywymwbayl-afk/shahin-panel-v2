function toggleMenu() {

document.getElementById("sidebar").classList.toggle("active");

document.getElementById("overlay").classList.toggle("active");

}

// داده‌ها

let users = JSON.parse(localStorage.getItem("users")) || [];

updateDashboard();

function updateDashboard(){

document.getElementById("usersCount").innerHTML = users.length;

document.getElementById("configsCount").innerHTML = users.length;

document.getElementById("activeCount").innerHTML = users.length;

}

function saveUsers(){

localStorage.setItem("users",JSON.stringify(users));

updateDashboard();

}

// تست

console.log("Shahin Panel Loaded");
