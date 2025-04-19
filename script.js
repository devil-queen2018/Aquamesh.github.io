// Function to handle login
function login() {
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (email && password) {
        document.getElementById('loginPage').classList.add('hidden');
        document.getElementById('welcomePage').classList.remove('hidden');
    } else {
        alert("Enter valid email and password!");
    }
}

// Function to navigate to purpose page
function goToPurpose() {
    document.getElementById('welcomePage').classList.add('hidden');
    document.getElementById('purposePage').classList.remove('hidden');
}

// Function to display weather forecast
function showWeather() {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('weatherPage').classList.remove('hidden');

    let weatherTypes = ["☀️ Sunny", "🌤️ Partly Cloudy", "🌥️ Cloudy", "🌧️ Rainy", "🌩️ Stormy"];
    let randomWeather = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];

    document.getElementById('weatherData').innerText = `Current Weather: ${randomWeather}`;
}

// Function to check water storage capacity
function showStorage() {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('storagePage').classList.remove('hidden');
}

function checkStorage() {
    let capacity = parseInt(document.getElementById('waterCapacity').value);
    let result = "";

    if (capacity >= 0 && capacity <= 250) {
        result = "Amount of water is only sufficient for gardening and cleaning.";
    } else if (capacity > 250 && capacity <= 1000) {
        result = "Amount of water is sufficient for gardening, cleaning, and flushing.";
    } else if (capacity > 1000 && capacity <= 2000) {
        result = "Amount of water is fully sufficient for all activities.";
    } else {
        result = "Invalid input! Enter a value between 0 and 2000.";
    }

    document.getElementById('storageResult').innerText = result;
}

// Function to determine water distribution ratio
function showDistribution() {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('distributionPage').classList.remove('hidden');
}

function checkAllocation(type) {
    let percentage = Math.floor(Math.random() * 101);
    let message = percentage <= 30 ? "Percentage allocated is clear. No over allocation." : "Water allocation is abundant – kindly check it!";
    
    document.getElementById('distributionResult').innerText = `${type} allocation: ${percentage}% - ${message}`;
}

// Function to check tank security alerts
function showAlerts() {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('alertsPage').classList.remove('hidden');
}

function checkTank() {
    let liters = Math.floor(Math.random() * 2001);
    let message = liters < 1000 ? "Storing water successfully! ✅" :
                  liters < 1800 ? "Tank is about to fill! ⚠️" :
                  "ALERT! Tank is overfilled! 🔴";

    document.getElementById('tankStatus').innerText = `Current Tank Level: ${liters}L - ${message}`;
}

// Function to go back to purpose page
function goBackToPurpose() {
    document.getElementById('weatherPage').classList.add('hidden');
    document.getElementById('storagePage').classList.add('hidden');
    document.getElementById('distributionPage').classList.add('hidden');
    document.getElementById('alertsPage').classList.add('hidden');
    document.getElementById('purposePage').classList.remove('hidden');
}