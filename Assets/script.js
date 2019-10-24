var searchedCitiesList = document.querySelector('#searchedCities');


searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var searchedCity = document.querySelector('#searchedCity').value;
    var resultCity = document.createElement('li');
    resultCity.setAttribute('class', 'collection-item');
    resultCity.append(searchedCity);
    searchedCitiesList.append(resultCity);

    function displayTodayResult() {
        var APIKey = "166a433c57516f51dfab1f7edaed8413";
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + '&units=imperial&appid=' + APIKey;

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .then(function(response) {
        var searchResult = document.createElement('ul');
        searchResult.setAttribute('class', 'todayWeather collection with-header');

        var cityHeader = document.createElement('li');
        var temperature = document.createElement('li');
        var humidity = document.createElement('li');
        var windSpeed = document.createElement('li');

        cityHeader.setAttribute('class', 'collection-header');
        cityHeader.textContent += 'City of ' + searchedCity + ' ' + moment().format('MMM Do YY');
        temperature.setAttribute('class', 'collection-item');
        temperature.textContent += 'Temperature: ' + response.main.temp;
        humidity.setAttribute('class', 'collection-item');
        humidity.textContent += 'Humidy: ' + response.main.humidity;
        windSpeed.setAttribute('class', 'collection-item');
        windSpeed.textContent += 'Wind Speed: ' + response.wind.speed;

        searchResult.append(cityHeader, temperature, humidity, windSpeed);
        batmanWeather.replaceWith(searchResult);
        })
    }
    displayTodayResult();
})


