# Weather Dashboard
A weather dashboard that displays the weather data along with the 5 day forecast. The background of the application changes to match the search location. (ie Toronto will display a CN Tower background for example)

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, Vanilla JavaScript, Openweather API, and the Unsplash API

**Client**

The API fetch is completed via the search bar. There are two event listeners, one for 'click' and one for 'keypress'. In the application there are two fetches, one for the daily weather data and one for the 5 day forecast. There are also two display methods, ```displayWeather()``` and ```displayeFiveDay()```, these two methods take care of the majority of the functionality of the application. I used object and array destructuring to parse the API response to make the data easier to work with and insert into the DOM. The search value is passed into the Unsplash API 1600x900 endpoint and returns an image of the search location to be used as the background.


## Further Optimizations

Going back through the codebase there are some optimizations I would make if I were to go back and re-make this application. I will outline them below. 

1. Hiding the API key in an .env file so no one can take my API KEY!!!

2. When handling the ```displayFiveDay()``` method, I would use put the data into a n x m array and use a for loop to render the data. An example of how I would do it can be seen below. This would improve the code readability and allow for better modularity.

    1. I would make an array of the DOM elements via ```document.querySelectorAll('')``` 
    2. Then make a n x m array from the API request data and loop over that using a nest for loop (See example code below)

```JavaScript
const days = document.querySelectorAll('.dDay') //Creates Array of the days DOM elements ... create this for all the elements (img, h3 etc)
```
```JavaScript
const arrayOfForecastDays = [
    [list[6].weather[0].icon ,list[6].main.temp, this.daysOfTheWeek[index + 1]],
    [list[18].weather[0].icon ,list[18].main.temp, this.daysOfTheWeek[index + 2]]
    ]

for(let i = 0; i < days.length; i++) { //example to demonstrate the general idea
    icon[i].src = arrayOfForecaseDays[i][0] 
    temps[i].innerText = arrayOfForecaseDays[i][1]
    days[i].innerText = arrayOfForcastDays[i][2]
}
```
3. Using Aysnc/Await syntax for the API calls for better readability

## Future Consideration

I would add the functionality for the application to preload the weather data using the user's current location prior to load.

## Lessons Learned:

I learned how to destructure objects and arrays to better handle data and improve code readability. I also learned that sometimes you need to iterate code many times before getting it right. Furthermore, the ugliest looking solution may not always be the worst solution, ie looking at my daysOfTheWeek array. It looks terrible but gets the job done perfectly. 

## Recent Projects:
Take a look at some of my other portfolio projects:

**Just Journal:** https://github.com/samudra-perera/Journal-App-Full-Stack

**The Recipe Book** https://github.com/samudra-perera/The-Recipe-Book

**Portfolio Site** https://github.com/samudra-perera/React-Portfolio-Site/tree/main/portfolio-site
