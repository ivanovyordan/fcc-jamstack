function success(position) {
  const coords = position.coords;

  const url = `/.netlify/functions/weatherapi?lat=${coords.longitude}&lon=${coords.longitude}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#city").textContent = data.name;
      document.querySelector("#temp").textContent = data.main.temp + "°C";
      document.querySelector("#main").textContent = data.weather[0].main;
      document.querySelector("#desc").textContent = data.weather[0].description;

      document.querySelector("#weather").classList.remove("hidden");
    });
}

function error(error) {
  console.log(`Error(${error.code}): ${error.message}`);
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, error);
}
