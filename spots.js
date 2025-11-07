
const urlParams = new URLSearchParams(window.location.search);
const cityName = urlParams.get("city");

const city = cities.find(c => c.name.toLowerCase() === cityName.toLowerCase());

const container = document.getElementById("spotsContainer");

function searchSpot() {
  const input = document.getElementById("spotSearch").value.toLowerCase();
  const filteredSpots = city.spots.filter(s => s.name.toLowerCase().includes(input));
  
  const container = document.getElementById("spotsContainer");
  container.innerHTML = "";

  if (filteredSpots.length === 0) {
    container.innerHTML = `<p style="color:#666;">No spots found.</p>`;
    return;
  }

  filteredSpots.forEach(spot => {
    container.innerHTML += `
      <div class="spot-card" onclick="openSpotDetails('${city.name}', '${spot.name}')">
        <img src="${spot.img}" alt="${spot.name}">
        <h2>${spot.name}</h2>
        <p> ${spot.location}</p>
        <p> ${spot.history}</p>
        <p> Food - ${spot.prices.food}, Activities - ${spot.prices.activities}, Transport - ${spot.prices.transport}</p>
      </div>
    `;
  });
}
function openSpotDetails(cityName, spotName) {
  window.location.href = `spot-details.html?city=${encodeURIComponent(cityName)}&spot=${encodeURIComponent(spotName)}`;
}


window.onload = function() {
  if (!city) {
    container.innerHTML = `<p style="color:#666;">City not found.</p>`;
    return;
  }

    city.spots.forEach(spot => {
    container.innerHTML += `
        <div class="spot-card" onclick="openSpotDetails('${city.name}', '${spot.name}')">
        <img src="${spot.img}" alt="${spot.name}">
        <h2>${spot.name}</h2>
        <p>${spot.location}</p>
        <p>${spot.history}</p>
        <p>Food - ${spot.prices.food}, Activities - ${spot.prices.activities}, Transport - ${spot.prices.transport}</p>
        </div>
    `;
    });


};
