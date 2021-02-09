class UI{
    constructor(){
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.tempreture = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    displayWeather(location, country, heading, description, tempreture, icon, humidity, dew, feelsLike, windSpeed){
        this.location.innerHTML = `${location}, ${country}`;
        this.description.innerHTML = `${heading}: ${description}`;
        this.tempreture.textContent = tempreture + "℃";
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);
        this.humidity.textContent = `Humidity: ${humidity}`;
        this.dewpoint.textContent = `Dew Point: ${dew}`;
        this.feelsLike.textContent = `Feels Like: ${feelsLike}`;
        this.wind.textContent = `Wind Speed: ${windSpeed}`;
    }
}