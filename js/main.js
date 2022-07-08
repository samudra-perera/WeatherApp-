let weather = {
    "apiKey": "162c856572321f7ca92f87b69ecc4a5b",
    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
        .then((res) => res.json())
        .then((data) => {
            this.displayWeather(data)
        })
    },
    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = 'http://openweathermap.org/img/w/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + '°C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' Km/h'
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },
    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
        this.fetchFiveDay(document.querySelector('.search-bar').value);
    },
    fetchFiveDay: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + this.apiKey)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
    }
}

document.querySelector('.search button').addEventListener('click', function(){
    weather.search();
})

document.querySelector('.search-bar').addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        weather.search()
    }
})
