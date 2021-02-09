city = document.getElementById('city');
country = document.getElementById('country');
const storage = new Storage();
const locationDatate = storage.getStoredLocation();
const weather = new Weather(locationDatate.city, locationDatate.country);
const ui = new UI();


storage.getStoredLocation();
updateWeather();

document.getElementById('w-change-btn').addEventListener('click',()=>{
    weather.changeLocation(city.value, country.value);
    storage.setLocation(city.value, country.value);
    //storage.getStoredLocation(city.value, country.value);
    updateWeather();
    $('#locModal').modal('hide');
});

function updateWeather(){
    weather.getWeather().then((data)=>{
        ui.displayWeather(
        data.name,
        data.sys.country,
        data.weather[0].main,
        data.weather[0].description,
        data.main.temp,
        data.weather[0].icon,
        data.main.humidity,
        data.main.humidity,
        data.main.feels_like,
        data.wind.speed

    );
    console.log(data.sys.country);
    });
    
}
