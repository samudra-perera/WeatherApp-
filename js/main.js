let weather = {
    "apiKey": "162c856572321f7ca92f87b69ecc4a5b",

    daysOfTheWeek: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thur'],

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
        const date = new Date().toString().split(' ')
        const [strDay, month, day, year] = [date[0], date[1], date[2], date[3]]
        document.querySelector('.city').innerText = 'Weather in ' + name;
        document.querySelector('.icon').src = 'http://openweathermap.org/img/w/' + icon + '.png';
        document.querySelector('.description').innerText = description;
        document.querySelector('.temp').innerText = Math.round(temp) + ' °C';
        document.querySelector('.humidity').innerText = 'Humidity: ' + humidity + '%';
        document.querySelector('.wind').innerText = 'Wind Speed: ' + speed + ' Km/h'
        document.querySelector('.date').innerText = strDay + ' ' + month + ' ' + day + ', ' + year
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')"
        document.querySelector('.weather').classList.remove('loading')
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
        })
    },

    displayeFiveDay: function(dataForecast) {
        const {list} = dataForecast;
        const date = new Date().toString().split(' ')[0]
        const index = this.daysOfTheWeek.indexOf(date)
        const [d2Icon, d2Temp, d2Day] = [list[6].weather[0].icon ,list[6].main.temp, this.daysOfTheWeek[index + 1]]
        const [d3Icon, d3Temp, d3Day] = [list[18].weather[0].icon ,list[18].main.temp, this.daysOfTheWeek[index + 2]]
        const [d4Icon, d4Temp, d4Day] = [list[26].weather[0].icon ,list[26].main.temp, this.daysOfTheWeek[index + 3]]
        const [d5Icon, d5Temp, d5Day] = [list[34].weather[0].icon ,list[34].main.temp, this.daysOfTheWeek[index + 4]]
        document.querySelector('.d2Day').innerText = d2Day
        document.querySelector('.d2Icon').src = 'http://openweathermap.org/img/w/' + d2Icon + '.png';
        document.querySelector('.d2Temp').innerText = Math.round(d2Temp) + ' °C';
        document.querySelector('.d3Day').innerText = d3Day
        document.querySelector('.d3Icon').src = 'http://openweathermap.org/img/w/' + d3Icon + '.png';
        document.querySelector('.d3Temp').innerText = Math.round(d3Temp) + ' °C';
        document.querySelector('.d4Day').innerText = d4Day
        document.querySelector('.d4Icon').src = 'http://openweathermap.org/img/w/' + d4Icon + '.png';
        document.querySelector('.d4Temp').innerText = Math.round(d4Temp) + ' °C';
        document.querySelector('.d5Day').innerText = d5Day
        document.querySelector('.d5Icon').src = 'http://openweathermap.org/img/w/' + d5Icon + '.png';
        document.querySelector('.d5Temp').innerText = Math.round(d5Temp) + ' °C';
        document.querySelector('.fourDay').classList.remove('loading')
        document.querySelector('.forecastTitle').classList.remove('loading')
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

// Last thing to do is add the Air Quality Index to the weather app and then complete the JS and Styling and it will be ready to be the first portfolio proj