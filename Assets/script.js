var searchedCitiesList = document.querySelector('#searchedCities');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var searchedCity = document.querySelector('#searchedCity').value;
    var resultCity = document.createElement('li');
    resultCity.setAttribute('class', 'collection-item');
    resultCity.append(searchedCity);
    searchedCitiesList.append(resultCity);
    
    // displayTodayResult(event)
})
    // function displayTodayResult() {
    //     var todayWeather = document.querySelector('.todayWeather');
    //     var cityWeather = document.createElement('div');
    //     cityWeather.setAttribute('class', 'col s12 m12');
    //     documn.innerHTML 
    // }
var APIKey = 'WGa2O3ILKBIKdLEWQ1vIR82ytZ5KtoBV'

var queryURL = 'http://dataservice.accuweather.com/locations/v1/topcities/150?apikey=' + APIKey;


//first need to find the location key.

var queryURL = 'http://dataservice.accuweather.com/forecasts/v1/daily/5day/226081?apikey=' + APIKey;
//second using that location key, plug in into 5day forecast.


var queryURL = "";

$.ajax({
    url: queryURL,
    method: 'GET'
})

