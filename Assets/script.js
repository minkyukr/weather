var searchedCitiesList = document.querySelector('#searchedCities');

searchBtn.addEventListener('click', function(event) {
    event.preventDefault();
    var searchedCity = document.querySelector('#searchedCity').value;
    var resultCity = document.createElement('li');
    resultCity.setAttribute('class', 'collection-item');
    resultCity.append(searchedCity);
    searchedCitiesList.append(resultCity);
})

