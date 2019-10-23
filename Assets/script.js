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

