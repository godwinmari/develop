function getWeather() {
    var city = document.getElementById("cityInput").value;
    var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "f00c38e0279b7bc85480c3fe775d518c";
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        showWeather(data);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  }
  
  function showWeather(data) {
    var weatherResults = document.getElementById("weatherResults");
  
    if (data.cod === "404") {
      weatherResults.innerHTML = "City not found";
    } else {
      var temperature = data.main.temp;
      var description = data.weather[0].description;
  
      weatherResults.innerHTML = "Temperature: " + temperature + " K<br>Description: " + description;
    }
  }