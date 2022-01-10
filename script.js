const apiKey = "de4c13f8ff8fa78b2d100576406ba4ab"

// DOM Variables

const input = document.getElementById("location")
const button = document.getElementById("button")

            // Response Variables

const condition = document.querySelector(".conditionResponse")
const temp = document.querySelector(".tempResponse")
const windChill = document.querySelector(".windChillResponse")



button.addEventListener("click", () => {

    const url = `http://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=imperial&appid=de4c13f8ff8fa78b2d100576406ba4ab`

    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        condition.innerHTML =  `<h4>It looks like there is going to be ${data.weather[0].description}</h4>`


        temp.innerHTML = `<h4>Actual Temperature: ${data.main.temp} F</h4>
                          <h4>Feels Like: ${data.main.feels_like} F</h4>
                          <h4>Wind Chill: ${Math.floor(35.74 + (0.6215 * data.main.temp) - (35.75 * (data.wind.speed ** 0.16)) + ((0.4275 * data.main.temp)*(data.wind.speed ** 0.16)))-3} F </h4>`

        // Should you where a jacket? Logic
        if (data.main.temp < 65){
            const jacket = document.getElementById("jacket")
            jacket.innerHTML = `<h4>You should probably wear a heavy jacket. It's pretty darn cold out there.</h4>`
            
        }else if ((data.main.temp >= 66) || (data.main.temp <= 75)) {
            const jacket = document.getElementById("jacket")
            jacket.innerHTML =  `<h4>If it's windy or you won't be moving around too much, I suggest a light windbreaker or turtle neck.</h4>`
                      
        }else{
            const jacket = document.getElementById("jacket")
            jacket.innerHTML =  `<h4>It is way to hot outside to be wearing a jacket today. #noJacketWeather</h4>`
        }

        // Setting the background image of Weather conditions card based on weather
        
        if ( (data.weather[0].id >= 200) && (data.weather[0].id <= 232)) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/thunderStorm.jpg')"
        } else if ((data.weather[0].id >= 300) && (data.weather[0].id < 322)) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/drizzle.jpg')"
        } else if ((data.weather[0].id >= 500) && (data.weather[0].id <= 531)) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/rain.jpg')"
        } else if ( (data.weather[0].id >= 600) && (data.weather[0].id <= 622)) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/snoe.jpg')"
        } else if ( (data.weather[0].id >= 801) && (data.weather[0].id <= 804)) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/clouds.jpg')"
        }

        if ( data.weather[0].id === 800) {
            const weather = document.getElementById("weatherCard")
            weather.style.backgroundImage = "url('imgs/clearSky.jpg')"
        }



        // Setting the background image of the temp card based on temperature
        if (data.main.temp < 65){
            const tempCard = document.getElementById("tempCard")
            tempCard.style.backgroundImage = "url('imgs/coldWeather.jpg')"
            tempCard.style.color = "black"
            
        }else if ((data.main.temp >= 66) || (data.main.temp <= 75)) {
            const tempCard = document.getElementById("tempCard")
            tempCard.style.backgroundImage = "url('imgs/fallWeather.jpg')"
            tempCard.style.color = "white"            
        }else{
            const tempCard = document.getElementById("tempCard")
            tempCard.style.backgroundImage = "url('imgs/summerWeather.jpg')"
        }
        
    })
})







