const body = document.querySelector('body')
const container = document.querySelector('.container');
const searchBox = document.querySelector('.searchBox');
const notFound = document.querySelector('.notFound');
const weatherBox = document.querySelector('.weatherBox');
const weatherDetails = document.querySelector('.weatherDetails');
const darkmode = document.querySelector('.darkmode')
const toggle = document.getElementById('toggleDark');
const input = document.querySelector('.searchBox input');
const i = document.querySelector('.searchBox i');
const button = document.querySelector('.searchBox button');
const buttonhover = document.querySelector('.searchBox button:hover');

toggle.addEventListener('click', function() {
    this.classList.toggle('fa-moon');
    if(this.classList.toggle('fa-sun')){
        body.style.backgroundImage = 'url(images/body_bright.png)';
        body.style.color = 'white';
        container.style.color = 'white';
        container.style.background = '#fff';
        searchBox.style.background = '#fff';
        input.style.background = '#fff';
        i.style.color = '#717171';
        button.style.background = '#fff';
        button.style.color = '#717171';
        body.style.transition = '0.5s';
        searchBox.style.transition = '0.65s';
        input.style.transition = '0.65s';
        i.style.transition = '0.65s';
        button.style.transition = '0.65s';
        

    } else {
        body.style.backgroundImage = 'url(images/body_dark.png)';
        body.style.color = 'white';
        container.style.background = '#18294f';
        searchBox.style.background = '#18294f';
        input.style.background = '#18294f';
        i.style.color = '#fff';
        button.style.background = '#18294f';
        button.style.color = '#fff';
        body.style.transition = '0.5s';
        searchBox.style.transition = '0.65s';
        input.style.transition = '0.65s';
        i.style.transition = '0.65s';
        button.style.transition = '0.65s';
    }
});

searchBox.addEventListener('click', searchLocation);

searchBox.addEventListener('keydown', function(e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        searchLocation();
    }
});




function searchLocation() {
    //My own API key:
    const APIKey = '6ccd1d4c730359c8fa445096e248ce82';
    const city = document.querySelector('.searchBox input').value;
    const state = document.querySelector('.searchBox input').value;
  

   
    if (city == '' && state == '')
        return;
        //ALWAYS USE TILDA KEY ` ` TO INCLUDE API LINKS.
        //This openweathermaps API takes 'city' as input and outputs in imperial units. In the future, maybe change to API that takes 'city' and 'state code', or 'country code'.
        //openweathermaps.org API found here:
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state}&units=imperial&appid=${APIKey}`).then(response => response.json()).then(json => {

        //If user enters inelible location, hamster notFound image will display
        if(json.cod === '404') {
            container.style.height = '500px';
            container.style.width = '500px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            notFound.style.display = 'block';
            notFound.classList.add('fadeIn');
            return;
        }

        notFound.style.display = 'none';
        notFound.classList.remove('fadeIn');

////////IMPORTANT: Declaration of weather objects. If more is to be added, declare all new features and objects here.
////////.weatherBox for text in top region of app, .weatherDetails for more information in bottom region of app.
        const image = document.querySelector('.weatherBox img');
        const temperature = document.querySelector('.weatherBox .temperature');
        const temperaturemin = document.querySelector('.weatherBox .temperaturemin');
        const temperaturemax = document.querySelector('.weatherBox .temperaturemax')
        const description = document.querySelector('.weatherBox .description');
        const humidity = document.querySelector('.weatherDetails .humidity span');
        const wind = document.querySelector('.weatherDetails .wind span');
        const pressure = document.querySelector('.weatherDetails .pressure span')
        const feels_like = document.querySelector('.weatherDetails .feels_like span')

        //Corresponding weather images with weather descriptions. E.g. Clear sky = sun image.
        //Weather description derived from API weather.description is expressed in lowercase. Switch Case takes lowercase form from weather.description, NOT what's actually being written. All cases must be written in lowercase.
        //All images are stored in the directory, images/. Certain images are stored in their own styled directory. E.g. Cloud images are stored in the directory, images/clouds/.
        switch (json.weather[0].description) {
            case 'clear sky':
                image.src = 'images/clear.png';
                break;
            case 'few clouds':
                image.src = 'images/clouds/few_clouds.png';
                break; 
            case "overcast clouds":
                image.src = 'images/clouds/overcast_clouds.png';
                break;
            case "broken clouds":
                image.src = 'images/clouds/broken_clouds.png';
                break;
            case "scattered clouds":
                image.src = 'images/clouds/scattered_clouds.png';
                break;
            case 'Drizzle':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'light rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'moderate rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'heavy intensity rain':
                image.src = 'images/rain/heavy_intensity_rain.png';
                break;
            case 'very heavy rain':
                image.src = 'images/rain/very_heavy_rain.png';
                break;
            case 'extreme rain':
                image.src = 'images/rain/extreme_rain.png';
                break;
            case 'freezing rain':
                image.src = 'images/rain/.png';
                break;
            case 'light intensity shower rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'shower rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'heavy intensity shower rain':
                image.src = 'images/rain/moderate_rain.png';
                break;
            case 'ragged shower rain':
                image.src = 'images/rain/light_rain.png';
                break;
            case 'haze':
                image.src = 'images/atmospheric/haze.png';
                break;
            case 'mist':
                image.src = 'images/atmospheric/mist.png';
                break;
            case 'fog':
                image.src = 'images/atmospheric/fog.png';
                break;
            case 'smoke':
                image.src = 'images/atmospheric/smoke.png';
                break;
            case 'mist':
                image.src = 'images/atmospheric/mist.png';
                break;
            case 'tornado':
                image.src = 'images/atmospheric/tornado.png';
                break;
            case 'volcanic ash':
                image.src = 'images/atmospheric/smoke.png';
                break;
            case 'dust':
                image.src = 'images/atmospheric/haze.png';
                break;
            case 'snow':
                image.src = 'images/snow/snow.png';
                break;
            case 'Snow':
                image.src = 'images/snow/snow.png';
                break;
            case 'Thunderstorm':
                image.src = 'images/rain/thunderstorm.png';
                break;
            default:
                image.src = '';
        }

////////IMPORTANT: This is where declared content is displayed on app. parseInt takes the string from data of API and turns it into a signed integer. If text is needed to coincide with API data, include before string or after string (within tilda).
////////ALWAYS USE TILDA KEY ` ` TO GET STRING FROM API.
        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°F</span>`;
        temperaturemin.innerHTML = `L: ${parseInt(json.main.temp_min)}<span>°</span>`;
        temperaturemax.innerHTML = `H: ${parseInt(json.main.temp_max)}<span>°</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)} mph  |  ${(json.wind.deg)}<span>°</span>`;
        pressure.innerHTML = `${(json.main.pressure)} hPa`;
        feels_like.innerHTML = `${(json.main.feels_like)}<span>°F</span>`;

        //Animation for entire container. Adjustment to height of container is available here. Width adjustment is also available, just add in: container.style.width = 'px';
        //Maybe increase width in the near future to contain more .weatherDetails because no more room in height.

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '800px';
        container.style.width = '600px';
    });
};

