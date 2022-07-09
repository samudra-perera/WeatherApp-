let weather = {
    "apiKey": "162c856572321f7ca92f87b69ecc4a5b",

    fetchWeather: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + this.apiKey)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            this.displayWeather(data)
        })
    },

    displayWeather: function(data) {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        const date = new Date().toString().split(' ')
        const [month, day, year] = [date[1], date[2], date[3]]
        console.log(name, icon, description, temp, humidity, speed, month, day, year);
        console.log(typeof(date))
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = 'http://openweathermap.org/img/w/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = temp + ' °C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' Km/h'
        document.querySelector('.date').innerText = month + ' ' + day + ', ' + year
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
    },

    search: function() {
        this.fetchWeather(document.querySelector('.search-bar').value);
        this.fetchFiveDay(document.querySelector('.search-bar').value);
    },

    fetchFiveDay: function(city) {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + this.apiKey)
        .then((res) => res.json())
        .then((dataForecast) => {
            this.displayeFiveDay(dataForecast)
            console.log(dataForecast.list)

        })
    },

    displayeFiveDay: function(dataForecast) {
        const {list} = dataForecast;
        const [d2Icon, d2Temp] = [list[6].weather[0].icon ,list[6].main.temp]
        const [d3Icon, d3Temp] = [list[18].weather[0].icon ,list[18].main.temp]
        const [d4Icon, d4Temp] = [list[26].weather[0].icon ,list[26].main.temp]
        const [d5Icon, d5Temp] = [list[34].weather[0].icon ,list[34].main.temp]
        console.log(d2Icon, d2Temp)
        document.querySelector('.d2Icon').src = 'http://openweathermap.org/img/w/' + d2Icon + '.png';
        document.querySelector('.d2Temp').innerText = Math.round(d2Temp) + ' °C';
        document.querySelector('.d3Icon').src = 'http://openweathermap.org/img/w/' + d3Icon + '.png';
        document.querySelector('.d3Temp').innerText = Math.round(d3Temp) + ' °C';
        document.querySelector('.d4Icon').src = 'http://openweathermap.org/img/w/' + d4Icon + '.png';
        document.querySelector('.d4Temp').innerText = Math.round(d4Temp) + ' °C';
        document.querySelector('.d5Icon').src = 'http://openweathermap.org/img/w/' + d5Icon + '.png';
        document.querySelector('.d5Temp').innerText = Math.round(d5Temp) + ' °C';
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
