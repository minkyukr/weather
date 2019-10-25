var searchedCitiesList = document.querySelector('#searchedCities');
var fiveDaysResult = document.querySelector('fiveDaysResult');
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var today = moment().format('MMM Do YY');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var searchedCity = document.querySelector('#searchedCity').value;
    var resultCity = document.createElement('button');
    resultCity.setAttribute('class', 'collection-item');
    resultCity.append(searchedCity);
    searchedCitiesList.append(resultCity);

    function displayTodayResult() {
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
        cityHeader.textContent += 'City of ' + searchedCity + ' ' + today;
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

    function displayFollowingDays() {
            var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + searchedCity + '&units=imperial&appid=' + APIKey;

            $.ajax({
                url: queryURL,
                method: 'GET'
            })
            .then(function(response) {
            var dayOne = document.querySelector('.dayOne');
            var dayTwo = document.querySelector('.dayTwo');
            var dayThree = document.querySelector('.dayThree');
            var dayFour = document.querySelector('.dayFour');

            dayOne.textContent += 'Temperature: ' + response.list[0].main.temp + ' ' + 'Humidity: ' + response.list[0].main.humidity;
            dayTwo.textContent += 'Temperature: ' + response.list[1].main.temp + ' ' + 'Humidity: ' + response.list[1].main.humidity;
            dayThree.textContent += 'Temperature: ' + response.list[2].main.temp + ' ' + 'Humidity: ' + response.list[2].main.humidity;
            dayFour.textContent += 'Temperature: ' + response.list[3].main.temp + ' ' + 'Humidity: ' + response.list[3].main.humidity;
            })
    }
    displayTodayResult();
    displayFollowingDays();

    resultCity.addEventListener('click', function() {
        
        displayTodayResult();
        displayFollowingDays();
    })
})


