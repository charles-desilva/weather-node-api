class Storage{

    constructor(){
        this.city='';
        this.country='';
        //this.getStoredLocation();
    }

    setLocation(city, country){
        const locationData = {"city":city, "country":country};
        localStorage.setItem("location", JSON.stringify(locationData));
    }
    getStoredLocation(){
        const locationData = JSON.parse(localStorage.getItem("location"));
        if (locationData){
            this.city = locationData.city;
            this.country = locationData.country;
        }else{
            this.city = 'Kandana';
            this.country = 'LK';
        }
        return{
            city: this.city,
            country:this.state
        }
    }
}