// Display current year and last modified date
document.getElementById('current-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
  if (temp <= 10 && windSpeed > 4.8) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2) + "°C";
  } else {
    return "N/A";
  }
}

// Static values for temperature and wind speed
const temp = parseFloat(document.getElementById('temp').textContent);
const windSpeed = parseFloat(document.getElementById('wind-speed').textContent);

// Display wind chill
document.getElementById('wind-chill').textContent = calculateWindChill(temp, windSpeed);