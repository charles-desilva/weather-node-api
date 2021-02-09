class Weather{
    constructor(city, state){
        this.apiKey = 'f36de2b99953279a4712e3b80853ba3b';
        this.city = city;
        this.state = state;

    }
    async getWeather(){
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
       // console.log(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}&units=metric`);
        const responseData = await response.json();
        return responseData;
    }

    changeLocation(city, state){
        this.city = city;
        this.state = state;
        
    }

}